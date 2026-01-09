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
		title: 'Micro/Macro task queue'
	}
};

export const textSources: TextSources = {
	asyncVideo: {
		text: 'blabla',
		title: 'Micro/Macro task queue'
	}
};
