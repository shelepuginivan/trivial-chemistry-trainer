import { EXERCISES_NAMES_MAPPING } from './trivialNamesMaps'

type SingleExerciseStats = {
	id: number
	title: string
	stats: number[]
}

const isQuotaExceedError = (e: unknown): boolean => {
	return (
		e instanceof DOMException &&
		(e.name === 'QuotaExceededError' ||
			e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
	)
}

const validateExerciseStats = (obj: unknown): obj is SingleExerciseStats => {
	if (typeof obj !== 'object' || obj === null) return false

	const o = obj as Record<string, unknown>

	if (
		!obj.hasOwnProperty('id') ||
		!obj.hasOwnProperty('title') ||
		!obj.hasOwnProperty('stats')
	)
		return false

	if (typeof o.id !== 'number' || typeof o.title !== 'string') return false
	if (!Array.isArray(o.stats)) return false

	return o.stats.every((num) => typeof num === 'number')
}

export class Stats {
	private static _statStorageKey(id: number) {
		return `stats_${id}`
	}

	private static _handleQuotaExceedError() {
		const allStats = Array(10).map((_, index) => {
			const stats = localStorage.getItem(Stats._statStorageKey(index))

			return stats ? JSON.parse(stats) : new Array(10).fill(0)
		})

		localStorage.clear()

		allStats.forEach((stats, index) => {
			localStorage.setItem(
				Stats._statStorageKey(index),
				JSON.stringify(stats)
			)
		})
	}

	static getStatsOfExerciseById(id: number): number[] {
		try {
			const stats = localStorage.getItem(Stats._statStorageKey(id))

			if (!stats) return new Array(10).fill(0)

			const parsedStats = JSON.parse(stats)
			const len = parsedStats.length
			const lastItem = parsedStats[len - 1]

			if (typeof lastItem !== 'number' && isNaN(Number(lastItem)))
				return new Array(10).fill(0)

			if (len < 10) return new Array(10 - len).fill(0).concat(parsedStats)

			return parsedStats.slice(len - 10, len)
		} catch {
			return new Array(10).fill(0)
		}
	}

	static getLastResultOfExerciseById(id: number): number {
		const statsOfThisExercise = Stats.getStatsOfExerciseById(id)
		return statsOfThisExercise[statsOfThisExercise.length - 1] || 0
	}

	static addResultToExerciseStats(
		id: number,
		resultInPercents: number
	): void {
		try {
			const statsOfExerciseById = Stats.getStatsOfExerciseById(id)

			statsOfExerciseById.shift()
			statsOfExerciseById.push(resultInPercents)

			localStorage.setItem(
				Stats._statStorageKey(id),
				JSON.stringify(statsOfExerciseById)
			)
		} catch {}
	}

	static clear(): void {
		try {
			for (let i = 0; i < EXERCISES_NAMES_MAPPING.length; i++) {
				const key = Stats._statStorageKey(i)

				localStorage.setItem(key, JSON.stringify(new Array(10).fill(0)))
			}
		} catch {}
	}

	static exportStatsToJSON(): string {
		const allStats: SingleExerciseStats[] = EXERCISES_NAMES_MAPPING.map(
			(title, index) => {
				const statsOfCurrentExercise =
					Stats.getStatsOfExerciseById(index)

				return {
					id: index,
					title,
					stats: statsOfCurrentExercise,
				}
			}
		)

		return JSON.stringify(allStats)
	}

	static importStatsFromJSON(json: string): void {
		try {
			const parsedStats = JSON.parse(json)

			for (let i = 0; i < parsedStats.length; i++) {
				if (!validateExerciseStats(parsedStats[i])) return
			}

			parsedStats.forEach((exerciseStats: SingleExerciseStats) => {
				const key = Stats._statStorageKey(exerciseStats.id)

				localStorage.setItem(key, JSON.stringify(exerciseStats.stats))
			})
		} catch {}
	}
}
