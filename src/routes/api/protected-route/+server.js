// @ts-nocheck
// src/routes/api/protected-route/+server.js
import { json, error } from '@sveltejs/kit';

export const GET = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();
	if (!session) {
		// the user is not signed in
		throw error(401, { message: 'Unauthorized' });
	}
	const { data } = await supabase.from('test').select('*');

	return json({ data });
};
