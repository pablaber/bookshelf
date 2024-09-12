import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { user } = await parent();
	if (!user) return redirect(307, '/auth/login');
	return redirect(302, '/app/home');
};
