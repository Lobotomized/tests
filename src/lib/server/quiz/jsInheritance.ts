import type { QuestionFull } from '$lib/quiz/types';
import { textSources, videoSources } from '$lib/server/quiz/sources';



const questions: QuestionFull[] = [
	{
		id: 1,
		prompt: 'What does the following code log?',
		topic: 'js',
		code: `class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(\`\${this.name} makes a sound\`\);
    }
}

class Dog extends Animal {
    speak() {
        super.speak();
        console.log(\`\${this.name} barks\`\);
    }
}

const dog = new Dog('Buddy');
dog.speak(); 
		`,
		correctIndex: 3,
		sources: [videoSources.superKeyword],
        		options: [
			'Logs "Buddy makes a sound"',
			'Logs "Buddy barks"',
			'Logs "undefined barks"',
			'Logs "Buddy makes a sound" and "Buddy barks"',
			'Logs "undefined makes a sound" and "undefined barks"',
			'Logs "undefined makes a sound" and "Buddy barks"'
		],
	},
	{
		id: 2,
		prompt: 'What does the following code log?',
		topic: 'js',
		code: `class A {
    constructor() {
        console.log('A constructor');
        this.value = 1;
    }
}

class B extends A {
    constructor() {
        console.log('B constructor - before super');
        super();
        console.log('B constructor - after super');
        this.value = 2;
    }
}

const b = new B();
console.log(b.value);`,
		correctIndex: 1,
		sources: [textSources.classOrder],
		options: [
			'Logs "A constructor", "B constructor - before super", "B constructor - after super", 1',
			'Logs "B constructor - before super", "A constructor", "B constructor - after super", 2',
			'Logs "A constructor", "B constructor - before super", "B constructor - after super", 2',
			'Logs "B constructor - before super", "A constructor", "B constructor - after super", 1',
			'Logs "B constructor - before super", "A constructor", "B constructor - after super", undefined'
		],
	},

	{
		id: 3,
		prompt: 'What does the following code log?',
		topic: 'js',
		sources: [videoSources.constructorFunctionInheritance],
		code: `function Animal() {
  this.type = 'animal';
}
Animal.prototype.sound = 'generic sound';

const dog = new Animal();
dog.sound = 'bark';

const cat = new Animal();

console.log(dog.sound);
console.log(cat.sound);
delete dog.sound;	
console.log(dog.sound);`,
		correctIndex: 0,
		options: [
			'Logs "bark", "generic sound", "generic sound"',
			'Logs "bark", "bark", "bark"',
			'Logs "bark", "generic sound", "undefined"',
			'Logs "bark", "undefined", "generic sound"',
			'Logs "generic sound", "generic sound", "generic sound"'
		],
	},

	{
		id: 4,
		prompt: 'What does the following code log?',
		sources: [videoSources.constructorFunctionInheritance],
		topic: 'js',
		code: `function A() {}
A.prototype.x = 10;

const a1 = new A();
const a2 = new A();

a1.x = 20;

console.log(a1.x);
console.log(a2.x);
console.log(A.prototype.x);`,
		correctIndex: 2,
		options: [
			'Logs "10", "10", "10"',
			'Logs "20", "20", "20"',
			'Logs "20", "10", "10"',
			'Logs "10", "10", "20"',
			'Logs "20", "10", "20"'
		],
	},
	{
		id: 5,
		prompt: 'What does the following code log?',
		topic: 'js',
		sources: [videoSources.constructorFunctionInheritance],
		code: `const base = { a: 1 };
const child = Object.create(base);
child.b = 2;
const grandchild = Object.create(child);
grandchild.a = 3;

console.log(grandchild.a, grandchild.b);
delete grandchild.a;
console.log(grandchild.a);
delete child.b;
console.log(grandchild.b);`,
		correctIndex: 1,
		options: [
			'Logs "3 2", "3", "2"',
			'Logs "3 2", "1", "undefined"',
			'Logs "3 2", "1", "2"',
			'Logs "1 2", "1", "2"',
			'Logs "3 2", "undefined", "undefined"'
		],
	},

	{
		id: 6,
		prompt: 'What does the following code log?',
		sources: [textSources.classOrder],
		topic: 'js',
		code: `class Parent {
  constructor() {
    this.name = 'Parent';
  }
  greet() {
    return 'Hello from ' + this.name;
  }
}

class Child extends Parent {
  constructor() {
    super();
    this.name = 'Child';
  }
  greet() {
    return super.greet() + ' and ' + this.name;
  }
}

const c = new Child();
console.log(c.greet());`,
		correctIndex: 3,
		options: [
			'Logs "Hello from Parent"',
			'Logs "Hello from Parent and Child"',
			'Logs "Hello from Child"',
			'Logs "Hello from Child and Child"',
			'Logs "Hello from undefined"'
		],
	},
	{
		id: 7,
		prompt: 'What does the following code log?',
		topic: 'js',
		sources: [textSources.staticMethods],
		code: `class Base {
  static greet() {
    return 'Hello from Base';
  }
  greet() {
    return 'Hi from instance';
  }
}

class Derived extends Base {
  static greet() {
    return super.greet() + ' (overridden)';
  }
}

const d = new Derived();
console.log(Derived.greet());
console.log(d.greet());`,
		correctIndex: 0,
		options: [
			'Logs "Hello from Base (overridden)" and "Hi from instance"',
			'Logs "Hello from Base" and "Hi from instance"',
			'Logs "Hello from Base (overridden)" and "Hello from Base"',
			'Logs "Hello from Base" and "Hello from Base"',
			'Logs "undefined" and "Hi from instance"'
		],
	},

	{
		id: 8,
		prompt: 'What does the following code log?',
		topic: 'js',
		sources: [videoSources.constructorFunctionInheritance],
		code: `function Animal() {}
const dog = new Animal();

Animal.prototype.speak = function() {
  return 'woof';
};

console.log(dog.speak());`,
		correctIndex: 0,
		options: [
			'Logs "woof"',
			'Logs undefined',
			'Throws an error',
			'Logs nothing',
			'Logs empty string'
		],
	},

	{
		id: 9,
		prompt: 'What does the following code log?',
		sources: [videoSources.constructorFunctionInheritance],
		topic: 'js',
		code: `function Base() {}
Base.prototype.say = () => 'base';

class Derived extends Base {}
const d = new Derived();

console.log(d.say());`,
		correctIndex: 0,
		options: [
			'Logs "base"',
			'Logs undefined',
			'Throws an error',
			'Logs "undefined"',
			'Logs nothing'
		],
	},
	{
		id: 10,
		prompt: 'What does the following code log?',
		topic: 'js',
		sources: [videoSources.constructorFunctionInheritance],
		code: `function Base() {
    this.a = 20;
}

let k = new Base();

k.__proto__.a = 30;

let b = new Base();

console.log(b)`,
		correctIndex: 0,
		options: [
			'Logs "Base { a: 20 }"',
			'Logs "Base { a: 30 }"',
			'Logs "Base { a: 20, a: 30 }"',
			'Logs "undefined"',
			'Throws an error'
		],
	},
];

export default questions;