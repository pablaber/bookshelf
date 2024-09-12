<script lang="ts">
  import type { PageData } from './$types';
  const { data } = $props() as { data: PageData };
  import { auth } from '$lib/stores/user.svelte';

  auth.user = data.user;
</script>

<h1>Hello {auth.user.email}</h1>