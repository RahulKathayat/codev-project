<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { user } from '$lib/stores';
	import '$lib/styles/tailwind.scss';
	import { getCurrentUser } from '$lib/utils/auth';
	import { onMount } from 'svelte';

	onMount(() => {
		getCurrentUser();
	});
</script>

<div class="relative bg-white shadow">
	<div class="max-w-7xl mx-auto px-4 sm:px-6">
		<div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
			<div class="flex justify-start lg:w-0 lg:flex-1">
				<a href="/">
					<span class="sr-only">Workflow</span>
					<img
						class="h-8 w-auto sm:h-10"
						src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
						alt=""
					/>
				</a>
			</div>

			<div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
				<a href="/products" class="font-medium hover:underline"> Products </a>
				{#if !$user}
					<a
						href="/login"
						class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
					>
						Login
					</a>
				{:else}
					<a
						href="/cart"
						class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
					>
						Cart
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>

<slot />
<Footer />
