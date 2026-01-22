import { describe, it, expect } from 'vitest';
import { load } from './+page.server';
import { grade } from '$lib/server/quiz/data';

function makeUrl(topic: string, n: number) {
  return new URL(`http://localhost/${topic}?questionsNumber=${n}`);
}

describe('[topic]/+page.server load random questions', () => {
  it('jsMixed: random subsets grade correctly when selecting correctIndex', () => {
    const topic = 'jsMixed';
    const n = 10;

    for (let i = 0; i < 20; i++) {
      const { questions } = load({ params: { topic }, url: makeUrl(topic, n) });
      expect(questions.length).toBe(n);
      const selections = questions.map((q) => q.correctIndex);
      const result = grade(selections, questions);
      expect(result.total).toBe(n);
      expect(result.score).toBe(n);
      expect(result.correct.every((c) => c)).toBe(true);
    }
  });

  it('jsScope: random subsets grade correctly when selecting correctIndex', () => {
    const topic = 'jsScope';
    const n = 5;

    for (let i = 0; i < 20; i++) {
      const { questions } = load({ params: { topic }, url: makeUrl(topic, n) });
      expect(questions.length).toBe(n);
      const selections = questions.map((q) => q.correctIndex);
      const result = grade(selections, questions);
      expect(result.total).toBe(n);
      expect(result.score).toBe(n);
      expect(result.correct.every((c) => c)).toBe(true);
    }
  });
});
