import type { AuthModel } from 'pocketbase';

export function authState() {
	let user = $state<AuthModel>();

	return {
		isAuthenticated: user !== undefined,
		setUser: (newUser: AuthModel) => (user = newUser),
		user
	};
}
