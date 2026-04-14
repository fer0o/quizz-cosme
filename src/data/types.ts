export type QuizQuestion = {
	prompt: string;
	answer: string;
};

export type QuizSection = {
	id: string;
	title: string;
	description: string;
	questions: QuizQuestion[];
};
