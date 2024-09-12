import { redirect, type RequestHandler } from '@sveltejs/kit';

// Logout

export const POST: RequestHandler = ({ locals }) => {
	locals.pb.authStore.clear();
	locals.user = undefined;
	throw redirect(302, '/auth/login');
};
