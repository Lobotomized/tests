import type { QuestionFull } from '$lib/quiz/types';
import { textSources, videoSources } from '$lib/server/quiz/sources';



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

export default questions;