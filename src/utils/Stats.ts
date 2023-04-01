import { EXERCISES_NAMES_MAPPING } from './trivialNamesMaps'

type SingleExerciseStats = {
	id: number
	title: string
	stats: number[]
}

const validateExerciseStats = (o: any): o is SingleExerciseStats => {
	const keys = Array.from(Object.keys(o))

	if (!keys.every((key) => ['id', 'title', 'stats'].includes(key)))
		return false

	if (
		!keys.includes('id') ||
		!keys.includes('title') ||
		!keys.includes('stats')
	)
		return false

	if (typeof o.id !== 'number' || typeof o.title !== 'string') return false

	return o.stats.reduce(
		(acc: boolean, curr: any) => acc && typeof curr === 'number',
		true
	)
}

export class Stats {
	private static _statStorageKey(id: number) {
		return `stats_${id}`
	}

	static getStatsOfExerciseById(id: number): number[] {
		try {
			const stats = localStorage.getItem(this._statStorageKey(id))

			if (!stats) return new Array(10).fill(0)

			const parsedStats = JSON.parse(stats)
			const len = parsedStats.length
			const lastItem = parsedStats[len - 1]

			if (typeof lastItem !== 'number' && isNaN(Number(lastItem)))
				return new Array(10).fill(0)

			if (len < 10)
				return new Array(10 - len).fill(0).concat(parsedStats)

			return parsedStats.slice(len - 10, len)
		} catch {
			return new Array(10).fill(0)
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

			statsOfExerciseById.shift()
			statsOfExerciseById.push(resultInPercents)

			localStorage.setItem(
				this._statStorageKey(id),
				JSON.stringify(statsOfExerciseById)
			)
		} catch {}
	}

	static clear(): void {
		try {
			for (let i = 0; i < EXERCISES_NAMES_MAPPING.length; i++) {
				const key = this._statStorageKey(i)

				localStorage.setItem(
					key,
					JSON.stringify(new Array(10).fill(0))
				)
			}
		} catch {}
	}

	static exportStatsToJSON(): string {
		const allStats: SingleExerciseStats[] = EXERCISES_NAMES_MAPPING.map(
			(title, index) => {
				const statsOfCurrentExercise =
					this.getStatsOfExerciseById(index)

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
		const parsedStats = JSON.parse(json)

		for (let i = 0; i < parsedStats.length; i++) {
			if (!validateExerciseStats(parsedStats[i])) return
		}

		parsedStats.forEach((exerciseStats: SingleExerciseStats) => {
			const key = this._statStorageKey(exerciseStats.id)

			localStorage.setItem(key, JSON.stringify(exerciseStats.stats))
		})
	}
}
