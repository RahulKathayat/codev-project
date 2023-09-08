<script lang="ts">
	import GoogleIcon from '$lib/icons/GoogleIcon.svelte';
	import Logo from '$lib/icons/Logo.svelte';
	import Container from '$lib/components/Container.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import { isLoading } from '$lib/stores';
	import { signInWithGoogle } from '$lib/utils/auth';
</script>

<Container className="max-w-[400px]" centered>
	<Card className="!py-16 max-w-md mx-auto">
		<div class="flex flex-col items-center justify-center">
			<Logo />

			<h1 class="font-ne mt-8 text-center text-[28px]">
				Sign in to <span class="font-bold">FakeStore</span>
			</h1>

			<Button
				on:click={signInWithGoogle}
				bind:disabled={$isLoading}
				label="login-with-goole"
				className="mt-16 !font-medium px-8 gap-2 bg-white/5 hover:bg-[#fff1] border-opacity-30 backdrop-blur-sm"
			>
				<GoogleIcon /> Continue with Google
			</Button>
		</div>
	</Card>
</Container>
