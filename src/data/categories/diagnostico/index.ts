import type { QuizSection } from "../../types";

export const diagnosticoSection: QuizSection = {
	id: "diagnostico",
	title: "Metodos basicos de diagnostico",
	description: "Conceptos y herramientas basicas.",
	questions: [
		{
			prompt: "Define diagnostico.",
			answer: "Acto de conocer la naturaleza de una enfermedad mediante observacion de signos y sintomas."
		},
		{
			prompt: "Define protocolo.",
			answer: "Plan escrito y detallado de una actuacion medica."
		},
		{
			prompt: "¿Que equipos basicos apoyan un buen diagnostico?",
			answer: "Lupa y luz de Wood."
		}
	]
};
