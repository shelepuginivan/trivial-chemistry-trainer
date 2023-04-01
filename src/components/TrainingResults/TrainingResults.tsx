import { FC } from 'react'
import { timeInReadableFormat } from '../../utils/timeInReadableFormat'
import styles from './trainingResults.module.sass'

type PropsType = {
	exerciseMap: Map<string, string>
	correctAnswers: [string, string][]
	incorrectAnswers: [string, string][]
	trainingStartTime: number
}

const TrainingResults: FC<PropsType> = ({
	exerciseMap,
	correctAnswers,
	incorrectAnswers,
	trainingStartTime,
}) => {
	const trainingTime = Date.now() - trainingStartTime
	const trainingTimeInReadableFormat = timeInReadableFormat(trainingTime)

	const correctAnswersGiven = correctAnswers.length
	const totalAnswersGiven = correctAnswersGiven + incorrectAnswers.length
	const correctAnswersPercentage = (
		(100 * correctAnswersGiven) /
		totalAnswersGiven
	).toFixed(2)
	const averageAnswerSpeedPerMinutes = (
		(1000 * 60 * totalAnswersGiven) /
		trainingTime
	).toFixed(2)

	const mistakeTable =
		correctAnswersGiven !== totalAnswersGiven ? (
			<table>
				<thead>
					<tr>
						<td>Тривиальное название</td>
						<td>Ваш ответ</td>
						<td>Правильный ответ</td>
					</tr>
				</thead>
				<tbody>
					{incorrectAnswers.map((questionAnswerPair, index) => {
						const [question, answer] = questionAnswerPair
						const correctAnswer = exerciseMap.get(question) as string

						return (
							<tr key={index}>
								<td>{question}</td>
								<td className={styles.mistake}>{answer}</td>
								<td className={styles.correct}>{correctAnswer}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		) : null

	return (
		<main className='mainContainer'>
			<h1>Результаты</h1>
			<div className={styles.trainingStats}>
				<ul>
					<li>Время: {trainingTimeInReadableFormat}</li>
					<li>Всего ответов: {totalAnswersGiven}</li>
					<li>Верных ответов: {correctAnswersGiven}</li>
					<li>Процент выполнения: {correctAnswersPercentage} %</li>
					<li>
						Средняя скорость: {averageAnswerSpeedPerMinutes}{' '}
						<sup>отв.</sup>/<sub>мин</sub>
					</li>
				</ul>
				{mistakeTable}
			</div>
		</main>
	)
}

export default TrainingResults
