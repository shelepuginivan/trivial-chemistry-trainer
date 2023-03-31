export class Stats {
	static getAllStats(): number[][] {
		try {
			return JSON.parse(localStorage.getItem('stats') || '[]') as number[][]
		} catch {
			return []
		}
	}

	static getStatsOfExerciseById(id: number): number[] {
		const stats = this.getAllStats()
		return stats[id] || []
	}

	static getLastResultOfExerciseById(id: number): number {
		const statsOfThisExercise = this.getStatsOfExerciseById(id)
		return statsOfThisExercise[statsOfThisExercise.length - 1] || 0
	}

	static addResultToExerciseStats(id: number, resultInPercents: number): void {
		try {
			const stats = this.getAllStats()

			stats[id].push(resultInPercents)

			localStorage.setItem('stats', JSON.stringify(stats))
		} catch {}
	}

	static clearStats(): void {localStorage.removeItem('stats')}
}
