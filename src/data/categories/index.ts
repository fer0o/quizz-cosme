import { aguaSection } from "./agua";
import { altaFrecuenciaSection } from "./alta-frecuencia";
import { circulacionSection } from "./circulacion";
import { cuidadosSection } from "./cuidados";
import { diagnosticoSection } from "./diagnostico";
import { nerviosoSection } from "./nervioso";
import { permeabilidadSection } from "./permeabilidad";
import { phSection } from "./ph";
import { pielNerviosaSection } from "./piel-nerviosa";
import { seguridadSection } from "./seguridad";
import { tiposSection } from "./tipos";
import { vaporSection } from "./vapor";

import type { QuizSection } from "../types";

export const sections: QuizSection[] = [
	circulacionSection,
	aguaSection,
	permeabilidadSection,
	phSection,
	tiposSection,
	diagnosticoSection,
	cuidadosSection,
	seguridadSection,
	nerviosoSection,
	pielNerviosaSection,
	vaporSection,
	altaFrecuenciaSection
];
