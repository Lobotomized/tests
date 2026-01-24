<script lang="ts">
	import { resolve } from '$app/paths';
	import TopicLi from '$lib/components/TopicLi.svelte';
	import { topics } from './topics';
	import jsIcon from '$lib/assets/jsIcon.png'
	import reactSvg from './react.svg'
</script>
<div class="links-container">
	<h2 class="links-title">Test your JS knowledge</h2>
	<p class="links-description">Test your knowledge and get exactly the materials you need to fill your gaps</p>
	<ul class="links-list">
		<TopicLi topic={topics.jsMixed} link={'/jsMixed'} fullQuestions={25} iconSrc={jsIcon} ></TopicLi>
		<TopicLi topic={topics.jsAsync} link={'/jsAsync'} icon="⏱️" ></TopicLi>
		<TopicLi topic={topics.jsInheritance} link={'/jsInheritance'} icon="👨‍👩‍👧‍👦" ></TopicLi>
		<TopicLi topic={topics.jsThis} link={'/jsThis'} icon="🫵" ></TopicLi>
		<TopicLi topic={topics.jsScope} link={'/jsScope'} icon="🔍" ></TopicLi>
		<TopicLi topic={topics.jsExpressions} link={'/jsExpressions'} icon="🧮" ></TopicLi>
		<TopicLi topic={topics.react} link={'/react'} iconSrc={reactSvg} ></TopicLi>
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


</style>
