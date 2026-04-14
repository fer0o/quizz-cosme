import type { QuizSection } from "../../types";

export const cuidadosSection: QuizSection = {
	id: "cuidados",
	title: "Cuidados de la piel",
	description: "Rutina en casa y limpieza profesional.",
	questions: [
		{
			prompt: "¿Cuantos son los pasos minimos del apoyo en casa y cual es su proposito?",
			answer: "Son 3 (limpieza, locion/tonico y proteccion) para mantener y prolongar resultados."
		},
		{
			prompt: "¿Cual es el objetivo de la limpieza facial profunda?",
			answer: "Preparar la piel para realizar un tratamiento especifico."
		},
		{
			prompt: "Menciona los primeros pasos de la limpieza facial profesional.",
			answer: "Limpieza o desmaquillado, exfoliante/peeling, locion y lisajes desincrustantes."
		},
		{
			prompt: "Menciona la secuencia completa de la limpieza facial profesional.",
			answer: "Limpieza/desmaquillado, exfoliante, locion, lisajes desincrustantes, vapor o toallas calientes, extraccion, alta frecuencia, mascarilla, tonico y proteccion."
		}
	]
};
