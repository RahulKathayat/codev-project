<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
import '$lib/styles/tailwind.scss';
	import { getCurrentUser } from '$lib/utils/auth';
	import { onMount } from 'svelte';

	onMount(() => {
		getCurrentUser();
	});
</script>

<slot />
<Footer></Footer>	
