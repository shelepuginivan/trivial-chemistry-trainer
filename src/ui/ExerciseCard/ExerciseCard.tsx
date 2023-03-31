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
		>
			<strong>{exerciseTitle}</strong>
			<div className={styles.progressbarWrapper}>
				<span>{previousResultInPercents ?? 0} %</span>
				<progress max='100' value={previousResultInPercents ?? 0} />
			</div>
		</Link>
	)
}

export default ExerciseCard
