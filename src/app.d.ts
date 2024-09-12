import type PocketBase, { type Users } from 'pocketbase';
import type { UsersResponse } from './pocketbase-types';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: PocketBase;
			user?: UsersResponse;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module '$env/static/private' {
	export const POCKETBASE_URL: string?;
	export const ENVIRONMENT: undefined | 'local' | 'production';
}

export {};
