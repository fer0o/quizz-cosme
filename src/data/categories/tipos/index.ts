import type { QuizSection } from "../../types";

export const tiposSection: QuizSection = {
	id: "tipos",
	title: "Tipos de piel",
	description: "Clasificacion y alteraciones frecuentes.",
	questions: [
		{
			prompt: "Menciona las formas en que se clasifica la piel.",
			answer: "Por fototipos (melanina) y por actividad sebacea (normal, grasa, alipica)."
		},
		{
			prompt: "¿Que otro nombre recibe la piel asfixiada?",
			answer: "Piel ocluida."
		},
		{
			prompt: "¿Cual es la enfermedad mas comun de la piel?",
			answer: "El acne."
		},
		{
			prompt: "¿Como se denomina la piel con equilibrio glandular, poros finos y pH balanceado?",
			answer: "Piel normal o eudermica."
		}
	]
};
