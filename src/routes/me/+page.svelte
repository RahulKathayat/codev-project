<script lang="ts">
	import LoadingScreenDefault from '$lib/pages/LoadingScreenDefault.svelte';
	import { isLoading, user } from '$lib/stores';
</script>

{#if $isLoading}
	Userdata: {$user}
{:else}
	<LoadingScreenDefault />
{/if}
