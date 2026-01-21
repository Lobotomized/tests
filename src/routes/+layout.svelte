<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
	import { injectAnalytics } from '@vercel/analytics/sveltekit'
	
	injectAnalytics();
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<style>
		::-webkit-scrollbar {
			display: none;
		}
		html {
			scrollbar-width: none;
		}
	</style>
</svelte:head>
{@render children()}
