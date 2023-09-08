<script lang="ts">
	import '$lib/styles/tailwind.scss';
	import { getCurrentUser } from '$lib/utils/auth';
	import { onMount } from 'svelte';

	onMount(() => {
		getCurrentUser();
	});
</script>

<slot />
