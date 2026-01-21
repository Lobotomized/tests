import { getQuestions } from '$lib/server/quiz/data';
import mixedTopics from '$lib/quiz/mixedTopics'



export function load({ params, url }: { params: { topic: string }; url: URL }) {
	const topic = params.topic || '';
	const questionsNumber = Number(url.searchParams.get('questionsNumber')) || undefined;
	const arrToPick = mixedTopics[topic] ? mixedTopics[topic]() : getQuestions(topic)
	if(questionsNumber){
		// Shuffle and pick random questions
		for (let i = arrToPick.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arrToPick[i], arrToPick[j]] = [arrToPick[j], arrToPick[i]];
		}
		arrToPick.length = questionsNumber;
	}
	console.log(arrToPick.length)
	return { questions: arrToPick, topic };
}
