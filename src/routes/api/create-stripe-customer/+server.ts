// src/routes/api/create-stripe-customer/+server.ts

import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabase/subabaseClient';
import initStripe from 'stripe';
import { STRIPE_SECRET } from '$env/static/private';

const stripe = new initStripe(STRIPE_SECRET as string, {
	apiVersion: '2022-11-15'
});

export const POST = async ({ request }) => {
	const insertUserRecord = await request.json();
	const customer = await stripe.customers.create({
		name: insertUserRecord.record.id
	});
	await supabase
		.from('customers')
		.insert({ id: insertUserRecord.record.id, stripe_customer_id: customer.id })
		.select();

	return json({
		status: 200,
		headers: {},
		body: JSON.stringify({
			message: 'Success'
		})
	});
};
