import type { QuestionFull } from '$lib/quiz/types';
import jsAsync from './jsAsync.ts';

const questionsObject: { [key: string]: QuestionFull[] } = {
	jsAsync: jsAsync
};

export function getQuestions(topic: string) {
	return questionsObject[topic];
}

export function grade(selections: number[], topic: string) {
	const questions = questionsObject[topic];
	const correct = questions.map((q, i) => selections[i] === q.correctIndex);
	const score = correct.filter(Boolean).length;
	const correctIndices = questions.map((q) => q.correctIndex);
	const seenSources = new Set<string>();
	const incorrectSources = questions
		.map((q, i) => (correct[i] ? null : q.videoSource || q.textSource))
		.filter((src): src is string => src !== null)
		.filter((src) => {
			if (seenSources.has(src)) return false;
			seenSources.add(src);
			return true;
		});

	return { score, total: questions.length, correct, correctIndices, sources: incorrectSources };
}
