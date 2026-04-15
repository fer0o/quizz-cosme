import type { QuizSection } from "../../types";

export const seguridadSection: QuizSection = {
	id: "seguridad",
	title: "Seguridad e higiene",
	description: "Prevencion de riesgos y asepsia.",
	questions: [
		{
			prompt: "Menciona algunas medidas de seguridad en el spa o cabina para evitar accidentes.",
			answer: "Revisar el buen funcionamiento del aparato e instalacion electrica, no conectar varios aparatos en la misma clavija, no dejar cables sueltos ni danados, no manipular aparatos descalzo y no jalar enchufes."
		},
		{
			prompt: "¿Que es desinfeccion?",
			answer: "Proceso en el que se eliminan, destruyen o remueven agentes patogenos que pueden causar infeccion."
		},
		{
			prompt: "¿Que es esterilizacion?",
			answer: "Proceso mediante el cual se alcanza la muerte de todas las formas microbianas, incluyendo bacterias, hongos y esporas."
		},
		{
			prompt: "¿Que es antisepsia?",
			answer: "Proceso que, por su baja toxicidad, se utiliza para destruir microorganismos presentes sobre la superficie cutaneo-mucosa."
		},
		{
			prompt: "Agente quimico que mata formas en crecimiento de microorganismos, pero no necesariamente esporas:",
			answer: "Desinfectante."
		},
		{
			prompt: "Sustancia que impide el crecimiento de microorganismos, destruyendolos o inhibiendolos, y se aplica sobre superficies corporales:",
			answer: "Antiseptico."
		},
		{
			prompt: "Menciona cuidados o medidas de higiene que se deben vigilar en los cosmeticos.",
			answer: "Cerrar bien los productos, no tomarlos con dedos o palas sucias, mantenerlos en lugar fresco sin luz directa, limpiar frascos por fuera, conservar orden y limpieza del area y vigilar fechas de vencimiento."
		}
	]
};
