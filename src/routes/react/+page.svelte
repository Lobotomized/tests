<script lang="ts">
	import { resolve } from '$app/paths';
	import TopicLi from '$lib/components/TopicLi.svelte';
	import { topics } from '../topics';
	import reactSvg from '../react.svg';
</script>

<div class="links-container">
	<a class="back-link" href={resolve('/')}>
		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
		Back
	</a>
	<h2 class="links-title">React</h2>
	<ul class="links-list">
		<TopicLi topic={topics.reactTest} link={'/reactTest'} iconSrc={reactSvg} midQuestions={7} fullQuestions={10}></TopicLi>
	</ul>
</div>

<style>
	.links-container {
		position: relative;
		max-width: 600px;
		margin: 2rem auto;
		padding: 2rem;
		background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
		border-radius: 16px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
	}

	.back-link {
		position: absolute;
		top: 1.5rem;
		left: 1.5rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		color: #4a5568;
		font-weight: 500;
		font-size: 0.95rem;
		padding: 0.4rem 0.75rem;
		border-radius: 8px;
		background: rgba(255, 255, 255, 0.4);
		transition: all 0.2s ease;
	}

	.back-link:hover {
		background: rgba(255, 255, 255, 0.9);
		color: #2d3748;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
		transform: translateX(-2px);
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
</style>
