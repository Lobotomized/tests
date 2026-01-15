import { getMixedJsQuestions } from "$lib/server/quiz/data";
import type { QuestionFull } from "./types";

const mixedTopics: Record<string, () => QuestionFull[]> = {
	jsMixed: getMixedJsQuestions,
}

export default mixedTopics;