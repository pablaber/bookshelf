<script lang="ts">
	import { page } from '$app/stores';
	import { auth } from '$lib/stores/user.svelte';
	import { fade, slide } from 'svelte/transition';

	const navbarLinks = [
		{ name: 'Home', path: '/app/home' },
		{ name: 'Shelves', path: '/app/shelves' },
		{ name: 'Explore', path: '/app/explore' }
	];

	let profileMenuExpanded = $state(false);
	const userDisplayName = $derived(auth.user.name || auth.user.email);

	const active = (path: string) => {
		return $page.url.pathname === path ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900';
	};

	const toggleProfileMenu = () => {
		profileMenuExpanded = !profileMenuExpanded;
	};
</script>

<nav class="bg-white border-gray-200 dark:bg-gray-900 border-b-2">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<div class="hidden w-full md:block md:w-auto" id="navbar-default">
			<ul
				class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
			>
				{#each navbarLinks as { name, path }}
					<li>
						<a href={path} class={active(path)}>{name}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="relative inline-block">
			<button onclick={toggleProfileMenu}>
				<span class="text-gray-900 cursor-pointer">{userDisplayName}</span>
			</button>
			{#if profileMenuExpanded}
				<div
					in:slide
					out:slide
					class="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-lg"
				>
					<ul>
						<li>
							<a href="/app/profile" class="block py-2 px-3">Profile</a>
						</li>
						<li>
							<form action="/auth/logout" method="POST">
								<button type="submit" class="block py-2 px-3">Logout</button>
							</form>
						</li>
					</ul>
				</div>
			{/if}
		</div>
	</div>
</nav>

<style lang="postcss">
	a {
		@apply block py-2 px-3;
	}
</style>
