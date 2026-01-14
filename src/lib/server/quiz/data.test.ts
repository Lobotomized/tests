import { describe, it, expect } from 'vitest';
import { getQuestions, grade } from './data';

const topics = ['jsAsync', 'jsInheritance', 'jsThis', 'jsScope'] as const;

describe('grade()', () => {
	it('grades all topics with intentionally wrong selections and returns sources', () => {
		for (const topic of topics) {
			const questions = getQuestions(topic);
			const selections = questions.map((q) => (q.correctIndex + 1) % q.options.length);
			const result = grade(selections, topic);

			expect(result.total).toBe(questions.length);
			expect(result.score).toBe(0);
			expect(result.correct.length).toBe(questions.length);
			expect(result.correct.every((c) => c === false)).toBe(true);
			expect(Array.isArray(result.sources)).toBe(true);
			expect(result.sources.length > 0).toBe(true);

			const covered = new Set<number>();
			for (const src of result.sources) {
				expect(src.source).toBeTruthy();
				if ('url' in src.source) {
					expect(typeof src.source.url).toBe('string');
				} else {
					expect(typeof src.source.text).toBe('string');
				}
				for (const idx of src.indices) {
					expect(idx >= 0 && idx < questions.length).toBe(true);
					expect(selections[idx] !== questions[idx].correctIndex).toBe(true);
					covered.add(idx);
				}
			}
			expect(covered.size).toBe(questions.length);
		}
	});

	it('returns no sources when all selections are correct', () => {
		for (const topic of topics) {
			const questions = getQuestions(topic);
			const selections = questions.map((q) => q.correctIndex);
			const result = grade(selections, topic);
			expect(result.score).toBe(result.total);
			expect(result.sources.length).toBe(0);
			expect(result.correct.every((c) => c === true)).toBe(true);
		}
	});
});
