import type { QuestionFull } from '$lib/quiz/types';
import jsAsync from './jsAsync.ts';
import jsInheritance from './jsInheritance.ts';
import jsScope from './jsScope.ts';
import jsThis from './jsThis.ts';
import type { TextSource, VideoSource } from './sources.ts';

const questionsObject: { [key: string]: QuestionFull[] } = {
	jsAsync: jsAsync,
	jsInheritance: jsInheritance,
	jsThis: jsThis,
	jsScope: jsScope,
};

export function getQuestions(topic: string) {
	return questionsObject[topic];
}

export function grade(selections: number[], topic: string) {
	const questions = questionsObject[topic];
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
				if(selections[i] !== q.correctIndex){
					sourceMap.get(key)!.indices.push(i);
				}
			});
			// if (correct[i]) return;
			// const src = q.videoSource || q.textSource;
			// if (!src) return;
			// const key = "url" in src ? src.url : src.text;
			// if (!sourceMap.has(key)) {
			// 	sourceMap.set(key, { source: src, indices: [] });
			// }
			// sourceMap.get(key)!.indices.push(i);
		});
		return Array.from(sourceMap.values());
	})();
	console.log(incorrectSources)
	return { score, total: questions.length, correct, correctIndices, sources: incorrectSources };
}
