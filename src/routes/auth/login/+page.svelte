<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Alert from "$lib/components/ui/alert";
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/stores';

	let email = '';
	let password = '';
	let isLoading = false;

	let error = $derived($page.form?.error);
</script>

<div class="container h-screen flex flex-col items-center justify-center">
	<h1>Bookshelf</h1>
	<div class="my-5">
		<Card.Root class="w-[350px]">
			<Card.Header>
				<Card.Title>Lets start reading</Card.Title>
			</Card.Header>
			<Card.Content>
				<form method="post">
					<div class="grid gap-2">
						<div class="grid gap-1">
							<Label class="sr-only" for="email">Email</Label>
							<Input
								id="email"
								name="email"
								placeholder="name@example.com"
								type="email"
								value={email}
							/>
						</div>
						<div class="grid gap-1">
							<Label class="sr-only" for="password">Password</Label>
							<Input id="password" name="password" type="password" value={password} />
						</div>
						<div class="grid gap-1">
							<Button type="submit" disabled={isLoading}>Sign In</Button>
						</div>
					</div>
				</form>
			</Card.Content>
		</Card.Root>
		{#if error?.message !== undefined}
			<Alert.Root class="my-2" variant="destructive">
				<Alert.Description>{error.message}</Alert.Description>
			</Alert.Root>
		{/if}
	</div>
</div>
