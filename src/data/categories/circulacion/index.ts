import type { QuizSection } from "../../types";

export const circulacionSection: QuizSection = {
	id: "circulacion",
	title: "La circulacion cutanea",
	description: "Plexos, funciones y vascularizacion.",
	questions: [
		{
			prompt: "¿Cuales son los plexos de la piel?",
			answer: "El plexo subcutaneo y el plexo papilar."
		},
		{
			prompt: "¿Cuales son las funciones de la circulacion cutanea?",
			answer: "Regular la temperatura corporal, mantener la presion sanguinea y transportar nutrientes."
		},
		{
			prompt: "¿Cual es la capa mas vascularizada de la piel?",
			answer: "La dermis papilar."
		}
	]
};
