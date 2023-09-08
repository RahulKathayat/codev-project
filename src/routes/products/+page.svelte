<script lang="ts">
	import Product from '$lib/components/Product.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<section class="px-6 py-6">
	<div class="container w-10/12 mx-auto max-w-[1300px]">
		<h1 class="font-bold text-4xl text-gray-700 text-center">Our products:</h1>

		<div class="mt-10 flex flex-wrap gap-5 items-center justify-center">
			{#each data.products as product}
				<Product data={product} />
			{/each}
		</div>
	</div>
</section>
