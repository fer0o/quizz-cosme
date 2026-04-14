import { sections } from "./categories";

import type { QuizQuestion, QuizSection } from "./types";

export const BIG_QUIZ_SIZE = 40;

export function shuffleQuestions(questions: QuizQuestion[]): QuizQuestion[] {
	const copy = [...questions];
	for (let index = copy.length - 1; index > 0; index -= 1) {
		const next = Math.floor(Math.random() * (index + 1));
		[copy[index], copy[next]] = [copy[next], copy[index]];
	}
	return copy;
}

export function allTaggedQuestions(): QuizQuestion[] {
	return sections.flatMap((section) =>
		section.questions.map((question) => ({
			prompt: `[${section.title}] ${question.prompt}`,
			answer: question.answer
		}))
	);
}

export function buildBigQuizSection(size = BIG_QUIZ_SIZE): QuizSection {
	const randomQuestions = shuffleQuestions(allTaggedQuestions()).slice(0, size);
	return {
		id: "big-quiz",
		title: "Big Quiz Aleatorio",
		description: `${randomQuestions.length} preguntas al azar de todas las secciones.`,
		questions: randomQuestions
	};
}
