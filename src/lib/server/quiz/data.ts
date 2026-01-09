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
	return { score, total: questions.length, correct, correctIndices };
}
