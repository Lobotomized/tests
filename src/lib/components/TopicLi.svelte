<script lang="ts">
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
	import { fade, slide } from 'svelte/transition';
    import { clickoutside } from '@svelte-put/clickoutside';

	let {
		link, topic, icon = '', iconSrc = '', quickQuestions=5, midQuestions=10, fullQuestions=20
	} = $props();

	let showOptions = $state(false);

	function handleClick() {
		showOptions = true;
	}

	function selectOption(count: number) {
		goto(`${resolve(link)}?questionsNumber=${count}`);
	}
    
</script>

<li use:clickoutside={{ event: 'mousedown' }}
        onclickoutside={(event) => {
            showOptions= false; event.stopPropagation()}} class="link-item">
	{#if !showOptions}
		<button
			data-sveltekit-preload-data="tap"
			class="link-card"
			onclick={handleClick}
			in:slide={{ duration: 500 }}
            out:slide={{duration: 500}}
		>
			{#if iconSrc}
				<img class="link-icon" src={iconSrc} alt="icon" style="width: 2rem; height: 2rem;" />
			{:else}
				<span class="link-icon">{icon}</span>
			{/if}
			<span class="link-text">{topic}</span>
		</button>
	{:else}
		<div class="options-container" out:slide={{duration: 500}} in:slide={{ duration: 500 }}>
			<button class="option-button" onclick={() => selectOption(quickQuestions)}>Quick</button>
			<button class="option-button" onclick={() => selectOption(midQuestions)}>Medium</button>
			<button class="option-button" onclick={() => selectOption(fullQuestions)}>Full</button>
		</div>
	{/if}
</li>

<style>
	.link-item {
		margin: 0;
		width: 100%;
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
		cursor: pointer;
		width: 100%;
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

	.options-container {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 1rem;
		background: white;
		border-radius: 12px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
		width: 100%;
	}

	.option-button {
		padding: 0.75rem 1rem;
		border: none;
		border-radius: 8px;
		background: #f1f5f9;
		color: #2d3748;
		font-size: 1rem;
		font-weight: 500;
		cursor: pointer;
		transition: background 0.2s ease;
	}

	.option-button:hover {
		background: #e2e8f0;
	}
</style>
