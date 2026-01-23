import type { QuestionFull } from '$lib/quiz/types';
import { textSources } from '$lib/server/quiz/sources';
import { test, expect } from '@playwright/test';

const questions: QuestionFull[] = [

    {
        id: 1,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `console.log(5 == "5")`,
        correctIndex: 0,
        sources: [textSources.doubleEquals],
        options: [
            'Logs true',
            'Logs false',
            'Logs undefined',
            'Throws an error'
        ],
    },
    {
        id: 2,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `console.log("more" + {a:5} == "more" + {a:25})`,
        correctIndex: 0,
        sources: [textSources.stringCastings],
        options: [
            'Logs true',
            'Logs false',
            'Logs undefined',
            'Throws an error'
        ],
    },

    {
        id: 3,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `console.log(false == !"5")`,
        correctIndex: 0,
        sources: [textSources.truthyFalseyValues],
        options: [
            'Logs true',
            'Logs false',
            'Logs undefined',
            'Throws an error'
        ],
    },
    {
        id: 4,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `console.log([] == ![])`,
        correctIndex: 0,
        sources: [textSources.emptyArrayExamples,textSources.truthyFalseyValues, textSources.stringCastings, textSources.operatorPrecedense ],
        options: [
            'Logs true',
            'Logs false',
            'Logs undefined',
            'Throws an error'
        ],
    },

    {
        id: 5,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `console.log(0 ?? (5 && 1))`,
        correctIndex: 0,
        sources: [textSources.logicalOperators],
        options: [
            'Logs 0',
            'Logs 1',
            'Logs 5',
            'Logs undefined'
        ],
    },

    {
        id: 6,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `console.log(0 || "" || 2)`,
        correctIndex: 2,
        sources: [textSources.detailedOrOperator, textSources.truthyFalseyValues],
        options: [
            'Logs 0',
            'Logs ""',
            'Logs 2',
            'Logs undefined'
        ],
    },
    {
        id: 7,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `console.log('a' - 'a')`,
        correctIndex: 1,
        sources: [textSources.NotANumber],
        options: [
            'Logs 0',
            'Logs NaN',
            'Logs ""',
            'Logs aa',
            'Throws an error'
        ],
    },
    {
        id: 8,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `console.log(5/0)`,
        correctIndex: 3,
        sources: [textSources.Infinity],
        options: [
            'Logs 0',
            'Logs NaN',
            'Logs ""',
            'Logs Infinity',
            'Throws an error'
        ],
    },

    {
        id: 9,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `console.log(0/0)`,
        correctIndex: 1,
        sources: [textSources.NotANumber],
        options: [
            'Logs 0',
            'Logs NaN',
            'Logs ""',
            'Logs Infinity',
            'Throws an error'
        ],
    },
    {
        id: 10,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `console.log(-1/0)`,
        correctIndex: 3,
        sources: [textSources.Infinity],
        options: [
            'Logs 0',
            'Logs NaN',
            'Logs ""',
            'Logs -Infinity',
            'Throws an error'
        ],
    },
    {
        id: 11,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `console.log(false/0)`,
        correctIndex: 1,
        sources: [textSources.truthyFalseyValues,textSources.NotANumber, textSources.Infinity],
        options: [
            'Logs 0',
            'Logs NaN',
            'Logs ""',
            'Logs Infinity',
            'Throws an error'
        ],
    },
    {
        id: 12,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `console.log(true/0)`,
        correctIndex: 3,
        sources: [textSources.truthyFalseyValues,textSources.NotANumber, textSources.Infinity],
        options: [
            'Logs 0',
            'Logs NaN',
            'Logs ""',
            'Logs Infinity',
            'Throws an error'
        ],
    },
    {
        id: 13,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `console.log ("" && 0 && 2)`,
        correctIndex: 0,
        sources: [textSources.detailedAndOperator],
        options: [
            'Logs ""',
            'Logs 0',
            'Logs 2',
            'Logs undefined',
            'Throws an error'
        ],
    },
    {
        id: 14,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `console.log(NaN ?? 5)`,
        correctIndex: 0,
        sources: [textSources.logicalOperators],
        options: [
            'Logs NaN',
            'Logs 5',
            'Logs ""',
            'Logs Infinity',
            'Throws an error'
        ],
    },

    {
        id: 15,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `console.log("a" -"a" + "ba")`,
        correctIndex: 3,
        sources: [textSources.operatorPrecedense, textSources.NotANumber],
        options: [
            'Logs 0',
            'Logs NaN',
            'Logs "aaba"',
            'Logs NaNba',
            'Throws an error'
        ],
    },
    {
        id: 16,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `console.log([]+"ba"+[] == "ba")`,
        correctIndex: 0,
        sources: [textSources.stringCastings],
        options: [
            'Logs true',
            'Logs false',
            'Logs ""',
            'Logs Infinity',
            'Throws an error'
        ],
    },
    {
        id: 17,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `console.log([]+"ba"+[] === "ba")`,
        correctIndex: 0,
        sources: [textSources.stringCastings],
        options: [
            'Logs true',
            'Logs false',
            'Logs ""',
            'Logs Infinity',
            'Throws an error'
        ],
    },

    {
        id: 18,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `console.log([] == 0)`,
        correctIndex: 0,
        sources: [textSources.doubleEquals],
        options: [
            'Logs true',
            'Logs false',
            'Logs ""',
            'Logs Infinity',
            'Throws an error'
        ],
    },
    {
        id: 19,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `console.log(0 && "" && 2)`,
        correctIndex: 1,
        sources: [textSources.detailedAndOperator],
        options: [
            'Logs ""',
            'Logs 0',
            'Logs 2',
            'Logs undefined',
            'Throws an error'
        ],
    },
    {
        id: 20,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `console.log([] == 1)`,
        correctIndex: 1,
        sources: [textSources.doubleEquals],
        options: [
            'Logs true',
            'Logs false',
            'Logs ""',
            'Logs Infinity',
            'Throws an error'
        ],
    },
];

