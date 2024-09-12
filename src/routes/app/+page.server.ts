import type { Actions } from './$types';

export const actions: Actions = {
	defualt: async ({ locals }) => {
		const { user } = locals;
		return { user };
	}
};
