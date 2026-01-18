<script lang="ts">
	import { resolve } from '$app/paths';
	import { topics } from './topics';
	import jsIcon from '$lib/assets/jsIcon.png'
</script>
<div class="links-container">
	<h2 class="links-title">Test your JS knowledge</h2>
	<p class="links-description">Test your knowledge and get exactly the materials you need to fill your gaps</p>
	<ul class="links-list">
		<li class="link-item">
			<a href={resolve('/jsMixed')} data-sveltekit-preload-data="tap" class="link-card">
				<img class="link-icon" src={jsIcon} alt="JavaScript" style="width: 2rem; height: 2rem;" />
				<span class="link-text">{topics.jsMixed}</span>
			</a>
		</li>
		<li class="link-item">
			<a href={resolve('/jsMixedMid')} data-sveltekit-preload-data="tap" class="link-card">
				<img class="link-icon" src={jsIcon} alt="JavaScript" style="width: 2rem; height: 2rem;" />
				<span class="link-text">{topics.jsMixedMid}</span>
			</a>
		</li>
		<li class="link-item">
			<a href={resolve('/jsMixedQuick')} data-sveltekit-preload-data="tap" class="link-card">
				<img class="link-icon" src={jsIcon} alt="JavaScript" style="width: 2rem; height: 2rem;" />
				<span class="link-text">{topics.jsMixedQuick}</span>
			</a>
		</li>
		<li class="link-item">
			<a href={resolve('/jsAsync')} data-sveltekit-preload-data="tap" class="link-card">
				<span class="link-icon">⏱️</span>
				<span class="link-text">{topics.jsAsync}</span>
			</a>	
		</li>
		<li class="link-item">
			<a href={resolve('/jsInheritance')} data-sveltekit-preload-data="tap" class="link-card">
				<span class="link-icon">👨‍👩‍👧‍👦</span>
				<span class="link-text">{topics.jsInheritance}</span>
			</a>
		</li>
		<li class="link-item">
			<a href={resolve('/jsThis')} data-sveltekit-preload-data="tap" class="link-card">
				<span class="link-icon">🫵</span>
				<span class="link-text">{topics.jsThis}</span>
			</a>
		</li>
		<li class="link-item">
			<a href={resolve('/jsScope')} data-sveltekit-preload-data="tap" class="link-card">
				<span class="link-icon">🔍</span>
				<span class="link-text">{topics.jsScope}</span>
			</a>
		</li>
		<li class="link-item">
			<a href={resolve('/jsExpressions')} data-sveltekit-preload-data="tap" class="link-card">
				<span class="link-icon">🧮</span>
				<span class="link-text">{topics.jsExpressions}</span>
			</a>
		</li>
	</ul>
</div>

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

	.links-container {
		max-width: 600px;
		margin: 2rem auto;
		padding: 2rem;
		background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
		border-radius: 16px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
	}

	.links-title {
		text-align: center;
		color: #2d3748;
		font-size: 1.75rem;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}

	.links-description {
		text-align: center;
		color: #4a5568;
		font-size: 1rem;
		margin-bottom: 1.5rem;
	}

	.links-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.link-item {
		margin: 0;
	}

	.link-card {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1.25rem 1.5rem;
		background: white;
		border-radius: 12px;
		text-decoration: none;
		color: #2d3748;
		transition: all 0.3s ease;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
	}

	.link-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
		background: #f8fafc;
	}

	.link-icon {
		font-size: 1.5rem;
		flex-shrink: 0;
	}

	.link-text {
		font-size: 1.125rem;
		font-weight: 500;
	}

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
