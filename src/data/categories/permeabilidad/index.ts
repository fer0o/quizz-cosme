import type { QuizSection } from "../../types";

export const permeabilidadSection: QuizSection = {
	id: "permeabilidad",
	title: "Permeabilidad cutanea",
	description: "Penetracion, absorcion y barreras.",
	questions: [
		{
			prompt: "¿Que significa LADME?",
			answer: "Es el proceso por el cual los excipientes liberan sus activos."
		},
		{
			prompt: "¿Cuales son las vias de penetracion de los cosmeticos?",
			answer: "Transepidermica y transapendicular."
		},
		{
			prompt: "¿De que factores depende la penetracion de un activo?",
			answer: "Concentracion del activo, grosor de la capa cornea, temperatura, liposolubilidad e hidratacion."
		},
		{
			prompt: "¿Como se denomina cuando un activo atraviesa la epidermis y llega al circuito sanguineo y linfatico?",
			answer: "Absorcion."
		}
	]
};
