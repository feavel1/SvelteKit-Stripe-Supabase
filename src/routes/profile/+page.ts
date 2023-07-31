export const load = async ({ parent }: any) => {
	const { supabase } = await parent();

	const { data: subscription } = await supabase
		.from('subscriptions')
		.select('*, prices(*, products(*))')
		.in('status', ['trialing', 'active'])
		.maybeSingle()
		.throwOnError();

	return {
		subscription
	};
};
