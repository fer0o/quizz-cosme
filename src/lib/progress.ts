export const APP_STORAGE_NAME = "DermaSprint Progress";
export const STORAGE_KEY = "dermasprint.progress.v1";
const MAX_HISTORY = 20;
const MAX_BIG_QUIZ_REVIEWS = 5;

export type AttemptSummary = {
	playedAt: string;
	score: number;
	total: number;
	percentage: number;
	passed?: boolean;
	mode?: "practice" | "intense" | "smart";
};

export type SectionProgress = {
	currentQuestion: number;
	score: number;
	total: number;
	completed: boolean;
	lastPlayedAt: string;
	bestScore: number;
	bestPercentage: number;
	attempts: AttemptSummary[];
};

export type BigQuizAttemptDetail = {
	prompt: string;
	selectedAnswer: string;
	correctAnswer: string;
	isCorrect: boolean;
};

export type BigQuizSessionQuestion = {
	prompt: string;
	answer: string;
	options: string[];
	correctIndex: number;
};

export type BigQuizSession = {
	mode: "practice" | "intense" | "smart";
	timeLimitSeconds: number;
	remainingSeconds: number;
	questions: BigQuizSessionQuestion[];
	currentQuestion: number;
	score: number;
	attempts: BigQuizAttemptDetail[];
	startedAt: string;
	updatedAt: string;
};

export type BigQuizReview = {
	playedAt: string;
	mode: "practice" | "intense" | "smart";
	score: number;
	total: number;
	percentage: number;
	attempts: BigQuizAttemptDetail[];
};

export type BigQuizProgress = {
	session: BigQuizSession | null;
	lastPlayedAt: string;
	bestScore: number;
	bestPercentage: number;
	attempts: AttemptSummary[];
	reviews: BigQuizReview[];
};

export type ProgressStore = {
	version: 1;
	appName: string;
	updatedAt: string;
	sections: Record<string, SectionProgress>;
	bigQuiz: BigQuizProgress;
};

function calculatePercentage(score: number, total: number): number {
	if (total === 0) return 0;
	return Math.round((score / total) * 100);
}

function nowIso(): string {
	return new Date().toISOString();
}

function defaultBigQuiz(): BigQuizProgress {
	return {
		session: null,
		lastPlayedAt: "",
		bestScore: 0,
		bestPercentage: 0,
		attempts: [],
		reviews: []
	};
}

function defaultStore(): ProgressStore {
	return {
		version: 1,
		appName: APP_STORAGE_NAME,
		updatedAt: nowIso(),
		sections: {},
		bigQuiz: defaultBigQuiz()
	};
}

function defaultSection(total = 0): SectionProgress {
	return {
		currentQuestion: 0,
		score: 0,
		total,
		completed: false,
		lastPlayedAt: "",
		bestScore: 0,
		bestPercentage: 0,
		attempts: []
	};
}

function loadStore(): ProgressStore {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return defaultStore();
		const parsed = JSON.parse(raw) as Partial<ProgressStore>;
		return {
			version: 1,
			appName: APP_STORAGE_NAME,
			updatedAt: parsed.updatedAt ?? nowIso(),
			sections: parsed.sections ?? {},
			bigQuiz: {
				...defaultBigQuiz(),
				...(parsed.bigQuiz ?? {})
			}
		};
	} catch {
		return defaultStore();
	}
}

function saveStore(store: ProgressStore): void {
	try {
		store.updatedAt = nowIso();
		localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
	} catch {
		// Ignore storage errors.
	}
}

export function getStorageUsageBytes(): number {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return 0;
		return new Blob([raw]).size;
	} catch {
		return 0;
	}
}

export function getProgressSnapshot(): ProgressStore {
	return loadStore();
}

export function clearProgressStore(): void {
	try {
		localStorage.removeItem(STORAGE_KEY);
	} catch {
		// Ignore storage errors.
	}
}

export function getSectionProgress(sectionId: string): SectionProgress | null {
	const store = loadStore();
	return store.sections[sectionId] ?? null;
}

export function saveSectionProgress(
	sectionId: string,
	payload: { currentQuestion: number; score: number; total: number; completed: boolean }
): void {
	const store = loadStore();
	const current = store.sections[sectionId] ?? defaultSection(payload.total);
	store.sections[sectionId] = {
		...current,
		currentQuestion: payload.currentQuestion,
		score: payload.score,
		total: payload.total,
		completed: payload.completed,
		lastPlayedAt: nowIso()
	};
	saveStore(store);
}

export function resetSectionProgress(sectionId: string, total: number): void {
	const store = loadStore();
	const current = store.sections[sectionId] ?? defaultSection(total);
	store.sections[sectionId] = {
		...current,
		currentQuestion: 0,
		score: 0,
		total,
		completed: false,
		lastPlayedAt: nowIso()
	};
	saveStore(store);
}

export function recordSectionAttempt(
	sectionId: string,
	payload: { score: number; total: number }
): void {
	const store = loadStore();
	const current = store.sections[sectionId] ?? defaultSection(payload.total);
	const percentage = calculatePercentage(payload.score, payload.total);
	const attempt: AttemptSummary = {
		playedAt: nowIso(),
		score: payload.score,
		total: payload.total,
		percentage
	};
	store.sections[sectionId] = {
		...current,
		total: payload.total,
		currentQuestion: payload.total,
		score: payload.score,
		completed: true,
		bestScore: Math.max(current.bestScore, payload.score),
		bestPercentage: Math.max(current.bestPercentage, percentage),
		lastPlayedAt: attempt.playedAt,
		attempts: [attempt, ...current.attempts].slice(0, MAX_HISTORY)
	};
	saveStore(store);
}

export function getBigQuizProgress(): BigQuizProgress {
	const store = loadStore();
	return store.bigQuiz ?? defaultBigQuiz();
}

export function saveBigQuizSession(session: BigQuizSession | null): void {
	const store = loadStore();
	store.bigQuiz = {
		...(store.bigQuiz ?? defaultBigQuiz()),
		session,
		lastPlayedAt: nowIso()
	};
	saveStore(store);
}

export function recordBigQuizAttempt(payload: {
	score: number;
	total: number;
	passed: boolean;
	mode: "practice" | "intense" | "smart";
	attempts?: BigQuizAttemptDetail[];
}): void {
	const store = loadStore();
	const current = store.bigQuiz ?? defaultBigQuiz();
	const percentage = calculatePercentage(payload.score, payload.total);
	const attempt: AttemptSummary = {
		playedAt: nowIso(),
		score: payload.score,
		total: payload.total,
		percentage,
		passed: payload.passed,
		mode: payload.mode
	};

	const nextReviews = [...(current.reviews ?? [])];
	if (payload.attempts && payload.attempts.length > 0) {
		nextReviews.unshift({
			playedAt: attempt.playedAt,
			mode: payload.mode,
			score: payload.score,
			total: payload.total,
			percentage,
			attempts: payload.attempts
		});
	}

	store.bigQuiz = {
		...current,
		session: null,
		lastPlayedAt: attempt.playedAt,
		bestScore: Math.max(current.bestScore, payload.score),
		bestPercentage: Math.max(current.bestPercentage, percentage),
		attempts: [attempt, ...current.attempts].slice(0, MAX_HISTORY),
		reviews: nextReviews.slice(0, MAX_BIG_QUIZ_REVIEWS)
	};
	saveStore(store);
}
