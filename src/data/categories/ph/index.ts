import type { QuizSection } from "../../types";

export const phSection: QuizSection = {
	id: "ph",
	title: "Potencial de hidrogeno",
	description: "Manto acido, pH y equilibrio cutaneo.",
	questions: [
		{
			prompt: "¿Que es el pH?",
			answer: "Una condicion quimica que indica el grado de acidez o alcalinidad de una solucion."
		},
		{
			prompt: "¿Que pH debe tener la piel para evitar danos?",
			answer: "Entre 5.5 y 6."
		},
		{
			prompt: "¿Que es el sistema buffer?",
			answer: "La capacidad de la piel para restablecer su pH."
		}
	]
};
