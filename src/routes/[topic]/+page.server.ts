import { getQuestions } from '$lib/server/quiz/data';
import mixedTopics from '$lib/quiz/mixedTopics'

function getRandomSubset<T>(arr: T[], size: number): T[] {
	if (size >= arr.length) return [...arr];
	const shuffled = [...arr];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled.slice(0, size);
}


export function load({ params, url }: { params: { topic: string }; url: URL }) {
	const topic = params.topic || '';
	const questionsNumber = Number(url.searchParams.get('questionsNumber')) || 20;
	let arrToPick = mixedTopics[topic] ? mixedTopics[topic]() : getQuestions(topic)
	if(questionsNumber){
		arrToPick = getRandomSubset(arrToPick,questionsNumber)
	}

	return {
		questions: arrToPick,
		topic,
		// Prevent caching by setting cache headers
		headers: {
			'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
			'Pragma': 'no-cache',
			'Expires': '0'
		}
	};
}
