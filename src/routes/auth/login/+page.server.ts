import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();

		if (!email || !password) {
			return {
				status: 400,
				body: {
					error: 'Invalid email or password'
				}
			};
		}

		const { token, record } = await locals.pb.collection('users').authWithPassword(email, password);

		console.log(token, record);
	}
};
