import type { QuizSection } from "../../types";

export const seguridadSection: QuizSection = {
	id: "seguridad",
	title: "Seguridad e higiene",
	description: "Prevencion de riesgos y asepsia.",
	questions: [
		{
			prompt: "¿Que es desinfeccion?",
			answer: "Proceso para eliminar, destruir o remover agentes patogenos que pueden causar infeccion."
		},
		{
			prompt: "¿Que es esterilizacion?",
			answer: "Proceso por el cual se logra la muerte de todas las formas microbianas, incluidas esporas."
		},
		{
			prompt: "¿Que es antisepsia?",
			answer: "Proceso de destruccion de microorganismos sobre superficies cutaneo-mucosas con baja toxicidad."
		}
	]
};
