import PocketBase from 'pocketbase';
import { POCKETBASE_URL, ENVIRONMENT } from '$env/static/private';
import type { TypedPocketBase, UsersResponse } from './pocketbase-types';

export async function handle({ event, resolve }) {
	if (!POCKETBASE_URL) {
		throw new Error('POCKETBASE_URL is not defined in the environment');
	}

	event.locals.pb = new PocketBase(POCKETBASE_URL) as TypedPocketBase;
	const cookieHeader = event.request.headers.get('cookie') || '';
	event.locals.pb.authStore.loadFromCookie(cookieHeader);

	try {
		if (event.locals.pb.authStore.isValid) {
			await event.locals.pb.collection('users').authRefresh();
			event.locals.user = structuredClone(event.locals.pb.authStore.model as UsersResponse);
		} else {
			event.locals.user = undefined;
		}
	} catch (error) {
		console.error(error);
		event.locals.pb.authStore.clear();
	}

	const response = await resolve(event);

	const setCookieSecure = ENVIRONMENT === 'production';
	response.headers.append(
		'set-cookie',
		event.locals.pb.authStore.exportToCookie({ secure: setCookieSecure })
	);
	return response;
}
