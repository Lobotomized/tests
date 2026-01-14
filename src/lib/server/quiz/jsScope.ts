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
		code: `{
    let k = 5;
    var w = 20;
}

console.log(w, k)`,
		options: [
			'20 5',
			'20 undefined',
			'undefined 5',
			'ReferenceError',
			'undefined undefined'
		],
		correctIndex: 3,
		sources: [textSources.scope]
	},

	{
		id: 2,
		prompt: 'What does the following code log?',
		topic: 'js',
		code: `function test(){
    var k = 5;

    function b(){
        var k = 20;
    }
    console.log(k);
}
test();`,
		options: [
			'5',
			'20',
			'undefined',
			'ReferenceError'
		],
		correctIndex: 0,
		sources: [textSources.scope]
	},

    
	{
		id: 3,
		prompt: 'What does the following code log?',
		topic: 'js',
		code: `var z = 100;
function first() {
    console.log(z);
}
function second() {
    var z = 200;
    first();
}
second();`,
		options: [
			'100',
			'200',
			'undefined',
			'ReferenceError'
		],
		correctIndex: 0,
		sources: [textSources.scope]
	},

    
{
		id: 4,
		prompt: 'What does the following code log?',
		topic: 'js',
		code: `function mystery() {
    if (true) {
        var x = 10;
        let y = 20;
    }
    console.log(x);
    console.log(y);
}
mystery();`,
		options: [
			'10 20',
			'10 undefined',
			'undefined 20',
			'ReferenceError',
            '"10" ReferenceError'
		],
		correctIndex: 3,
		sources: [textSources.scope]
	},
{
	id: 5,
	prompt: 'What does the following code log?',
	topic: 'js',
	code: `var name = "global";
function outer() {
    console.log(name);
    function inner() {
        var name = "inner";
        console.log(name);
    }
    inner();
}
outer();`,
	options: [
		'global inner',
		'global global',
		'inner inner',
		'inner global',
		'undefined undefined'
	],
	correctIndex: 0,
	sources: [textSources.scope]
},

{
	id: 6,
	prompt: 'What does the following code log?',
	topic: 'js',
	code: `{
    function test(){
        console.log('hi')
    }

    test();
}
test();`,
	options: [
		'"hi"',
		'"hi" "hi"',
		'ReferenceError',
        '"hi" ReferenceError',
		'undefined'
	],
	correctIndex: 1,
	sources: [textSources.scope]
},
{
	id: 7,
	prompt: 'What does the following code log?',
	topic: 'js',
	code: `'use strict'

{
    function test(){
        console.log('hi')
    }

    test();
}
console.log(test)

test();`,
	options: [
		'"hi" function test(){ console.log(\'hi\') } "hi"',
		'"hi" undefined ReferenceError',
		'"hi" ReferenceError',
		'ReferenceError',
		'undefined'
	],
	correctIndex: 2,
	sources: [textSources.scope]
},

{
	id: 8,
	prompt: 'What does the following code log?',
	topic: 'js',
	code: `var k = 5;

function test(){
  console.log(k);
  var k = 20;
}

test();`,
	options: [
		'5',
		'20',
		'undefined',
		'ReferenceError'
	],
	correctIndex: 2,
	sources: [textSources.jsHoisting]
},

{
	id: 9,
	prompt: 'What does the following code log?',
	topic: 'js',
	code: `let k = 5;

function test() {
  console.log(k);
  let k = 20;
}

test();`,
	options: [
		'5',
		'20',
		'undefined',
		'ReferenceError'
	],
	correctIndex: 3,
	sources: [textSources.jsHoisting]
},

{
	id: 10,
	prompt: 'What does the following code log?',
	topic: 'js',
	code: `console.log(foo());
console.log(bar());
var foo = function() { return 1; }
function bar() { return 2; }`,
	options: [
		'1 2',
		'undefined 2',
		'1 undefined',
		'TypeError',
		'undefined undefined'
	],
	correctIndex: 2,
	sources: [textSources.jsHoisting]
},

{
	id: 11,
	prompt: 'What does the following code log?',
	topic: 'js',
	code: `let a = 1;
{
    console.log(a);
    let a = 2;
    {
        console.log(a);
        let a = 3;
    }
    console.log(a);
}
console.log(a);`,
	options: [
		'1 2 2 1',
		'1 2 3 1',
		'ReferenceError',
		'undefined 2 2 1'
	],
	correctIndex: 2,
	sources: [textSources.scope]
},

