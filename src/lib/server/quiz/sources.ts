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
	}
};
