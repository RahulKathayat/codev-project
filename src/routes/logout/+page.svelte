<script lang="ts">
	import { signOutUser } from '$lib/utils/auth';
	import { onMount } from 'svelte';

	onMount(() => {
		signOutUser();
	});
</script>

Success!! go to <a href="/" class="underline">home</a>
