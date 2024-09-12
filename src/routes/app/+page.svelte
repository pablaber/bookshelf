<script lang="ts">
  import type { PageData } from './$types';
  const { data } = $props() as { data: PageData };
</script>

<h1>Hello {data.user.email}</h1>