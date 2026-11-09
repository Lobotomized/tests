<script lang="ts">
	import TopicLi from '$lib/components/TopicLi.svelte';
	import { topics } from '../topics';
	import jsIcon from '$lib/assets/jsIcon.png';
</script>

<div class="links-container">
	<h2 class="links-title">JS</h2>
	<ul class="links-list">
		<TopicLi topic={topics.jsMixed} link={'/jsMixed'} fullQuestions={25} iconSrc={jsIcon}></TopicLi>
		<TopicLi topic={topics.jsAsync} link={'/jsAsync'} icon="⏱️"></TopicLi>
		<TopicLi topic={topics.jsInheritance} link={'/jsInheritance'} icon="👨‍👩‍👧‍👦"></TopicLi>
		<TopicLi topic={topics.jsThis} link={'/jsThis'} icon="🫵"></TopicLi>
		<TopicLi topic={topics.jsScope} link={'/jsScope'} icon="🔍"></TopicLi>
		<TopicLi topic={topics.jsExpressions} link={'/jsExpressions'} icon="🧮"></TopicLi>
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
</style>

