import type { QuizSection } from "../../types";

export const nerviosoSection: QuizSection = {
	id: "nervioso",
	title: "Sistema nervioso",
	description: "Division anatomica y funciones clave.",
	questions: [
		{
			prompt: "¿Como esta dividido anatomicamente el sistema nervioso?",
			answer: "En sistema nervioso central (SNC) y sistema nervioso periferico (SNP)."
		},
		{
			prompt: "¿Cual es la unidad basica anatomica y funcional del sistema nervioso?",
			answer: "La neurona."
		},
		{
			prompt: "¿Como se subdivide el sistema nervioso autonomo?",
			answer: "En sistema nervioso simpatico y sistema nervioso parasimpatico."
		},
		{
			prompt: "¿Como se llama el quinto par craneal y que inerva?",
			answer: "Nervio trigemino; inerva musculos de la masticacion y transmite sensibilidad de la cara."
		}
	]
};
