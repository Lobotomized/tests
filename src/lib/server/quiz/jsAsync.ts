import type { QuestionFull } from '$lib/quiz/types';

//QUESTION

// console.log('Start');

// setTimeout(() => console.log('Timeout 1'), 0);
// Promise.resolve().then(() => console.log('Promise 1'));

// setTimeout(() => {
//   console.log('Timeout 2');
//   Promise.resolve().then(() => console.log('Promise 2'));
// }, 0);

// Promise.resolve().then(() => console.log('Promise 3'));
// console.log('End');

//QUESTION

// console.log("Start");

// setTimeout(() => console.log("Timeout 1"), 0);
// setTimeout(() => console.log("Timeout 2"), 0);

// Promise.resolve().then(() => console.log("Promise 1"));
// Promise.resolve().then(() => console.log("Promise 2"));

// console.log("End");

const questions: QuestionFull[] = [
	{
		id: 1,
		prompt: 'What does the following code log and why?',
		topic: 'js',
		code: `console.log('Loop start');

for (let i = 0; i < 2; i++) {
  Promise.resolve().then(() => console.log(\`Promise \${i}\`));
  setTimeout(() => console.log(\`Timeout \${i}\`), 0);
}

console.log('Loop end');`,
		options: [
			'Loop start, Loop end, Promise 0, Timeout 0, Promise 1, Timeout 1',
			'Loop start, Loop end, Promise 0, Promise 1, Timeout 0, Timeout 1',
			'Loop start, Promise 0, Timeout 0, Promise 1, Timeout 1, Loop end',
			'Loop start, Promise 0, Promise 1, Loop end, Timeout 0, Timeout 1',
			'Loop start, Timeout 0, Timeout 1, Loop end, Promise 0, Promise 1',
			'Loop start, Loop end, Timeout 0, Timeout 1, Promise 0, Promise 1'
		],
		correctIndex: 1
	},
	{
		id: 2,
		prompt: 'What does the following code log and why?',
		topic: 'js',
		code: `console.log('Start');

Promise.resolve()
  .then(() => {
    console.log('Promise 1');
    setTimeout(() => console.log('Timeout in Promise'), 0);
  })
  .then(() => {
    console.log('Promise 2');
  });

setTimeout(() => {
  console.log('Regular Timeout');
  Promise.resolve().then(() => console.log('Promise in Timeout'));
}, 0);

console.log('End');`,
		options: [
			'Start, End, Promise 1, Promise 2, Regular Timeout,  Promise in Timeout, Timeout in Promise',
			'Start, End, Promise 1, Regular Timeout, Promise 2, Timeout in Promise, Promise in Timeout',
			'Start, End, Regular Timeout, Promise 1, Promise 2, Timeout in Promise, Promise in Timeout',
			'Start, Promise 1, End, Promise 2, Regular Timeout, Timeout in Promise, Promise in Timeout',
			'Start, End, Promise 1, Promise 2, Promise in Timeout, Regular Timeout, Timeout in Promise',
			'Start, End, Regular Timeout, Promise in Timeout, Promise 1, Promise 2, Timeout in Promise'
		],
		correctIndex: 0
	},

	{
		id: 3,
		prompt: 'What does the following code log and why?',
		topic: 'js',
		code: `console.log('Start');
setTimeout(() => console.log('Timeout 1'), 0);
Promise.resolve().then(() => console.log('Promise 1'));

setTimeout(() => {
console.log('Timeout 2');
Promise.resolve().then(() => console.log('Promise 2'));
}, 0);

Promise.resolve().then(() => console.log('Promise 3'));
console.log('End');`,
		options: [
			'Start, End, Promise 1, Promise 3, Timeout 1, Timeout 2, Promise 2',
			'Start, End, Promise 1, Timeout 1, Promise 3, Timeout 2, Promise 2',
			'Start, End, Timeout 1, Promise 1, Timeout 2, Promise 2, Promise 3',
			'Start, Promise 1, End, Promise 3, Timeout 1, Timeout 2, Promise 2',
			'Start, End, Timeout 1, Timeout 2, Promise 1, Promise 2, Promise 3',
			'Start, End, Promise 1, Promise 3, Timeout 2, Timeout 1, Promise 2'
		],
		correctIndex: 0
	},
	{
		id: 4,
		prompt: 'What does the following code log and why?',
		topic: 'js',
		code: `console.log("Start");
setTimeout(() => console.log("Timeout 1"), 0);
setTimeout(() => console.log("Timeout 2"), 0);
Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() => console.log("Promise 2"));
console.log("End");`,
		options: [
			'Start, End, Timeout 1, Timeout 2, Promise 1, Promise 2',
			'Start, End, Promise 1, Promise 2, Timeout 1, Timeout 2',
			'Start, Promise 1, Promise 2, End, Timeout 1, Timeout 2',
			'Start, End, Promise 1, Timeout 1, Promise 2, Timeout 2',
			'Start, End, Timeout 1, Promise 1, Timeout 2, Promise 2',
			'Start, Promise 1, End, Promise 2, Timeout 1, Timeout 2'
		],
		correctIndex: 1
	}
];

export default questions;
