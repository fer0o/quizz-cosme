# AGENTS

## Project reality (not README)
- This is a single-package Astro 6 static site (not a monorepo).
- `README.md` is the default Astro starter text and is stale; trust code/config instead.
- Required runtime is Node `>=22.12.0` (`package.json`).

## Commands you actually use
- Install: `npm install`
- Dev server: `npm run dev` (Astro dev server on port 4321 by default)
- Build/verification: `npm run build` (primary check; generates `dist/`)
- Preview build: `npm run preview`
- There are no repo-defined lint/test/typecheck scripts.
- `npm run astro -- check` is not ready out of the box; it prompts to install `@astrojs/check` and `typescript` interactively.

## Code map
- Routes are file-based under `src/pages`:
- `src/pages/index.astro`: main menu and section listing.
- `src/pages/seccion/[id].astro`: section quiz route; static paths are generated from `sections`.
- `src/pages/big-quiz.astro`: global quiz modes (practice/smart/intense/super-intense), timer logic, confetti, result summary.
- `src/pages/historial.astro`: analytics/history UI and reset actions.

## Data and persistence conventions
- Question bank lives in `src/data/categories/*/index.ts` and is aggregated in `src/data/categories/index.ts`.
- Adding a section requires both: (1) new category file export and (2) inclusion in `sections` array, or the route will not be generated.
- Persisted progress is centralized in `src/lib/progress.ts`; localStorage key is `dermasprint.progress.v1`.
- Keep storage compatibility in mind: Big Quiz normalizes legacy mode `"timer"` to `"intense"`.

## Editing gotchas
- Quiz logic is mostly inline inside `<script>` blocks in `.astro` pages, not split into standalone frontend modules.
- JSON embedded into `<script type="application/json">` is sanitized with `.replace(/</g, "\\u003c")`; preserve this pattern when adding payloads.
- UI copy is Spanish; keep new content consistent.
- Do not edit generated output directories: `dist/`, `.astro/`, `node_modules/`.
