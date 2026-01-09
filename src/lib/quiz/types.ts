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
};

export type QuestionFull = {
	id: number;
	prompt: string;
	code?: string;
	topic: string;
	options: string[];
	correctIndex: number;
};
