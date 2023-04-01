import { FC } from 'react'
import { Stats } from '../../utils/Stats'
import { EXERCISES_NAMES_MAPPING } from '../../utils/trivialNamesMaps'
import styles from './exerciseStats.module.sass'

const ExerciseStats: FC<{ exerciseId: number }> = ({ exerciseId }) => {
	const exerciseStats = Stats.getStatsOfExerciseById(exerciseId)
	const exerciseTitle = EXERCISES_NAMES_MAPPING[exerciseId]

	const getColorFromStat = (percent: number): string => {
		const hue = (120 * percent / 100).toString()

		return `hsl(${hue}, 100%, 50%)`
	}

	return (
		<div className={styles.statsContainer}>
			<h3>{exerciseTitle}</h3>

			<div className={styles.statsHistogram}>
				{exerciseStats.map((percent, index) => (
					<div className={styles.bar} key={index}>
						<div
							className={styles.value}
							style={{
								height: `${percent}%`,
								backgroundColor: getColorFromStat(percent)
							}}
						></div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ExerciseStats
