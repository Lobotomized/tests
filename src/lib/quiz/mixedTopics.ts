import {  getMixedJsQuestionsFull, getMixedJsQuestionsMid, getMixedJsQuestionsQuick } from "$lib/server/quiz/data";
import type { QuestionFull } from "./types";

const mixedTopics: Record<string, () => QuestionFull[]> = {
	jsMixed: getMixedJsQuestionsFull,
	jsMixedQuick: getMixedJsQuestionsQuick,
	jsMixedMid: getMixedJsQuestionsMid
}

export default mixedTopics;