import { redirect, fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { ClientResponseError } from 'pocketbase';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();

		if (!email || !password) {
			return fail(400, {
				error: { message: 'Missing email or password' }
			});
		}

		try {
			const { token, record } = await locals.pb
				.collection('users')
				.authWithPassword(email, password);
			console.log(token);
			console.log(record);
		} catch (err) {
			locals.pb.authStore.clear();
			if (err instanceof ClientResponseError) {
				if (err.status === 400) {
					console.log('Invalid email or password.');
					return fail(401, { error: { message: 'Invalid email or password.' } });
				}
				console.log('Failed with known error:', err);
				return fail(401, { error: err.data });
			} else {
				console.log('Failed with unknown error:', err);
				return fail(401, { error: { message: 'An unknown error occurred.' } });
			}
		}

		return redirect(302, '/app');
	}
};
