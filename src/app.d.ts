import type PocketBase, { type AuthModel } from 'pocketbase';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: PocketBase;
			user?: AuthModel;
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
