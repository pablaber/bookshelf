<script lang="ts">
	import type { PageData } from "./$types";

  const { data } = $props() as { data: PageData};

  let name = $state(data.user.name);
  let email = $state(data.user.email);
</script>

<div>
  <h1>Edit Profile</h1>
  <form>
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
      <input value={name} type="text" id="name" name="name" class="w-full px-3 py-2 border border-gray-300 rounded-md">
    </div>
    <div class="mb-6">
      <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
      <input type="email" id="email" name="email" value={email} disabled class="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 cursor-not-allowed">
  </div>
    <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
      Save Changes
    </button>
  </form>
</div>