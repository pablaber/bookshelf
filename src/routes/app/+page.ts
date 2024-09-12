import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const p = await parent();
	if (p.user === undefined) return redirect(302, '/auth/login');
};
