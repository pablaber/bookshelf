import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// On the main load, if the user is authenticated we redirect them to the main
// application, otherwise we redirect them to the login page.
export const load: PageLoad = async ({ data }) => {
	if (data.user) throw redirect(302, '/app/home');
	throw redirect(307, '/auth/login');
};

