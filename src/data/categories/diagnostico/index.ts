import type { QuizSection } from "../../types";

export const diagnosticoSection: QuizSection = {
	id: "diagnostico",
	title: "Metodos basicos de diagnostico",
	description: "Conceptos y herramientas basicas.",
	questions: [
		{
			prompt: "Define diagnostico.",
			answer: "Es el acto de conocer la naturaleza de una enfermedad mediante la observacion de signos y sintomas."
		},
		{
			prompt: "Define protocolo.",
			answer: "Es el plan escrito y detallado de una actuacion medica."
		},
		{
			prompt: "Menciona los equipos basicos que ayudan a la profesional a realizar un buen diagnostico.",
			answer: "Lupa y luz de Wood."
		}
	]
};
