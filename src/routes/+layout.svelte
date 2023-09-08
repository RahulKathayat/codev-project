<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { cartItems, user } from '$lib/stores';
	import '$lib/styles/tailwind.scss';
	import { onMount } from 'svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import { browser } from '$app/environment';

	onMount(() => {
		$cartItems = JSON.parse(localStorage.getItem('cart') ?? '') || [];
		cartItems.subscribe((data) => {
			if (browser) localStorage && localStorage.setItem('cart', JSON.stringify(data));
		});
	});
</script>

<SvelteToast />

<div class="relative bg-white shadow">
	<div class="max-w-7xl mx-auto px-4 sm:px-6">
		<div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
			<div class="flex justify-start lg:w-0 lg:flex-1">
				<a href="/">
					<span class="sr-only">Workflow</span>
					<div class="font-sans text-3xl font-extrabold text-black">LS</div>
				</a>
			</div>

			<div class="hidden md:flex items-center justify-end gap-3 md:flex-1 lg:w-0">
				<a
					href="/products"
					class="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black"
				>
					Products
				</a>
				<a
					href="/cart"
					class="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
				>
					Cart
				</a>
				{#if !$user}
					<a
						href="/login"
						class="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
					>
						Login
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>

<slot />
<Footer />
