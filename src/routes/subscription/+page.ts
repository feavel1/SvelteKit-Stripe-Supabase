export const load = async ({ parent }: any) => {
	const { supabase } = await parent();

	const { data: subscription } = await supabase
		.from('subscriptions')
		.select('*, prices(*, products(*))')
		.in('status', ['trialing', 'active'])
		.maybeSingle()
		.throwOnError();

	const { data: products } = await supabase
		.from('products')
		.select('*, prices(*)')
		.eq('active', true)
		.eq('prices.active', true)
		.order('metadata->index')
		.order('unit_amount', { foreignTable: 'prices' });

	return {
		subscription,
		products
	};
};
