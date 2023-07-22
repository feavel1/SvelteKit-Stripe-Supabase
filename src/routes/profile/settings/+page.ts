//@ts-nocheck

export const load = async ({ parent }) => {
	const { supabase, session } = await parent();
	const { data } = await supabase.from('users').select('*').eq('id', session.user.id).single();
	return {
		userdata: data
	};
};
