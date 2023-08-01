// src/routes/api/protected-route/+server.ts
import { json, fail } from '@sveltejs/kit';
import { STRIPE_SECRET } from '$env/static/private';
import initStripe from 'stripe';

const stripe = new initStripe(STRIPE_SECRET as string, {
	apiVersion: '2022-11-15'
});

export const GET = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (!session) {
		// the user is not signed in
		throw fail(401, { message: 'Unauthorized' });
	}

	let { data: users } = await supabase.from('users').select('id');

	return json({ users });
};