test.describe('Frontend code matches question list correctIndex', () => {
  test('correct answer matches correctIndex for each question', async ({ page }) => {
    await page.goto('/jsExpressions?questionsNumber=20');

    for (;;) {
      const codeText = (await page.locator('pre code').textContent())?.trim() || '';
      const question = questions.find((q) => (q.code || '').trim() === codeText);
      expect(question).toBeTruthy();
      const options = page.locator('ol.options label.option input.option-input');
      await options.nth(question!.correctIndex).check();
      const nextBtn = page.getByRole('button', { name: 'Next' });
      if (await nextBtn.isVisible()) { await nextBtn.click(); continue; }
      const summaryBtn = page.getByRole('button', { name: 'Summary' });
      if (await summaryBtn.isVisible()) { await summaryBtn.click(); break; }
      break;
    }

    const submitBtn = page.getByRole('button', { name: 'Submit Quiz' });
    await expect(submitBtn).toBeEnabled();
    await submitBtn.click();

    const backBtn = page.getByRole('button', { name: 'Go back to check your mistakes' });
    await expect(backBtn).toBeVisible();
    await backBtn.click();

    for (;;) {
      const statusText = await page.locator('p.status').textContent();
      expect(statusText).toContain('Correct');
      const nextBtn = page.getByRole('button', { name: 'Next' });
      if (await nextBtn.isVisible()) { await nextBtn.click(); continue; }
      const summaryBtn = page.getByRole('button', { name: 'Summary' });
      if (await summaryBtn.isVisible()) { break; }
      break;
    }
  });
});

test.describe('Grading UI', () => {
  test('incorrect selections are never shown as correct', async ({ page }) => {
    await page.goto('/jsMixed?questionsNumber=5');

    for (;;) {
      const options = page.locator('ol.options label.option input.option-input');
      await expect(options.first()).toBeVisible();
      const choice = options.nth(1);
      await choice.check();

      const nextBtn = page.getByRole('button', { name: 'Next' });
      if (await nextBtn.isVisible()) {
        await nextBtn.click();
        continue;
      }

      const summaryBtn = page.getByRole('button', { name: 'Summary' });
      if (await summaryBtn.isVisible()) {
        await summaryBtn.click();
        break;
      }

      break;
    }

    const submitBtn = page.getByRole('button', { name: 'Submit Quiz' });
    await expect(submitBtn).toBeEnabled();
    await submitBtn.click();

    const backBtn = page.getByRole('button', { name: 'Go back to check your mistakes' });
    await expect(backBtn).toBeVisible();
    await backBtn.click();

    for (;;) {
      await expect(page.locator('p.status')).toBeVisible();
      const correctOpts = page.locator('label.option.correctOpt');
      await expect(correctOpts).toHaveCount(1);

      const wrongButCorrect = page.locator('label.option.wrongSelected.correctOpt');
      await expect(wrongButCorrect).toHaveCount(0);

      const nextBtn = page.getByRole('button', { name: 'Next' });
      if (await nextBtn.isVisible()) {
        await nextBtn.click();
        continue;
      }

      const summaryBtn = page.getByRole('button', { name: 'Summary' });
      if (await summaryBtn.isVisible()) {
        break;
      }

      break;
    }
  });
});
