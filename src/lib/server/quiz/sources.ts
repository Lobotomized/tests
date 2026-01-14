export type VideoSource = {
	url: string;
	title: string;
};
export type VideoSources = {
	[index: string]: VideoSource;
};
export type TextSource = {
	text: string;
	title: string;
};
export type TextSources = {
	[index: string]: TextSource;
};
export const videoSources: VideoSources = {
	closures: {
		url: 'https://www.youtube.com/watch?v=6Ixyltr8_R0',
		title: 'Javascript closures'
	},
	asyncVideo: {
		url: 'https://www.youtube.com/watch?v=eiC58R16hb8',
		title: 'Call stack, Event loop and task queues'
	},
	promiseMethods : {
		url: 'https://www.youtube.com/watch?v=LE_L9OAh6Hk',
		title: 'Promise Methods'
	},
	promises: {
		url: 'https://www.youtube.com/watch?v=Xs1EMmBLpn4',
		title: 'Promise Execution'
	},
	superKeyword: {
		url:"https://www.youtube.com/watch?v=zmaIrfJjO9E",
		title: 'Super keyword'
	},
	constructorFunctionInheritance: {
		url: 'https://www.youtube.com/watch?v=kDGMQyd0DVU',
		title: 'Constructor function inheritance'
	}
};

export const textSources: TextSources = {
	byRefByValue: {
		text: `
			In javascript, variables can be passed by reference or by value. <br/>
			Primitive types (string, number, boolean, null, undefined) are passed by value. <br/>
			Non-primitive types (objects, arrays, functions) are passed by reference. <br/>
			This means that when you have a variable representing object, the variable itself is a pointer to the object.
		`,
		title: 'Pass by reference or by value'
	},
	closures: {
		text: `
			Closure is the access a child function has to the scope of the parent function from which was created. 
		`,
		title: 'Javascript closures'
	},
	jsHoisting:{
		text: `
			Hoisting is a javascript mechanism where variable and function declarations (registering the variable in the same scope) 
			are moved to the top of their containing scope but initializations (assigning a value in the variable) are not.<br/>
			let and const cannot be referenced before they appear in the code but var is by default initialized with undefined. <br/>
			This means that if you reference var before it appears in the code it's value will be undefined. <br/>
			Function definitions are also hoisted and can be called before they appear in the code. <br/>

		`,
		title: 'Javascript hoisting'
	},
	scope:{
		text: `
			Scope in javascript represents the accessibility of variables. Different variables have different scopes.</br>
			let and const have block scope. Block scope means that the variables are only accessible within the block 
			(statements enclosed in braces {}) they are defined in. <br/>
			var has function scope. Function scope means that the variables are only accessible within the function they are defined in. <br/>
			function definitions in javascript have function scope if there is no 'use strict' and block scope otherwise.
		`,
		title: 'Types of scope'
	},
	asyncFunctionsExecution: {
		text: `
		JavaScript async functions execute synchronously until they hit an await statement. If the code after the await statement is not asynchronous, it will still be executed synchronously. 
		However, everything after the await statement will be placed in the microtask queue instead of executing instantly.`,
		title: 'Async functions execution'
	},
	asyncFunctionsInForEach: {
		text: `
			Since forEach takes a function as an argument, if this function is set as an async function and there is an await within it,
			will block the function but not the forEach loop.
			The await statement blocks the direct parent function.
		`,
		title: 'Async in forEach'
	},
	classOrder : {
		text: `
			Calling the "super()" keyword function is like calling the parent constructor while sending the current "this" to it.
		`,
		title: 'Calling "super()" order'
	},
	staticMethods: {
		text: `
			Static methods are called on the class itself, not on the instances of the class.
		`,
		title: 'Static methods'
	},
	implicitThis: {
		text: `
			Implicit binding occurs whenever a function is called as a method of an object.
			You can think for it as "What is on the left of the function when it is called?"
			For instance obj.method() the "this" keyword will be bound to the "obj" object.
		`,
		title: 'Implicit binding'
	},
	thisHierarchy: {
		text: `
			There is a priority hierarchy for the "this" keyword.<br/>
			1. New binding - When a function is called with the "new" keyword, the "this" keyword is bound to the new object being created.<br/>
			2. Explicit binding - When a function is called with the "call", "apply" or "bind" methods, the "this" keyword is bound to the object passed as the first argument.<br/>
			3. Implicit binding - When a function is called as a method of an object, the "this" keyword is bound to the object.<br/>
			4. Default binding - When none of the above bindings apply, the "this" keyword is bound in different ways depending on the environment. Whenever the code uses "use strict" it will always be undefined.<br/>
<br/>
			The higher hierarchy binding will always be used.
		`,	
		title: 'This hierarchy'
	},
	bind: {
		text: `
			The bind method creates a new function which has "this" and the arguments after permanently bound to the provided value.
			The first argument in bind will always be the this and the rest of the arguments will be the arguments of the new function.
			Every time you call the new function with an argument it will be set as the next argument after the ones you provided in bind.
		`,
		title: 'Bind method'
	},

	thisInArrowFunctions: {
		text: `
			Arrow functions do not have their own "this" keyword.
			Instead, they inherit the "this" from one level above them.
		`,
		title: '"this" binding in arrow functions'
	},
	useStrictForThis: {
		text: `
			When using "use strict" the "this" keyword will be undefined in all cases of "default" binding.
		`,
		title: 'Using "use strict" for "this" binding'
	},
	defaultThis: {
		text: `
			When using "use strict" the "this" keyword will be undefined in all cases of "default" binding. </br>
			When in browser default binding will always be the window object. </br>
			When in Node.js and you have default binding from within a function you will get the globalThis </br>
			When in Node.js and you have default binding from the top level of a file you will get the module.exports object.
		`,
		title: 'Default this binding'
	},
	nextTickAndSetImmediate : {
		text: `
			When we pass a function to process.nextTick(), we instruct the engine to invoke this function immediately after the current operation completes, 
			before moving to the next phase in the event loop. <br/>
			Any function passed as the setImmediate() argument is a callback that's executed in the next iteration of the event loop.
		`,
		title: 'process.nextTick() and setImmediate()'
	},
	whatHasProto: {
		text: `
In JavaScript, primitive values (strings, numbers, booleans, null, undefined, symbols, bigints) don't inherently have 
the __proto__ property because it's an accessor on Object.prototype, but they get temporary wrapper objects with prototypes when accessed, 
except for null and undefined which have no prototype no __proto__ property
		`,
		title: 'What has "__proto__" property?'
	}
};
