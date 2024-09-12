import { redirect, type ServerLoad } from '@sveltejs/kit';
import type { UsersResponse } from '../../pocketbase-types';

// The server will load and return the user to every page so it is available.
export const load: ServerLoad = async ({ locals }) => {
	if (locals.user === undefined) throw redirect(307, '/auth/login');
	return { user: locals.user as UsersResponse };
};
