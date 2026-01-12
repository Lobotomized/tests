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
	asyncVideo: {
		url: 'https://www.youtube.com/watch?v=eiC58R16hb8',
		title: 'Call stack, Event loop and task queues'
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
	}
};