{
	id: 12,
	prompt: 'What does the following code log?',
	topic: 'js',
	code: `function createCounter() {
  let count = [0];

  return function() {
    count[0]++;
    return function() {
      count[0]++;
      return function() {
        count[0]++;
        return count;
      };
    };
  };
}

const counter = createCounter();
const inner1 = counter();
const inner2 = inner1();
const result = inner2();
inner1()
console.log(result);`,
	options: [
		'[3]',
		'[4]',
		'[5]',
		'[6]'
	],
	correctIndex:1,
	sources: [textSources.closures, videoSources.closures]
},
{
	id: 13,
	prompt: 'What does the following code log?',
	topic: 'js',
	code: `function createMultipliers() {
  const multipliers = [];
  
  for (var i = 0; i < 3; i++) {
    multipliers.push(function(x) {
      return function() {
        return x * i;
      };
    }(i));
  }
  
  for (let j = 0; j < 3; j++) {
    multipliers.push(function() {
      return j * j;
    });
  }
  
  return multipliers;
}

const funcs = createMultipliers();
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
console.log(funcs[3]());
console.log(funcs[4]());
console.log(funcs[5]());`,
	options: [
		'0 1 2 0 1 4',
		'0 0 0 0 1 4',
		'3 3 3 0 1 4',
		'0 1 2 0 1 2',
		'3 3 3 0 1 2',
        '0 3 6 0 1 4'
	],
	correctIndex: 5,
	sources: [textSources.closures, textSources.scope]
},

{
	id: 14,
	prompt: 'What does the following code log?',
	topic: 'js',
	code: `function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter1());`,
	options: [
		'1 2 1 3',
		'1 2 3 4',
		'1 1 1 1',
		'1 2 1 2',
		'undefined undefined undefined undefined'
	],
	correctIndex: 0,
	sources: [textSources.closures, videoSources.closures]
},

{
	id: 15,
	prompt: 'What does the following code log?',
	topic: 'js',
	code: `function createCreateCounter(){
  let count = 0;
  return function createCounter() {
    return function() {
      
      return ++count;
    };
  }
}

const createCounter = createCreateCounter();

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter1());`,
	options: [
		'1 2 1 3',
		'1 2 3 4',
		'1 1 1 1',
		'1 2 1 2',
		'undefined undefined undefined undefined'
	],
	correctIndex: 1,
	sources: [textSources.closures, videoSources.closures]
},
{
	id: 16,
	prompt: 'What does the following code log?',
	topic: 'js',
	code: `function outer() {
  const arr = [];
  
  for (var i = 0; i < 3; i++) {
    arr.push(() => i);
  }
  
  return arr;
}

const result = outer().map(fn => fn());
console.log(result);`,
	options: [
		'[0, 1, 2]',
		'[1,2,3]',
		'[undefined, undefined, undefined]',
		'ReferenceError',
        '[2,2,2]',
        '[3,3,3]',
	],
	correctIndex: 5,
	sources: [textSources.closures, videoSources.closures]
},
{
	id: 17,
	prompt: 'What does the following code log?',
	topic: 'js',
	code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  },0)
}`,
	options: [
		'0 1 2',
		'1 2 3',
		'3 3 3',
		'undefined undefined undefined',
		'2 2 2'
	],
	correctIndex: 2,
	sources: [textSources.closures, textSources.scope]
},


{
	id: 18,
	prompt: 'What does the following code log?',
	topic: 'js',
	code: `function makeClosures() {
  const fns = [];
  
  for (let i = 0; i < 3; i++) {
    fns.push(function() { return i; });
  }
  
  for (var j = 0; j < 3; j++) {
    (function(index) {
      fns.push(function() { return index; });
    })(j);
  }
  
  return fns;
}

const funcs = makeClosures();
console.log(funcs.map(fn => fn()));`,
	options: [
        '[3, 3, 3, 3, 3, 3]',
		'[0, 1, 2, 3, 3, 3]',
        '[2, 2, 2, 2, 2, 2]',
        '[0, 1, 2, 3, 4, 5]',
		'[0, 1, 2, 0, 1, 2]',

	],
	correctIndex: 4,
	sources: [textSources.closures, textSources.scope]
},

{
	id: 19,
	prompt: 'What does the following code log?',
	topic: 'js',
	code: `function createFunctions() {
  const result = [];
  
  for (var i = 0; i < 3; i++) {
    result[i] = function() {
      return i;
    };
  }
  
  return result;
}

const functions = createFunctions();
console.log(functions[0]());
console.log(functions[1]());
console.log(functions[2]());`,
	options: [
		'0 1 2',
		'1 2 3',
		'3 3 3',
		'undefined undefined undefined',
		'2 2 2'
	],
	correctIndex: 2,
	sources: [textSources.closures, textSources.scope]
},

{
	id: 20,
	prompt: 'What does the following code log?',
	topic: 'js',
	code: `function outer(x) {
  return function inner(y) {
    return x + y;
  };
}

const add5 = outer(5);
const add10 = outer(10);

console.log(add5(3));
console.log(add10(3));
console.log(add5 === add10);`,
	options: [
		'8 13 true',
		'8 13 false',
		'5 10 true',
		'5 10 false',
		'8 13 undefined'
	],
	correctIndex: 1,
	sources: [textSources.closures, videoSources.closures]
},
];

export default questions;
