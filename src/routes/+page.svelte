<script>
	import Homepage from '$lib/pages/Homepage.svelte';

	const categoriesData = [
		{
			img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
			heading: 'Lorem ipsum dolor',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus necessitatibus accusantium ab commodi amet.'
		},
		{
			img: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
			heading: 'Lorem ipsum dolor',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus necessitatibus accusantium ab commodi amet.'
		},
		{
			img: 'https://images.unsplash.com/photo-1598193957036-67845e5ead00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80',
			heading: 'Lorem ipsum dolor',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus necessitatibus accusantium ab commodi amet.'
		},
		{
			img: 'https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
			heading: 'Lorem ipsum dolor',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus necessitatibus accusantium ab commodi amet.'
		}
	];
</script>

<Homepage />

<section id="products" class="mt-12">
	<div class="container mx-auto w-10/12 max-w-[1100px] py-10 md:py-20">
		<h2
			class="text-center text-2xl font-bold underline underline-offset-4 lg:text-3xl lg:underline-offset-8"
		>
			Categories:
		</h2>

		<a href="/products">
			<div
				class="mx-auto mt-16 flex w-full flex-col items-center justify-center gap-8 lg:h-screen lg:max-h-[600px] lg:flex-row lg:gap-4"
			>
				{#each categoriesData as data}
					<div class="group bg-black image block">
						<img
							src={data.img}
							alt=""
							class="opacity-50 duration-200 lg:opacity-100 lg:group-hover:opacity-50"
						/>

						<div
							class="absolute top-16 left-1/2 -translate-x-1/2 text-center text-white opacity-100 duration-200 lg:opacity-0 lg:group-hover:opacity-100"
						>
							<h2 class="text-2xl font-bold">{data.heading}</h2>
							<p class="mt-6 w-80">{data.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</a>
	</div>
</section>

<style lang="postcss">
	.image {
		flex: 1;
		transition: 0.3s ease;
		@apply relative h-[300px] w-full overflow-hidden rounded-md lg:h-full lg:w-fit;
	}

	.image img {
		@apply h-[300px] w-full object-cover lg:h-full;
	}

	.image:hover {
		flex: 2;
	}
</style>
