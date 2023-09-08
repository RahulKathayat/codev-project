<script>
	import Product from '$lib/components/Product.svelte';
	import LoadingScreenDefault from '$lib/pages/LoadingScreenDefault.svelte';
	import { cartItems, user } from '$lib/stores';
</script>

{#if $user}
	{#if $cartItems.length}
		<section class="px-6 py-6">
			<div class="container w-10/12 mx-auto max-w-[1300px]">
				<h1 class="font-bold text-4xl text-gray-700 text-center">Cart:</h1>

				<div class="mt-10 flex flex-wrap gap-5 items-center justify-center">
					{#each $cartItems as item}
						<Product removeIcon data={item} />
					{/each}
				</div>
			</div>
		</section>
	{:else}
		<div class="text-center py-10">No items</div>
	{/if}
{:else}
	<LoadingScreenDefault />
{/if}
