import { json } from '@sveltejs/kit';
import { grade } from '$lib/server/quiz/data';

export async function POST({ request }) {
	const req = await request.json();

	const topic = req.topic || '';
	const selections = req.selections || [];

	const result = grade(selections, topic);
	return json({ ...result });
}
