<script>
	import LoadingScreenDefault from '$lib/pages/LoadingScreenDefault.svelte';
	import { user } from '$lib/stores';
</script>

{#if $user}
	authenticated
{:else}
	<LoadingScreenDefault />
{/if}
