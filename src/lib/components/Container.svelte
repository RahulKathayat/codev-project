<script lang="ts">
	import clsx from 'clsx';

	export let sectionClass: string = '';
	export let className: string = '';
	export let centered: boolean = false;
</script>

<section class={clsx(sectionClass, centered && 'flex h-screen w-full items-center justify-center')}>
	<div class={clsx(className, 'mx-auto w-full max-w-[450px] px-6 py-4')}>
		<slot />
	</div>
</section>
