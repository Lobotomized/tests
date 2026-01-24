import type { QuestionFull } from '$lib/quiz/types';
import jsAsync from './jsAsync.ts';
import jsInheritance from './jsInheritance.ts';
import jsScope from './jsScope.ts';
import jsThis from './jsThis.ts';
import jsExpressions from './jsExpressions.ts';
import type { TextSource, VideoSource } from './sources.ts';
import react from './react.ts';

const questionsObject: { [key: string]: QuestionFull[] } = {
	jsAsync: jsAsync,
	jsInheritance: jsInheritance,
	jsThis: jsThis,
	jsScope: jsScope,
	jsExpressions: jsExpressions,
	react: react,
};

export function getQuestions(topic: string) {
	return questionsObject[topic];
}

export function getMixedJsQuestionsQuick(){
	return getMixedJsQuestions(1);
}
export function getMixedJsQuestionsMid(){
	return getMixedJsQuestions(2);
}

export function getMixedJsQuestionsFull(){
	return getMixedJsQuestions(5);
}

export function getMixedJsQuestions(questionsPerCategory:number) {
	const getRandom = (arr: QuestionFull[], n: number) => {
		const shuffled = [...arr].sort(() => 0.5 - Math.random());
		return shuffled.slice(0, n);
	};

	const perCategory = questionsPerCategory;
	const selected = [
		...getRandom(jsAsync, perCategory),
		...getRandom(jsInheritance, perCategory),
		...getRandom(jsScope, perCategory),
		...getRandom(jsThis, perCategory),
		...getRandom(jsExpressions, perCategory),
		...getRandom(react, perCategory),
	];

	return selected.sort(() => 0.5 - Math.random());
}

export function grade(selections: number[], topic: string | QuestionFull[]) {
	const questions = Array.isArray(topic) ? topic : questionsObject[topic];
	const correct = questions.map((q, i) => selections[i] === q.correctIndex);
	const score = correct.filter(Boolean).length;
	const correctIndices = questions.map((q) => q.correctIndex);
	const incorrectSources = (() => {
		const sourceMap = new Map<string, { source: VideoSource | TextSource; indices: number[] }>();
		questions.forEach((q, i) => {
			q.sources.forEach((src) => {
				const key = "url" in src ? src.url : src.text;
				if (!sourceMap.has(key)) {
					sourceMap.set(key, { source: src, indices: [] });
				}
				if (selections[i] !== q.correctIndex) {
					sourceMap.get(key)!.indices.push(i);
				}
			});
		});
		return Array.from(sourceMap.values()).filter((entry) => entry.indices.length > 0);
	})();
	return { score, total: questions.length, correct, correctIndices, sources: incorrectSources };
}
