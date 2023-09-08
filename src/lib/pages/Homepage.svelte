<script>
	import { user } from '$lib/stores';
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-gray-50">
	<main class="lg:relative">
		<div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
			<div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
				<h1
					class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
				>
					<span class="block xl:inline">View fake products</span>
					<span class="block text-indigo-600 xl:inline">for free</span>
				</h1>
				<p class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
					We are passionate about <span class="block text-indigo-600 xl:inline"
						>revolutionizing</span
					>
					the way we see products.<br />
					Our innovative platform combines technology, expertise, and community to create an unparalleled
					User experience.
				</p>
				<div class="mt-10 sm:flex sm:justify-center lg:justify-start">
					<div class="rounded-md shadow">
						<a
							href="/products"
							class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
						>
							View products
						</a>
					</div>
				</div>
			</div>
		</div>
		<div
			class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
		>
			<img
				class="absolute inset-0 w-full h-full object-cover"
				src="https://images.unsplash.com/photo-1594144656234-8f841637455b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
				alt=""
			/>
		</div>
	</main>
</div>
