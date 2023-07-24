import { STRIPE_SECRET } from '$env/static/private';
import { fail, json } from '@sveltejs/kit';
import initStripe from 'stripe';

const stripe = new initStripe(STRIPE_SECRET as string, {
	apiVersion: '2022-11-15'
});

export const GET = async ({ locals: { supabase, getSession } }) => {
	// let { data: users } = await supabase.from('users').select('id');
	const session = await getSession();

	if (!session) {
		// the user is not signed in
		throw fail(401, { message: 'Unauthorized' });
	}

	const customer = await stripe.customers.create({
		name: session.user.id
	});

	const { data, error } = await supabase
		.from('customers')
		.insert({ id: session.user.id, stripe_customer_id: customer.id })
		.select();

	return json({
		customer,
		data,
		error
	});
};
