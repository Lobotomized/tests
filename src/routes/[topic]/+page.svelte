<script lang="ts">
	import QuestionCard from '$lib/components/QuestionCard.svelte';
	import type { QuestionPublic, GradeResult } from '$lib/quiz/types';

	import { onMount } from 'svelte';

	let { data } = $props();
	const questions: QuestionPublic[] = data.questions;
	const topic: string = data.topic || '';
	let selections = $state<number[]>(Array(questions.length).fill(-1));
	let submitted = $state(false);
	let result = $state<GradeResult | null>(null);
	let loading = $state(true);
	let error = $state<string | null>(null);
	let currentIndex = $state(0);

	onMount(() => {
		loading = false;
	});
	function select(optionIndex: number) {
		if (submitted) return;
		selections[currentIndex] = optionIndex;
	}

	async function submitQuiz() {
		if (submitted) return;
		loading = true;
		error = null;
		const res = await fetch('/api/grade', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ selections, topic })
		});
		loading = false;
		submitted = true;
		if (res.ok) {
			result = await res.json();
		} else {
			error = 'Failed to grade quiz';
		}
	}

	function resetQuiz() {
		selections = Array(questions.length).fill(-1);
		submitted = false;
		result = null;
		error = null;
		currentIndex = 0;
	}

	function nextQuestion() {
		if (currentIndex < questions.length - 1) {
			if (submitted || selections[currentIndex] !== -1) {
				currentIndex += 1;
			}
		}
	}

	function prevQuestion() {
		if (currentIndex > 0) {
			currentIndex -= 1;
		}
	}
</script>

{#if loading || !questions || questions.length === 0}
	<main class="fullscreen loading-container">
		<div class="loader">
			<div class="dot"></div>
			<div class="dot"></div>
			<div class="dot"></div>
		</div>
		<p class="load-text">Loading questions…</p>
	</main>
{:else}
	<main class="fullscreen container">
		<h1>Coding Quiz</h1>
		<p class="subtitle">Question {currentIndex + 1} of {questions.length}</p>
		{#if submitted}
			<p class={'status ' + (result && result.correct[currentIndex] ? 'ok' : 'bad')}>
				{result && result.correct[currentIndex] ? 'Correct' : 'Incorrect'}
			</p>
		{/if}
		{#if error}
			<p class="error">{error}</p>
		{/if}
		<div class="question">
			<QuestionCard
				q={questions[currentIndex]}
				selectedIndex={selections[currentIndex]}
				disabled={submitted}
				{submitted}
				isCorrect={result ? result.correct[currentIndex] : undefined}
				correctIndex={result ? result.correctIndices[currentIndex] : undefined}
				onSelect={(i) => select(i)}
				fullscreen={true}
			/>
		</div>
		<div class="actions">
			{#if !submitted}
				{#if currentIndex < questions.length - 1}
					<button onclick={nextQuestion} disabled={selections[currentIndex] === -1}>Next</button>
				{:else}
					<button onclick={submitQuiz} disabled={selections.some((s) => s === -1)}>
						Submit Quiz
					</button>
				{/if}
				<button onclick={resetQuiz} class="secondary">Reset</button>
			{:else}
				<button onclick={prevQuestion} disabled={currentIndex === 0}>Previous</button>
				<button onclick={nextQuestion} disabled={currentIndex === questions.length - 1}>Next</button
				>
				<button onclick={resetQuiz} class="secondary">Restart</button>
			{/if}
		</div>
		{#if submitted && result}
			<section class="summary card">
				<h2>Results</h2>
				<p>You answered {result.score} out of {result.total} correctly.</p>
			</section>
		{/if}
	</main>
{/if}

<style>
	:root {
		--bg: #f9fafb;
		--card: #fff;
		--border: rgba(0, 0, 0, 0.1);
		--muted: rgba(0, 0, 0, 0.6);
		--ok: #0f766e;
		--bad: #b00020;
	}
	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}
	.container.fullscreen {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
	.loading-container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, #f8fafc 0%, #e0f2f1 100%);
	}
	.loader {
		display: flex;
		gap: 0.6rem;
		align-items: center;
		justify-content: center;
		margin-bottom: 0.75rem;
	}
	.dot {
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background: var(--ok);
		animation: bounce 0.9s infinite ease-in-out;
	}
	.dot:nth-child(2) {
		animation-delay: 0.15s;
	}
	.dot:nth-child(3) {
		animation-delay: 0.3s;
	}
	@keyframes bounce {
		0%,
		80%,
		100% {
			transform: translateY(0);
			opacity: 0.8;
		}
		40% {
			transform: translateY(-10px);
			opacity: 1;
		}
	}
	.load-text {
		color: var(--muted);
		font-weight: 500;
	}
	h1 {
		margin-bottom: 0.25rem;
	}
	.subtitle {
		color: var(--muted);
		margin-bottom: 1rem;
	}
	.status {
		margin: 0 0 0.75rem 0;
		font-weight: 600;
	}
	.status.ok {
		color: var(--ok);
	}
	.status.bad {
		color: var(--bad);
	}
	.question {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.card {
		background: var(--card);
		border: 1px solid var(--border);
		border-radius: 10px;
		padding: 1rem 1rem;
		margin-bottom: 1rem;
	}
	.actions {
		display: flex;
		gap: 0.5rem;
		margin: 0.5rem 0 1rem 0;
	}
	button {
		padding: 0.6rem 0.9rem;
		border: 1px solid transparent;
		border-radius: 8px;
		background: var(--ok);
		color: #fff;
		cursor: pointer;
		transition:
			background-color 120ms ease,
			box-shadow 120ms ease,
			opacity 120ms ease;
	}
	button:hover:not(:disabled) {
		filter: brightness(1.05);
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
	}
	button:focus-visible {
		outline: 3px solid rgba(15, 118, 110, 0.35);
		outline-offset: 2px;
	}
	button:disabled {
		opacity: 0.55;
		background: #f3f4f6;
		color: inherit;
		border: 1px solid var(--border);
		cursor: not-allowed;
	}
	.secondary {
		background: transparent;
		color: var(--muted);
		border: 1px solid var(--border);
	}
	.summary h2 {
		margin-bottom: 0.25rem;
	}
	.error {
		color: #b00020;
	}
</style>
