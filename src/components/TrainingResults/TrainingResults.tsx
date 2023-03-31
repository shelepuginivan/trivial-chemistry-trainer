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

	const correctAnswersGiven = correctAnswers.length
	const totalAnswersGiven = correctAnswersGiven + incorrectAnswers.length
	const correctAnswersPercentage = (100 * correctAnswersGiven / totalAnswersGiven).toFixed(2)
	const averageAnswerSpeedPerMinutes = (1000 * 60 * totalAnswersGiven / trainingTime).toFixed(2)

	return (
		<main>
			<h1>Результаты</h1>
			<ul>
				<li>Время: {trainingTimeInReadableFormat}</li>
				<li>Всего ответов: {totalAnswersGiven}</li>
				<li>Верных ответов: {correctAnswersGiven}</li>
				<li>Процент выполнения: {correctAnswersPercentage} %</li>
				<li>Средняя скорость ответа: {averageAnswerSpeedPerMinutes} <sup>отв.</sup>/<sub>мин</sub></li>
			</ul>
		</main>
	)
}

export default TrainingResults
