import type { QuestionFull } from '$lib/quiz/types';
import { textSources, videoSources } from '$lib/server/quiz/sources';
import { text } from 'stream/consumers';

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
		sources: [videoSources.asyncVideo]
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
		sources: [videoSources.asyncVideo]
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
		sources: [videoSources.asyncVideo]
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
		sources: [videoSources.asyncVideo]
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
		sources: [videoSources.promises]
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
		sources: [textSources.asyncFunctionsExecution]
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
		sources: [textSources.asyncFunctionsInForEach]
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
		sources: [videoSources.promises]
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
		sources: [textSources.asyncFunctionsInForEach]
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
		sources: [videoSources.asyncVideo]
	},
{
		id: 11,
		prompt: 'What does the following code log?',
		topic: 'js',
		code: `function timeout(log,ms,success){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(!success){
        reject(log)
      }
      resolve(log);
    }, ms)
  })
}

Promise.allSettled([
  timeout("1",100,false),
  timeout("2",10, false),
  timeout("3",1, false)
]).then((resp) =>{ 
  console.log("Success ", resp)
}).catch((err) => {
  console.log("Error ", err)
})`,
		options: [
			'Success [ { status: "rejected", reason: "1" }, { status: "rejected", reason: "2" }, { status: "rejected", reason: "3" } ]',
			'Error 3',
			'Success [ { status: "fulfilled", value: "1" }, { status: "fulfilled", value: "2" }, { status: "fulfilled", value: "3" } ]',
			'Success [ { status: "fulfilled", value: "3" }, { status: "fulfilled", value: "2" }, { status: "fulfilled", value: "1" } ]',
			'Error [ { status: "rejected", reason: "1" }, { status: "rejected", reason: "2" }, { status: "rejected", reason: "3" } ]',
			'Success []'
		],
		correctIndex: 0,
		sources: [videoSources.promiseMethods]
	},

	{
		id: 12,
		prompt: 'What does the following code log?',
		topic: 'js',
		code: `function timeout(log,ms,success){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(!success){
        reject(log)
      }
      resolve(log);
    }, ms)
  })
}

Promise.all([
  timeout("1",100,false),
  timeout("2",10, true),
  timeout("3",1, true)
]).then((resp) =>{ 
  console.log("Success ", resp)
}).catch((err) => {
  console.log("Error ", err)
})`,
		options: [	
			'Success ["2","3"]',
			'Error "1"',
			'Success ["1","2","3"]',
			'Error "2"',
			'Success ["3","2","1"]',
			'Error "3"'
		],
		correctIndex: 1,
		sources: [videoSources.promiseMethods]
	},
	{
		id: 13,
		prompt: 'What does the following code log?',
		topic: 'js',
		code: `function timeout(log,ms,success){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(!success){
        reject(log)
      }
      resolve(log);
    }, ms)
  })
}

Promise.any([
  timeout("1",100,false),
  timeout("2",10, true),
  timeout("3",1, true)
]).then((resp) =>{ 
  console.log("Success ", resp)
}).catch((err) => {
  console.log("Error ", err)
})`,
		options: [
			'Success ["3","2","1"]',
			'Success "2"',
			'Success "1"',
			'Error ["1","2","3"]',
			'Error "3"',
			'Success "3"'
		],
		correctIndex: 5,
		sources: [videoSources.promiseMethods]
	},

	{
		id: 14,
		prompt: 'What does the following code log?',
		topic: 'js',
		code: `function timeout(log,ms,success){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(!success){
        reject(log)
      }
      resolve(log);
    }, ms)
  })
}

Promise.race([
  timeout("1",100,false),
  timeout("2",10, true),
  timeout("3",1, false)
]).then((resp) =>{ 
  console.log("Success ", resp)
}).catch((err) => {
  console.log("Error ", err)
})`,
		options: [
			'Success "3"',
			'Error "3"',
			'Success "2"',
			'Error "2"',
			'Success "1"',
			'Error "1"'
		],
		correctIndex: 1,
		sources: [videoSources.promiseMethods]
	},


	{
		id: 15,
		prompt: 'What is the difference between Promise.race, Promise.all and Promise.any?',
		topic: 'js',
		code: ``,
		options: [
			'Promise.race resolves when the first promise settles (fulfills or rejects), Promise.all resolves when all promises fulfill (or rejects on the first reject), Promise.any resolves when the first promise fulfills (or rejects if all reject)',
			'Promise.race resolves when all promises settle but only returns the first settled promise, Promise.all resolves when all promises fullfill, Promise.any resolves when all promise fulfill or reject',
			'Promise.race resolves when the first promise rejects, Promise.all resolves when any promise fulfills, Promise.any resolves when all promises reject',
			'Promise.race, Promise.all and Promise.any all behave the same way just have slightly different syntax',
			'Promise.race rejects when the first promise fulfills, Promise.all rejects when any promise rejects, Promise.any rejects when the first promise settles',
			'Promise.race fulfills when all promises reject, Promise.all fulfills when any promise rejects, Promise.any fulfills when the first promise rejects'
		],
		correctIndex: 0,
		sources: [videoSources.promiseMethods]
	},
	{
		id: 16,
		prompt: 'What is Promise.allSettled and how does it behave?',
		topic: 'js',
		code: ``,
		options: [
			'Promise.allSettled waits for all promises to settle (fulfill or reject) and rejects returning an array of objects with status and value/reason for each promise',
			'Promise.allSettled rejects when any promise rejects and returns only the rejection reason',
			'Promise.allSettled is the same as Promise.all but with a slightly different syntax',
			'Promise.allSettled waits for all promises to settle (fulfill or reject) and resolves returning an array of objects with status and value/reason for each promise',
			'Promise.allSettled only works with promises that resolve successfully and ignores rejections',
			'Promise.allSettled returns a single promise that resolves to the first settled value'
		],
		correctIndex: 3,
		sources: [videoSources.promiseMethods]
	},


	{
		id: 17,
		prompt: 'What is the difference between Promise.any and Promise.race?',
		topic: 'js',
		code: ``,
		options: [
			'Promise.any resolves when the first promise fulfills (or rejects only if all reject), while Promise.race resolves or rejects as soon as the first promise settles (fulfills or rejects)',
			'Promise.any and Promise.race behave exactly the same way with slightly different syntax',
			'Promise.any rejects when the first promise rejects, while Promise.race fulfills when the first promise fulfills',
			'Promise.any waits for all promises to settle and only then resolves with the first one, while Promise.race returns the first fulfilled promise',
			'Promise.any only works with promises that fulfill, while Promise.race only works with promises that reject',
			'Promise.any returns an array of all fulfilled promises, while Promise.race returns the first settled promise'
		],
		correctIndex: 0,
		sources: [videoSources.promiseMethods]
	},

	{
		id: 18,
		prompt: 'Which statement is wrong?',
		topic: 'js',
		code: ``,
		options: [
			'The call stack is processing everything last in, first out.',
			'The macrotask queue has prioritization over the microtask queue and it will be processed before the microtask queue.',
			'The macro and micro queues are processed first in, first out.',
			'Callback functions are functions passed as arguments that are executed at a later time.',
			'async functions in javascript are a syntactic sugar on top of promises.'
		],
		correctIndex: 1,
		sources: [videoSources.eventLoop]
	},

	{
		id: 19,
		prompt: 'What does the following code log?',
		topic: 'js',
		code: `queueMicrotask(() => {
  console.log(1)
})
process.nextTick(() =>{
  console.log(2)
})`,
		options: [
			'1, 2',
			'2, 1',
			'1',
			'2',
			'Nothing',
			'Error'
		],
		correctIndex: 1,
		sources: [textSources.nextTickAndSetImmediate]
	},
	{
		id: 20,
		prompt: 'What does the following code log?',
		topic: 'js',
		code: `queueMicrotask(() => {
  console.log(1)
})
setImmediate(() =>{
  console.log(2)
})`,
		options: [
			'1, 2',
			'2, 1',
			'1',
			'2',
			'Nothing',
			'Error'
		],
		correctIndex: 0,
		sources: [textSources.nextTickAndSetImmediate]
	}
	
];

export default questions;
