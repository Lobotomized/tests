<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div class="links-container">
	<h2 class="links-title">Explore JavaScript Topics</h2>
	<ul class="links-list">
		<li class="link-item">
			<a href={resolve('/jsAsync')} data-sveltekit-preload-data="tap" class="link-card">
				<span class="link-icon">⚡</span>
				<span class="link-text">JavaScript Async</span>
			</a>
		</li>
		<li class="link-item">
			<a href={resolve('/jsInheritance')} data-sveltekit-preload-data="tap" class="link-card">
				<span class="link-icon">🔗</span>
				<span class="link-text">JavaScript Inheritance</span>
			</a>
		</li>
	</ul>
</div>

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
		margin-bottom: 1.5rem;
		font-weight: 600;
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
</style>
