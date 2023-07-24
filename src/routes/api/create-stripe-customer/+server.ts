// src/routes/api/protected-route/+server.js
import { json } from '@sveltejs/kit';
import initStripe from 'stripe';
import { STRIPE_SECRET } from '$env/static/private';
import { supabase } from '$lib/supabase/subabaseClient';

const stripe = new initStripe(STRIPE_SECRET as string, {
	apiVersion: '2022-11-15'
});

export const GET = async ({ request }) => {
	// let { data: users } = await supabase.from('users').select('id');

	const customer = await stripe.customers.create({
		email: request.body?.email
	});

	const { data, error } = await supabase
		.from('customers')
		.insert({ id: request.body?.id, stripe_customer_id: customer.id })
		.select();

	return json({ data, error });
};
