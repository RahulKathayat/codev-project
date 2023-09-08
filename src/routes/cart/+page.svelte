<script>
	import Product from '$lib/components/Product.svelte';
	import { cartItems } from '$lib/stores';
</script>

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

	<button class="px-6 py-4 bg-black my-10 rounded-md text-white font-bold mx-auto block">
		Checkout
	</button>
{:else}
	<div class="text-center py-10">No items</div>
{/if}
