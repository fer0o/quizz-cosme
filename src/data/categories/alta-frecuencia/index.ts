import type { QuizSection } from "../../types";

export const altaFrecuenciaSection: QuizSection = {
	id: "alta-frecuencia",
	title: "Alta frecuencia",
	description: "Electrodos, tecnicas y aplicaciones.",
	questions: [
		{
			prompt: "¿Que tipo de gas contienen los electrodos de alta frecuencia?",
			answer: "Neon, xenon o argon."
		},
		{
			prompt: "¿De que material son los electrodos de alta frecuencia?",
			answer: "De cristal."
		},
		{
			prompt: "Menciona tecnicas de uso de alta frecuencia.",
			answer: "Efluvio, chisporroteo y masaje indirecto."
		},
		{
			prompt: "¿Cual es el tiempo de uso de la alta frecuencia?",
			answer: "De 3 a 5 minutos."
		}
	]
};
