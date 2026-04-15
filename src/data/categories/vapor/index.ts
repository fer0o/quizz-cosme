import type { QuizSection } from "../../types";

export const vaporSection: QuizSection = {
	id: "vapor",
	title: "Vapor con ozono",
	description: "Uso, efectos y contraindicaciones.",
	questions: [
		{
			prompt: "¿Por que se considera el vapor imprescindible en los tratamientos de belleza?",
			answer: "Porque ayuda a desintoxicar la piel."
		},
		{
			prompt: "¿Que provoca el contacto del vapor en la piel?",
			answer: "Vasodilatacion, ayuda a eliminar toxinas, vuelve mas permeable la capa cornea y facilita la extraccion de comedones."
		},
		{
			prompt: "¿Como se transforma el oxigeno en ozono en el vapor?",
			answer: "Por medio de una lampara ultravioleta."
		},
		{
			prompt: "¿Cual es el tiempo de uso del vapor en facial y corporal?",
			answer: "10 y 15 minutos."
		},
		{
			prompt: "Menciona las contraindicaciones del vapor con ozono.",
			answer: "Asma, telangiectasias y cuperosis."
		}
	]
};
