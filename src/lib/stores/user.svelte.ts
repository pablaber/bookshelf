import { Collections, type UsersResponse } from '../../pocketbase-types';

let userState = $state<UsersResponse>({
	id: 'default',
	username: 'default',
	verified: false,
	avatar: '',
	emailVisibility: false,
	email: 'default',
	name: 'Profile',
	isLibrarian: false,
	created: new Date().toISOString(),
	updated: new Date().toISOString(),
	collectionId: 'default',
	collectionName: Collections.Users
});

export const auth = {
	get user() {
		return userState;
	},
	set user(newUser: UsersResponse) {
		userState = newUser;
	}
};
