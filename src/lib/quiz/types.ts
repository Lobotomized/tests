import type { TextSource, VideoSource } from '$lib/server/quiz/sources';

export type QuestionPublic = {
	id: number;
	prompt: string;
	code?: string;
	options: string[];
};

export type GradeInput = {
	selections: number[];
};

export type GradeResult = {
	score: number;
	total: number;
	correct: boolean[];
	correctIndices: number[];
	sources: (VideoSource | TextSource)[];
};

export type QuestionFull = {
	id: number;
	prompt: string;
	code?: string;
	topic: string;
	options: string[];
	correctIndex: number;
	sources: (VideoSource | TextSource)[];
};
