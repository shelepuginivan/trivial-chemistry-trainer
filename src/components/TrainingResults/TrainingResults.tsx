import { FC } from 'react'
import { timeInReadableFormat } from '../../utils/timeInReadableFormat'

type PropsType = {
	correctAnswers: [string, string][]
	incorrectAnswers: [string, string][]
	trainingStartTime: number
}

const TrainingResults: FC<PropsType> = ({
	correctAnswers,
	incorrectAnswers,
	trainingStartTime,
}) => {
	const trainingTime = Date.now() - trainingStartTime
	const trainingTimeInReadableFormat = timeInReadableFormat(trainingTime)

	return (
		<main>
			<h1>Результаты</h1>
			<ul>
				<li>Время: {trainingTimeInReadableFormat}</li>
				<li></li>
			</ul>
		</main>
	)
}

export default TrainingResults
