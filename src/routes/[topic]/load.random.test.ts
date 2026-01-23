import { describe, it, expect } from 'vitest';
import { load } from './+page.server';
import { grade } from '$lib/server/quiz/data';
import type { QuestionFull } from '$lib/quiz/types';

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

  it('grade: manually generated questions have correct correctIndex', () => {
    const n = 10;
    const questions:QuestionFull[] = Array.from({ length: n }, (_, i) => ({
      id: i,
      prompt: "hi",
      sources:[],
      topic: "test",
      options: [`a${i}`, `b${i}`, `c${i}`, `d${i}`],
      correctIndex: Math.floor(Math.random() * 4),
    }));

    const selections = questions.map((q) => q.correctIndex);
    const result = grade(selections, questions);
   
    expect(result.total).toBe(n);
    expect(result.score).toBe(n);
    expect(result.correct.every((c) => c)).toBe(true);
  });

  it('grade: shuffled questions with id-based selections evaluate correctly', () => {
    const n = 12;
    const original:QuestionFull[] = Array.from({ length: n }, (_, i) => ({
      id: i,
      prompt: `q${i}`,
      sources:[],
      topic: "mix",
      options: [`a${i}`, `b${i}`, `c${i}`, `d${i}`],
      correctIndex: Math.floor(Math.random() * 4),
    }));
    const byId = new Map<number, number>(original.map(q => [q.id, q.correctIndex]));
    const shuffled = [...original].sort(() => Math.random() - 0.5);
    const selections = shuffled.map(q => byId.get(q.id)!);
    const result = grade(selections, shuffled);
    expect(result.total).toBe(n);
    expect(result.score).toBe(n);
    expect(result.correct.every(Boolean)).toBe(true);
    expect(result.correctIndices).toEqual(shuffled.map(q => q.correctIndex));
  });


  it('jsExpressions: specific question always has correctIndex 1', () => {
    const topic = 'jsExpressions';
    const n = 50;

    for (let i = 0; i < 100; i++) {
      const { questions } = load({ params: { topic }, url: makeUrl(topic, n) });
      const found = questions.find(q => q?.code?.includes('0 && "" && 2'));
      if (found) {
        expect(found.correctIndex).toBe(1);
      }
    }
  });
});
