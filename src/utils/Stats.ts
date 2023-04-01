import { EXERCISES_NAMES_MAPPING } from './trivialNamesMaps'

export class Stats {
	private static _statStorageKey(id: number) {
		return `stats_${id}`
	}

	static initializeStorage(): void {
		try {
			for (let i = 1; i <= EXERCISES_NAMES_MAPPING.length; i++) {
				const key = this._statStorageKey(i)
				const statsOfExerciseById = localStorage.getItem(key)

				if (!statsOfExerciseById) {
					localStorage.setItem(key, '[]')
				}
			}
		} catch {}
	}

	static getAllStats(): number[][] {
		try {
			const allStats = []

			for (let i = 1; i <= EXERCISES_NAMES_MAPPING.length; i++) {
				const key = this._statStorageKey(i)
				const statsOfExerciseById = localStorage.getItem(key)

				if (!statsOfExerciseById) {
					allStats.push([])
					continue
				}

				allStats.push(JSON.parse(statsOfExerciseById))
			}

			return allStats
		} catch {
			return []
		}
	}

	static getStatsOfExerciseById(id: number): number[] {
		try {
			const stats = localStorage.getItem(this._statStorageKey(id))

			if (!stats) return []

			const parsedStats = JSON.parse(stats)
			const lastItem = parsedStats[parsedStats.length - 1]

			if (typeof lastItem !== 'number' && isNaN(Number(lastItem)))
				return []

			return parsedStats
		} catch {
			return []
		}
	}

	static getLastResultOfExerciseById(id: number): number {
		const statsOfThisExercise = this.getStatsOfExerciseById(id)
		return statsOfThisExercise[statsOfThisExercise.length - 1] || 0
	}

	static addResultToExerciseStats(
		id: number,
		resultInPercents: number
	): void {
		try {
			const statsOfExerciseById = this.getStatsOfExerciseById(id)

			statsOfExerciseById.push(resultInPercents)

			localStorage.setItem(
				this._statStorageKey(id),
				JSON.stringify(statsOfExerciseById)
			)
		} catch {}
	}

	static clearStats(): void {
		try {
			for (let i = 1; i <= EXERCISES_NAMES_MAPPING.length; i++) {
				const key = this._statStorageKey(i)

				localStorage.setItem(key, '[]')
			}
		} catch {}
	}
}
