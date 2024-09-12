<script lang="ts">
  import { page } from '$app/stores';

  let user = $derived($page.data.user);
</script>

<h1>Hello {user.email}</h1>