import { FC } from 'react'
import { Stats } from '../../utils/Stats'
import { EXERCISES_NAMES_MAPPING } from '../../utils/trivialNamesMaps'
import styles from './exerciseStats.module.sass'

const ExerciseStats: FC<{ exerciseId: number }> = ({ exerciseId }) => {
	const exerciseStats = Stats.getStatsOfExerciseById(exerciseId)
	const exerciseTitle = EXERCISES_NAMES_MAPPING[exerciseId]

	const resultType = (percent: number): 'good' | 'bad' | 'middle' => {
		if (percent <= 20) return 'bad'
		if (percent >= 90) return 'good'
		return 'middle'
	}

	return (
		<div className={styles.statsContainer}>
			<h3>{exerciseTitle}</h3>

			<div className={styles.statsHistogram}>
				{exerciseStats.map((percent, index) => (
					<div className={styles.bar} key={index}>
						<div
							data-result={resultType(percent)}
							className={styles.value}
							style={{ height: `${percent}%` }}
						></div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ExerciseStats
