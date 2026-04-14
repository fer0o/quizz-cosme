import type { QuizSection } from "../../types";

export const vaporSection: QuizSection = {
	id: "vapor",
	title: "Vapor con ozono",
	description: "Uso, efectos y contraindicaciones.",
	questions: [
		{
			prompt: "¿Por que se considera imprescindible el vapor en tratamientos de belleza?",
			answer: "Porque ayuda a desintoxicar la piel."
		},
		{
			prompt: "¿Que provoca el contacto del vapor en la piel?",
			answer: "Vasodilatacion, mayor permeabilidad de la capa cornea y facilita extraccion de comedones."
		},
		{
			prompt: "¿Cuales son las contraindicaciones del vapor con ozono?",
			answer: "Asma, telangiectasias y cuperosis."
		}
	]
};
