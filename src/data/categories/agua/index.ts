import type { QuizSection } from "../../types";

export const aguaSection: QuizSection = {
	id: "agua",
	title: "El agua y la piel",
	description: "Hidratacion y factores que la afectan.",
	questions: [
		{
			prompt: "¿Cual es el principal componente de la sangre, linfa y celulas?",
			answer: "El agua."
		},
		{
			prompt: "¿Cual es el porcentaje de agua en la piel?",
			answer: "Oscila entre el 70% y 75%."
		},
		{
			prompt: "Menciona algunos factores que influyen en la humectacion de la piel.",
			answer: "Estres, contaminacion, ayunos, emociones, poca ingesta de agua, tabaco, alcohol y temperatura."
		}
	]
};
