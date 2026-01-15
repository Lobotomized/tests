import { getQuestions } from '$lib/server/quiz/data';
import mixedTopics from '$lib/quiz/mixedTopics'



export function load({ params }: { params: { topic: string } }) {
	const topic = params.topic || '';
	return { questions: mixedTopics[topic]?.() || getQuestions(topic), topic };
}
