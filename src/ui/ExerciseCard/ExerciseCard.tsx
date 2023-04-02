import { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './exerciseCard.module.sass'

type PropsType = {
	linkToExercise: string
	exerciseTitle: string
	previousResultInPercents?: number
}

const ExerciseCard: FC<PropsType> = ({
	linkToExercise,
	exerciseTitle,
	previousResultInPercents,
}) => {
	return (
		<Link
			className={styles.exerciseCard}
			to={linkToExercise}
			draggable={false}
			data-completed={previousResultInPercents === 100}
		>
			<h3>{exerciseTitle}</h3>
			<div className={styles.progressbarWrapper}>
				<span>{previousResultInPercents ?? 0} %</span>
				<meter min='0' max='100' value={previousResultInPercents ?? 0} />
			</div>
		</Link>
	)
}

export default ExerciseCard
