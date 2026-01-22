<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
	import og from '$lib/assets/og.png';
	import { injectAnalytics } from '@vercel/analytics/sveltekit'
	
	injectAnalytics();
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta property="og:image" content={og} />
	<title>Find my developer weakness</title>
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

<footer class="footer">
	<div class="footer-content">
		<a href="https://www.linkedin.com/in/ivan-dzholev-805720151/" class="footer-text">We’ve helped dozens of developers reach the $200,000 annual milestone. If you’re looking for help reaching the next level, message me on LinkedIn.</a>
		<a href="https://www.linkedin.com/in/ivan-dzholev-805720151/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
				<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
			</svg>
		</a>
	</div>
</footer>


<style>
		.footer {
		max-width: 600px;
		margin: 0 auto 2rem;
		padding: 0 2rem;
		text-align: center;
	}

	.footer-content {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}

	.footer-text {
		color: #718096;
		font-size: 0.875rem;
		margin: 0;
	}
</style>