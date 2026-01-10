import type { QuestionFull } from '$lib/quiz/types';
import { textSources, videoSources } from '$lib/server/quiz/sources';

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
		prompt: 'What does the following code log?',
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
		correctIndex: 1,
		videoSource: videoSources.asyncVideo
	},
	{
		id: 2,
		prompt: 'What does the following code log?',
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
		correctIndex: 0,
		videoSource: videoSources.asyncVideo
	},

	{
		id: 3,
		prompt: 'What does the following code log?',
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
		correctIndex: 0,
		videoSource: videoSources.asyncVideo
	},
	{
		id: 4,
		prompt: 'What does the following code log?',
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
		correctIndex: 1,
		videoSource: videoSources.asyncVideo
	},
	{
		id: 5,
		prompt: 'What does the following code log?',
		topic: 'js',
		code: `new Promise((resolve,reject) =>{
  console.log('1')
  resolve()
}).then(() =>{
  console.log('2')
}).then(() =>{
  console.log('3')
})

async function t(){
  console.log(4)
  await console.log(5)
}
t().then(() => {
    console.log(6)
})

console.log(7)

queueMicrotask(() => {
  console.log(8)
})`,
		options: [
			'7, 1, 4, 8, 2, 5, 6, 3',
			'7, 1, 4, 5, 2, 8, 3, 6',
			'1, 4, 5, 7, 2, 3, 6, 8',
			'7, 1, 2, 3, 4, 5, 6, 8',
			'1, 4, 5, 7, 2, 8, 3, 6',
			'1, 2, 3, 4, 5, 6, 7, 8'
		],
		correctIndex: 4,
		videoSource: videoSources.promises
	},
	{
		id: 6,
		prompt: 'What does the following code log?',
		topic: 'js',
		code: `async function step1() {
  console.log('step 1');
  await step2();
  console.log('step 1 completed');
}

async function step2() {
  console.log('step 2');
}

console.log('start');
step1();
console.log('end');
`,
		options: [
			'start, end, step 1, step 2, step 1 completed',
			'start, end, step 1, step 1 completed, step 2',
			'start, step 1, step 2, end, step 1 completed',
			'start, step 1, step 2, end',
			'start, end, step 1, step 2',
			'start, end, step 1'
		],
		correctIndex: 2,
		textSource: textSources.asyncFunctionsExecution
	},
	{
		id: 7,
		prompt: 'What does the following code log and approximately how long it will take?',
		topic: 'js',
		code: `let newProm = () => {
return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve()
        },1000)
    }) 
}
const arr = [1,2,3,4,5]

async function processArrayA(array) {
  array.forEach(async (item) => {
    await newProm()
    console.log(item)
  });
  console.log('Done forEach');
}

processArrayA(arr);
`,
		options: [
			'It will log "Done forEach" and it will happen instantly',
			'It will log "Done forEach, 1, 2, 3, 4, 5" and it will take approximately 5 seconds',
			'It will log "Done forEach, 1, 2, 3, 4, 5" and it will take approximately 1 second',
			'It will log "1, 2, 3, 4, 5, Done forEach" and it will take approximately 5 seconds',
			'It will log "1, 2, 3, 4, 5, Done forEach" and it will take approximately 1 second',
			'It will log "1, 2, 3, 4, 5, Done forEach" and it will happen instantly'
		],
		correctIndex: 2,
		textSource: textSources.asyncFunctionsInForEach
	},
	{
		id: 8,
		prompt: 'What does the following code log?',
		topic: 'js',
		code: `new Promise((resolve, reject) =>{
    console.log(1)
    resolve(2)
}).then((res) => {
    console.log(res)
})

new Promise((resolve, reject) =>{
    console.log(3)
    resolve(4)
}).then((res) => {
    console.log(res)
})   

console.log(5)
`,
		options: [
			'5, 1, 3, 2, 4',
			'5, 1, 2, 3, 4',
			'1, 2, 3, 4, 5',
			'1, 3, 5, 2, 4',
			'5, 1, 2',
			'1, 2, 5'
		],
		correctIndex: 3,
		videoSource: videoSources.promises
	},
	{
		id: 9,
		prompt: 'What does the following code log and approximately how long it will take?',
		topic: 'js',
		code: `let newProm = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve()
        },1000)
    }) 
}
const arr = [1,2,3,4,5]

async function processArrayB(array) {
  for (const item of array) {
    await newProm();
    console.log('Processed:', item);
  }
  console.log('Done for-loop');
}

processArrayB(arr)
`,
		options: [
			'It will log "Done for-loop, Processed: 1, Processed: 2, Processed: 3, Processed: 4, Processed: 5" and it will take approximately 5 seconds',
			'It will log "Done for-loop, Processed: 1, Processed: 2, Processed: 3, Processed: 4, Processed: 5" and it will take approximately 1 second',
			'It will log "Processed: 1, Processed: 2, Processed: 3, Processed: 4, Processed: 5, Done for-loop" and it will take approximately 5 seconds',
			'It will log "Processed: 1, Processed: 2, Processed: 3, Processed: 4, Processed: 5, Done for-loop" and it will take approximately 1 second',
			'It will log "Done for-loop" and it will happen instantly',
			'It will log "Done for-loop" and it will take 5 seconds'
		],
		correctIndex: 2,
		textSource: textSources.asyncFunctionsInForEach
	},
		{
		id: 10,
		prompt: 'What does the following code log and approximately how long it will take?',
		topic: 'js',
		code: `console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);
setTimeout(() => console.log("Timeout 2"), 0);

Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() => console.log("Promise 2"));

console.log("End");
`,
		options: [
			'It will log "Start, End, Timeout 1, Timeout 2, Promise 1, Promise 2" and it will happen instantly',
			'It will log "Start, End, Timeout 1, Timeout 2, Promise 1, Promise 2" and it will take approximately 4 seconds',
			'It will log "Start, End, Promise 1, Promise 2, Timeout 1, Timeout 2" and it will happen instantly',
			'It will log "Start, Timeout 1, Timeout 2, Promise 1, Promise 2, End" and it will happen instantly',
			'It will log "Start, End, Promise 1, Promise 2, Timeout 1, Timeout 2" and it will take approximately 4 seconds'
		],
		correctIndex: 2,
		videoSource: videoSources.asyncVideo
	}
];

export default questions;
