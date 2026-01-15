<script lang="ts">
	import type { QuestionPublic } from '$lib/quiz/types';
	import IncorrectSource from './IncorrectSource.svelte';
	import Prism from 'prismjs';
	import 'prismjs/components/prism-javascript';
	import 'prismjs/themes/prism-tomorrow.css';
	let {
		q,
		selectedIndex = -1,
		disabled = false,
		submitted = false,
		fullscreen = false,
		isCorrect,
		correctIndex,
		onSelect
	} = $props<{
		q: QuestionPublic;
		selectedIndex?: number;
		disabled?: boolean;
		submitted?: boolean;
		fullscreen?: boolean;
		isCorrect?: boolean;
		correctIndex?: number;
		onSelect: (index: number) => void;
	}>();
	function choose(oi: number) {
		onSelect?.(oi);
	}
	// svelte-ignore non_reactive_update
		let codeElement: HTMLElement;

	// Update the DOM directly when q changes
	$effect(() => {
		const qValue = q;
		if (codeElement) {
		codeElement.innerHTML = Prism.highlight(
			qValue?.code || '', 
			Prism.languages.javascript, 
			'javascript'
		);
		}
	});
</script>

<section
	class={'card ' +
		(fullscreen ? 'fullscreen' : '') +
		' ' +
		(submitted ? (isCorrect ? 'correct' : 'wrong') : '')}
>
	<h2>{q.title}</h2>
	<p class="prompt">{q.prompt}</p>
	{#if q.code}

	<pre class="language-javascript">
<code class="language-javascript" bind:this={codeElement}></code>
	</pre>
	{/if}
	<ol class="options">
		{#each q.options as opt, oi (oi)}
			<li>
				<label
					class={'option ' +
						(submitted && oi === correctIndex ? 'correctOpt' : '') +
						(submitted && selectedIndex === oi && isCorrect === false ? ' wrongSelected' : '')}
				>
				{#key selectedIndex}
					<input
						class="option-input"
						type="radio"
						name={'q-' + q.id}
						checked={selectedIndex === oi}
						onchange={() => choose(oi)}
						{disabled}
					/>
				{/key}
					<span>{opt}</span>
				</label>
			</li>
		{/each}
	</ol>
{#if isCorrect === false}
	{#each q.sources as src}
		<div class="m-3">
		<IncorrectSource src={{ source: src, indices: [q.id - 1] }} />
		</div>
	{/each}
{/if}
</section>

<style>
	code[class*="language-"],
	pre[class*="language-"] {
		white-space: pre-wrap !important;
		word-break: break-word !important; /* Ensures long, unbroken strings wrap */
	}
	.option{
		cursor: pointer;
	}
	.option-input{
		cursor: pointer;
		accent-color: var(--ok);
	}
	.card {
		background: #fff;
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		padding: 1rem 1rem;
		margin-bottom: 1rem;
	}
	.card.correct {
		border-color: var(--ok);
		background: rgba(15, 118, 110, 0.08);
	}
	.card.wrong {
		border-color: var(--bad);
		background: rgba(176, 0, 32, 0.06);
	}
	.card.fullscreen {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.prompt {
		margin: 0.25rem 0 0.5rem 0;
	}
	.code {
		background: #0b1021;
		border-radius: 8px;
		padding: 0.75rem;
		overflow: auto;
		margin-bottom: 0.75rem;
	}
	.options {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: 0.5rem;
	}
	.option {
		display: flex;
		gap: 0.55rem;
		align-items: flex-start;
		padding: 0.5rem;
		border: 1px dashed rgba(0, 0, 0, 0.1);
		border-radius: 8px;
	}
	.option.correctOpt {
		border-color: var(--ok);
		background: rgba(15, 118, 110, 0.08);
	}
	.option.wrongSelected {
		border-color: var(--bad);
		background: rgba(176, 0, 32, 0.08);
	}
</style>
