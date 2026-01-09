import { getQuestions } from '$lib/server/quiz/data';

export function load({ params }: { params: { topic: string } }) {
	const topic = params.topic || '';
	return { questions: getQuestions(topic), topic };
}
