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
	Infinity: {
		text: `
			Infinity is a special number value in javascript that stands for "Infinity". <br/>
			It is returned when you divide a positive number to zero. <br/>
			If you divide a negative number to zero, it returns -Infinity. <br/>
		`,
		title: 'Infinity'
	},
	NotANumber:{
		text: `
			NaN is a special number value in javascript that stands for "Not a Number". <br/>
			It is returned from arithmetic operations on non-numeric values or you try to make an impossible arithmetic operation. <br/>
		`,
		title: 'NaN'
	},
	detailedAndOperator: {
		text: `
			Logical AND operator (&&) returns the first falsy value it encounters. <br/>
			If all operands are truthy, it returns the last operand. <br/>
		`,
		title: 'Logical AND operator'
	},
	detailedOrOperator: {
		text: `
			Logical OR operator (||) returns the first truthy value it encounters. <br/>
			If all operands are falsy, it returns the last operand. <br/>
		`,
		title: 'Logical OR operator'
	},
	logicalOperators: {
		text: `
			=== - strict equality operator <br/>
			!== - strict inequality operator <br/>
			== - loose equality operator (first casts operands to the same type) <br/>
			|| - logical OR operator <br/>
			&& - logical AND operator <br/>
			! - logical NOT operator <br/>
			?? - nullish coalescing operator (a ?? b will return a if a is not null or undefined) <br/>
			?: - ternary operator (a ? b : c  will return b if a is truthy and otherwise c)  <br/>
		`,
		title: 'Boolean operators'
	},
	operatorPrecedense: {
		text: `
			Operator precedence in javascript determines the order in which operations are performed (higher precedence number is performed first).  <br/>
			If operators have the same precedence, they are evaluated from left to right. <br/>
			The precedense is at follows: <br/>
			18: grouping: putting expressions in () <br/>
			17: access and call: x[y], new x(y), x(y), import(x) <br/>
			16: new without argument list: new x  <br/>
			15: postfix operators: x++, x-- <br/>
			14: prefix operators: ++x, --x, +x, -x, ~x, !x, typeof x, void x, delete x, await x <br/>
			13: exponentiation: x**y <br/>
			12: multiplicative operators: x*y, x/y, x%y <br/>
			11: additive operators: x+y, x-y <br/>
			10: bitwise shift: x << y, x >> y, x >>> y <br/>
			9: relational operators: <, <=, >, >=, x in y, x instanceof y,  <br/>
			8: equality operators: ==, !=, ===, !== <br/>
			7: bitwise AND: x & y<br/>
			6: bitwise XOR: x ^ y <br/>
			5: bitwise OR: x | y <br/>
			4: logical AND: x && y <br/>
			3: logical OR, nullish coalescing: x || y, x ?? y <br/>
			2: assignment and miscellaneous: x = y, x-=y, x+=y, x*=y, x/=y, x%=y, x<<=y, x>>=y, x>>>=y, x&=y, x^=y, x|=y <br/>
			1: comma: x, y <br/>
		`,
		title: 'Operator precedence'
	},
	doubleEquals: {
		text: `
			Double equals in javascript compares values after casting them to the same type. <br/>

			If types are the same: Use strict equality (===) comparison <br/>

			If one is null and the other is undefined: Return true <br/>

			If one is a number and the other is a string: Convert the string to a number, then compare <br/>

			If one is a boolean: Convert the boolean to a number, then re-compare <br/>

			If one is an object and the other is a primitive: Convert the object to a primitive (using valueOf() then toString()), then re-compare <br/>

			If one is a number/string and the other is a BigInt/Symbol: Special rules apply <br/>
		`,
		title: 'Double equals operator'
	},
	emptyArrayExamples: {
		text: `
			![] is evaluated first (due to operator precedence): <br/>

			The ! operator always converts its operand to a boolean first <br/>

			[] is truthy, so ![] becomes false <br/>

			So we now have: [] == false <br/>

			Type coercion happens in == comparison: <br/>

			According to JavaScript's abstract equality algorithm, when comparing with a boolean, the boolean is converted to a number first <br/>

			false becomes 0 <br/>

			So we now have: [] == 0 <br/>

			Now comparing [] with 0: <br/>

			When comparing an object/array with a number, JavaScript tries to convert the object to a primitive <br/>

			It first calls valueOf() on the array (which returns the array itself - not primitive) <br/>

			Then it calls toString() on the array (which returns an empty string "") <br/>

			So [] becomes "" <br/>

			Now comparing "" == 0: <br/>

			When comparing a string with a number, the string is converted to a number <br/>

			Empty string "" becomes 0 <br/>

			So we have: 0 == 0 which is true <br/>
		`,
		title: 'Empty array example'
	},
	truthyFalseyValues: {
		text: `
			If you cast a value to a boolean it will be either casted to a truthy or falsey value. <br/>
			In javascript, there are 6 falsy values: false, 0, "", null, undefined, NaN. <br/>
			All other values are truthy. <br/>
		`,
		title: 'Truthy and falsey values'
	},
	stringCastings: {
		text: `
			In javascript, you can convert a value to a string using the toString() method or the String() function. <br/>
			If you try to concatenate a string with a non-string value, the non-string value will be casted to string. <br/>
			When you cast empty array to string, it will return an empty string. <br/>
			When you cast array with elements to string, it will return a string with elements separated by commas. <br/>
			When you cast object to string you get "[object Object]" <br/>
			When you cast null to string you get "null" <br/>
			When you cast undefined to string you get "undefined" <br/>
			When you cast NaN to string you get "NaN" <br/>
			When you cast a number to string you get a string representation of that number. For instance 8 would become "8". <br/>
		`,
		title: 'String castings'
	},
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
			Arrow functions do not have their own "this" keyword.<br/>
			Instead, they inherit the "this" from one level above them and remember it after that. 
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
