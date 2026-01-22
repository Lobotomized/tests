import type { QuestionFull } from '$lib/quiz/types';
import { textSources, videoSources } from '$lib/server/quiz/sources';



const questions: QuestionFull[] = [
    {
        id: 1,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `const obj = {
  name: "Alice",
  greet() {
    console.log(this.name);
  }
};

const greet = obj.greet;
greet();
obj.greet();
        `,
        correctIndex: 2,
        sources: [textSources.implicitThis],
                options: [
            'Logs "Alice" "Alice"',
            'Logs "Alice" "undefined"',
            'Logs "undefined" "Alice"',
            'Logs "undefined" "undefined"',
            'Logs "Alice"',
            'Logs "undefined"'
        ],
    },

    {
        id: 2,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `function k(){
  this.a = "test";
  this.b = "test2"
}

let obj = {
  a:5,
  b:10
}

let boundK = k.bind(obj)
let p = new boundK()
console.log(p)`,
        correctIndex: 1,
        sources: [textSources.thisHierarchy],
        options: [
            'Logs k { a: 5, b: 10 }',
            'Logs k { a: "test", b: "test2" }',
            'Logs undefined',
            'Logs k { a: 5, b: 10, a: "test", b: "test2" }',
            'Throws an error'
        ],
    },

    {
        id: 3,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `function k(){

}

let obj = {
  a:5,
  b:10
}

let boundK =  k.bind(obj)
let p = new boundK()
console.log(p)`,
        correctIndex: 0,
        sources: [textSources.thisHierarchy],
        options: [
            'Logs k {}',
            'Logs undefined',
            'Logs k { a: 5, b: 10 }',
            'Logs k { a: undefined, b: undefined }',
            'Throws an error'
        ],
    },


    {
        id: 4,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `let obj = {
  a: 5,
  b: 20
}

let obj2 = {
  a: 30,
  b: 30
}

function test() {
  console.log(this);
}

obj.test = test.bind(obj2);

obj.test()`,
        correctIndex: 1,
        sources: [textSources.thisHierarchy],
        options: [
            'Logs obj { a: 5, b: 20 }',
            'Logs obj2 { a: 30, b: 30 }',
            'Logs undefined',
            'Logs obj { a: 30, b: 30 }',
            'Throws an error'
        ],
    },

    {
        id: 5,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `const obj1 = { name: 'Frank' };
const obj2 = { name: 'Grace' };

function sayName(age, country) {
  console.log(\`\${this.name} is \${age} from \${country}\`);
}

const boundFunction = sayName.bind(obj1, 30);
boundFunction.call(obj2, 'Canada');`,
        correctIndex: 0,
        sources: [textSources.bind],
        options: [
            'Logs "Frank is 30 from Canada"',
            'Logs "Grace is 30 from Canada"',
            'Logs "Frank is 30 from undefined"',
            'Logs "Grace is 30 from undefined"',
            'Throws an error'
        ],
    },

    {
        id: 6,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `const obj = {
  name: 'Charlie',
  regularFunc: function() {
    console.log('Regular:', this.name);
  },
  arrowFunc: () => {
    console.log('Arrow:', this.name);
  }
};

obj.regularFunc();
obj.arrowFunc();`,
        correctIndex: 2,
        sources: [textSources.thisInArrowFunctions],
        options: [
            'Logs "Regular: Charlie" "Arrow: Charlie"',
            'Logs "Regular: " "Arrow: "',
            'Logs "Regular: Charlie" "Arrow: "',
            'Logs "Regular: " "Arrow: Charlie"',
            'Throws an error'
        ],
    },
    {
        id: 7,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `const obj = {
  name: 'Alice',
  greet: function() {
    function innerFunction() {
      console.log(this.name);
    }
    innerFunction();
  }
};
obj.greet();`,
        correctIndex: 0,
        sources: [textSources.defaultThis],
        options: [
            'Logs undefined',
            'Logs "Alice"',
            'Logs "innerFunction"',
            'Logs the whole obj',
            'Throws an error'
        ],
    },
    {
        id: 8,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `function p(){
    this.k = 5;
    return "CALL ME AS A NON CONSTRUCTOR"
}

let b =  p();
console.log(b.k)
console.log(k)`,
        correctIndex: 4,
        sources: [textSources.defaultThis],
        options: [
            'Logs "5" and "5"',
            'Logs "CALL ME AS A NON CONSTRUCTOR" and "5"',
            'Logs "undefined" and "undefined"',
            'Logs "undefined" and than ReferenceError',
            'Logs "undefined" and "5"',
            'Throws a ReferenceError'
        ],
    },
  
    {
        id: 9,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `const obj = {
  value: 42,
  getValue: function() {
    return this.value;
  }
};

console.log(obj.getValue());

const getValue = obj.getValue;
console.log(getValue()); 

console.log(getValue.call(obj)); 
console.log(getValue.apply(obj));`,
        correctIndex: 3,
        sources: [textSources.thisHierarchy],
        options: [
            'Logs 42 42 42 42',
            'Logs 42 undefined 42 42',
            'Logs 42 42 undefined undefined',
            'Logs 42 undefined 42 42',
            'Logs undefined 42 42 42',
            'Throws an error',
            'Logs undefined undefined undefined undefined'
        ],
    },

    {
        id: 10,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `const user = {
  name: "Bob",
  greet() {
    const arrow = () => console.log(this.name);
    arrow();
  }
};

user.greet();`,
        correctIndex: 0,
        sources: [textSources.thisInArrowFunctions],
        options: [
            'Logs "Bob"',
            'Logs undefined',
            'Logs "arrow"',
            'Logs the user object',
            'Throws an error'
        ],
    },


    {
        id: 11,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `const obj = {
  arr:["a","b","c"],
  name:"Me",
  loop() {
    this.arr.forEach(function(el){
      console.log(this.name + el)
    })
  }
};

obj.loop();`,
        correctIndex: 1,
        sources: [textSources.defaultThis],
        options: [
            'Logs "Mea" "Meb" "Mec"',
            'Logs "undefineda" "undefinedb" "undefinedc"',
            'Logs "a" "b" "c"',
            'Logs undefined three times',
            'Throws an error'
        ],
    },

    {
        id: 12,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `function Person(name) {
  this.name = name;
  setTimeout(function() {
    console.log(this.name);
  }, 100);
}

new Person('Diana');`,
        correctIndex: 1,
        sources: [textSources.defaultThis],
        options: [
            'Logs "Diana"',
            'Logs undefined',
            'Logs "Person"',
            'Logs the Person instance',
            'Throws an error'
        ],
    },

    {
        id: 13,
        prompt: 'What does the following code log in Node.js?',
        topic: 'js',
        code: `"use strict"

function here(){
    console.log(this)
}

here()`,
        correctIndex: 2,
        sources: [textSources.defaultThis],
        options: [
            'Logs the global object',
            'Logs the "here" function',
            'Logs undefined', 
            'Logs an empty object',
            'Logs module.exports'
        ],
    },
    {
        id: 14,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `const a = { word: "Hello" };
const b = { 
    word: "Hi", 
    say:function(){
        console.log(this.word)
    }
 };

b.say();
a.say = b.say;
a.say();`,
        correctIndex: 0,
        sources: [textSources.implicitThis],
        options: [
            'Logs "Hi" "Hello"',
            'Logs "Hello" "Hi"',
            'Logs "Hi" "Hi"',
            'Logs "Hello" "Hello"',
            'Logs undefined twice',
            'Throws an error'
        ],
    },

    {
        id: 15,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `const obj = {
  prop: 'A',
  method: function() {
    const arrow = () => this.prop;
    return arrow();
  },
  arrowMethod: () => this.prop
};

const obj2 = { prop: 'B', method: obj.method, arrowMethod: obj.arrowMethod };

console.log(obj.method());
console.log(obj2.method());
console.log(obj.arrowMethod());
console.log(obj2.arrowMethod());`,
        correctIndex: 2,
        sources: [textSources.thisInArrowFunctions, textSources.implicitThis, textSources.defaultThis],
        options: [
            'Logs "A" "B" "A" "B"',
            'Logs "A" "A" undefined undefined',
            'Logs "A" "B" undefined undefined',
            'Logs "B" "B" "B" "B"',
            'Logs undefined four times',
            '"A" "A" "A" "A"'
        ],
    },

    {
        id: 16,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `const object = {
  value: 'parent',
  method() {
    const arrow = () => this.value;
    const regular = function() { return this.value; };
    return { arrow, regular };
  }
}

const child = { value: 'child' };
const { arrow, regular } = object.method.call(child);

console.log(arrow());
console.log(regular());`,
        correctIndex: 5,
        sources: [textSources.bind, textSources.thisInArrowFunctions],
        options: [
            'Logs "child" "child"',
            'Logs "parent" "parent"',
            'Logs "child" "parent"',
            'Logs "parent" "child"',
            'Logs undefined twice',
            '"child" "undefined"'
        ],
    },

    {
        id: 17,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `const object = {
  value: 'object',
  getThis: () => this,
  nested: {
    value: 'nested',
    getThis() { return this; }
  }
};

console.log(object.getThis() === this);
console.log(object.nested.getThis() === object.nested);
console.log(object.nested.getThis().value);`,
        correctIndex: 0,
        sources: [textSources.defaultThis, textSources.thisInArrowFunctions, textSources.implicitThis],
        options: [
            'Logs "true" "true" "nested"',
            'Logs "false" "false" "nested"',
            'Logs "true" "true" "object"',
            'Logs "false" "true" "nested"',
            'Logs "true" "false" "object"',
            'Throws an error'
        ],
    },

    {
        id: 18,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `'use strict';

const obj = {
  value: 'obj',
  outer() {
    const inner = () => {
      console.log(this.value);
    };
    inner.call({value: 'changed'});
  }
};

obj.outer();`,
        correctIndex: 0,
        sources: [textSources.thisInArrowFunctions, textSources.bind],
        options: [
            'Logs "obj"',
            'Logs "changed"',
            'Logs undefined',
            'Throws an error'
        ],
    },

    {
        id: 19, 
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `const config = {
  prefix: 'Result:',
  createLogger() {
    return {
      log: (msg) => console.log(this.prefix, msg),
      logRegular: function(msg) { console.log(this.prefix, msg); }
    };
  }
};

const logger = config.createLogger();
logger.log('test');
logger.logRegular('test');`,
        correctIndex: 2,
        sources: [textSources.thisInArrowFunctions, textSources.implicitThis],
        options: [
            'Logs "Result: test" "Result: test"',
            'Logs "undefined test" "Result: test"',
            'Logs "Result: test" "undefined test"',
            'Logs "undefined test" "undefined test"',
            'Throws an error'
        ],
    },

    {
        id: 20,
        prompt: 'What does the following code log?',
        topic: 'js',
        code: `const obj = {
  value: 'a',
  method: function() {
    return () => this.value;
  }
};

const getter = obj.method();
const boundGetter = obj.method.call({value: 'b'});

console.log(getter());
console.log(boundGetter());`,
        correctIndex: 1,
        sources: [textSources.thisInArrowFunctions, textSources.bind],
        options: [
            'Logs "a" "a"',
            'Logs "a" "b"',
            'Logs "b" "b"',
            'Logs "b" "a"',
            'Logs undefined twice',
            'Throws an error'
        ],
    }
];

export default questions;
