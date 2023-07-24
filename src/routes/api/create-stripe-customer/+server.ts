// src/routes/api/create-stripe-customer/+server.ts

import { STRIPE_SECRET } from '$env/static/private';
import { json } from '@sveltejs/kit';
import initStripe from 'stripe';
import { supabase } from '$lib/supabase/subabaseClient';

const stripe = new initStripe(STRIPE_SECRET as string, {
	apiVersion: '2022-11-15'
});

export const POST = async ({ request }) => {
	const blyatRequestWorking = await request.json();

	const customer = await stripe.customers.create({
		name: blyatRequestWorking.record.id
	});

	const { data, error } = await supabase
		.from('customers')
		.insert({ id: blyatRequestWorking.record.id, stripe_customer_id: customer.id })
		.select();

	return json({
		customer,
		data,
		error
	});
};
