<script>
	import Homepage from '$lib/pages/Homepage.svelte';

	const categoriesData = [
		{
			img: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
			heading: 'Modern Laptop',
			description:
				'Experience productivity on-the-go with our sleek and powerful laptop. Packed with cutting-edge technology, it offers seamless multitasking and stunning visuals for work or play.'
		},
		{
			img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
			heading: 'Vans Limited Edition',
			description:
				'Step into comfort and style with our versatile shoes. Whether youre hitting the gym, exploring the outdoors, or heading to a special event, our shoes provide the perfect blend of support and fashion.'
		},
		{
			img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
			heading: 'Prada Jacket',
			description:
				'Stay stylish and warm in our premium jacket. Crafted with high-quality materials, its designed to keep you cozy in cold weather while making a fashion statement.'
		},
		{
			img: 'https://plus.unsplash.com/premium_photo-1681305757960-8346c233ff4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
			heading: 'IPhone 14 pro',
			description:
				'Elevate your digital life with our advanced smartphone. Featuring a stunning display, lightning-fast performance, and a camera that captures moments in breathtaking detail, its the perfect companion for modern living.'
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
