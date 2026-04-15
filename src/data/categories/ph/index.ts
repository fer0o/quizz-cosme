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
			prompt: "¿Como se forma el manto acido?",
			answer: "Por el manto aereo y la emulsion epicutanea."
		},
		{
			prompt: "¿Como se forma la emulsion epicutanea y cual es su funcion?",
			answer: "Se forma por sudor y sebo; mantiene la piel humeda y flexible, la protege de la perdida de agua y establece su pH normal."
		},
		{
			prompt: "¿Que pH debe tener la piel para evitar danos?",
			answer: "Un pH entre 5.5 y 6."
		},
		{
			prompt: "¿Que es el sistema buffer?",
			answer: "La capacidad de la piel de restablecer su pH."
		},
		{
			prompt: "¿Que sucede en una piel sana cuando utiliza exceso de limpiadores alcalinos?",
			answer: "Disminuye la capacidad de neutralizar y aumenta el riesgo de infecciones."
		},
		{
			prompt: "¿Cual es el porcentaje de agua de la capa cornea en condiciones normales?",
			answer: "Entre un 10% y un 20%."
		},
		{
			prompt: "¿Cual es la funcion del Factor de Humectacion Natural (FNH)?",
			answer: "Mantener humeda y flexible la capa cornea."
		},
		{
			prompt: "¿Cuando se da una mayor penetracion de productos cosmeticos o medicamentos topicos?",
			answer: "Cuando hay mayor hidratacion de la capa cornea."
		},
		{
			prompt: "¿Cual es la forma mas efectiva de restaurar el pH?",
			answer: "Aplicar productos cosmeticos profesionales con pH semejante al de la piel normal."
		}
	]
};
