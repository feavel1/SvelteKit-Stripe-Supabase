// @ts-nocheck
// src/routes/api/protected-route/+server.js
import { json, error } from '@sveltejs/kit';
import initStripe from 'stripe';
import { STRIPE_SECRET } from '$env/static/private';

const stripe = new initStripe(STRIPE_SECRET as string, {
	apiVersion: '2022-11-15'
});

export const GET = async ({ locals: { supabase, getSession }, request }) => {
	const session = await getSession();
	if (!session) {
		// the user is not signed in
		throw error(401, { message: 'Unauthorized' });
	}

	let { data: users, error } = await supabase.from('users').select('id');

	const { customer } = await stripe.customers.create({
		email: 'hello@me.com'
	});

	return json({ users });
};
