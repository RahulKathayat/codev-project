<script lang="ts">
	import { cartItems } from '$lib/stores';
	import type { Product } from '../../global';

	export let removeIcon = false;
	export let data: Product;
</script>

<div class="px-6 py-4 border rounded-md w-[300px] h-[450px] flex flex-col justify-between">
	<div class="">
		<div class="w-full h-[250px]">
			<img src={data.image} class="w-full h-full object-cover" alt="" />
		</div>

		<div class="mt-4 font-semibold">
			Title: {data.title}
		</div>

		<div class="mt-2">
			Rating: {data.rating.rate}
		</div>
	</div>
	<div class="">
		{#if removeIcon}
			<button
				on:click={() => {
					const newItems = $cartItems.filter((e) => e.id !== data.id);
					cartItems.set(newItems);
				}}
				class="bg-red-600 mt-3 px-4 py-2 font-semibold rounded-md text-white block w-full"
			>
				Remove
			</button>
		{:else}
			<button
				on:click={() => {
					cartItems.set([...$cartItems, data]);
				}}
				class="bg-green-600 px-4 py-2 font-semibold rounded-md text-white block w-full"
			>
				Add to cart
			</button>
		{/if}
	</div>
</div>
