import { FC, useRef, useState } from 'react'

import Input from '../../ui/Input/Input'
import QuestionCard from '../../ui/QuestionCard/QuestionCard'
import { randomMapItem } from '../../utils/randomMapItem'
import { Stats } from '../../utils/Stats'
import { EXERCISES_MAPS, EXERCISES_NAMES_MAPPING } from '../../utils/trivialNamesMaps'
import TrainingMenu from '../TrainingMenu/TrainingMenu'
import TrainingResults from '../TrainingResults/TrainingResults'
import styles from './trainingComponent.module.sass'

const TrainingComponent: FC<{ exerciseId: number }> = ({ exerciseId }) => {
	const trainingStartTime = useRef(Date.now())

	const currentExerciseMap = EXERCISES_MAPS[exerciseId]

	const [finished, setFinished] = useState<boolean>(false)
	const [correctAnswers, setCorrectAnswers] = useState<[string, string][]>([])
	const [incorrectAnswers, setIncorrectAnswers] = useState<
		[string, string][]
	>([])

	const OngoingTraining: FC = () => {
		const [initialQuestion, initialCorrectAnswer] =
			randomMapItem(currentExerciseMap)

		const answerInput = useRef<HTMLInputElement>(null)

		const [question, setQuestion] = useState<string>(initialQuestion)
		const [correctAnswer, setCorrectAnswer] =
			useState<string>(initialCorrectAnswer)

		const submitAnswer = () => {
			const receivedAnswer = answerInput.current?.value

			if (!receivedAnswer) return
			;(receivedAnswer === correctAnswer
				? setCorrectAnswers
				: setIncorrectAnswers)((prev) => [
				...prev,
				[question, receivedAnswer],
			])

			const [newQuestion, newCorrectAnswer] =
				randomMapItem(currentExerciseMap)
			setQuestion(newQuestion)
			setCorrectAnswer(newCorrectAnswer)

			answerInput.current.value = ''
		}

		const finishTraining = () => {
			setFinished(true)

			const correctAnswersPercentage = Math.round(
				(100 * correctAnswers.length) / (correctAnswers.length +
					incorrectAnswers.length)
			)

			Stats.addResultToExerciseStats(exerciseId, correctAnswersPercentage)
		}

		return (
			<main className={styles.trainingContainer}>
				<TrainingMenu
					exerciseTitle={EXERCISES_NAMES_MAPPING[exerciseId]}
					onClick={finishTraining}
				/>
				<div
					className={styles.ongoingTraining}
					onKeyDown={(e) =>
						e.code === 'Escape' ? finishTraining() : {}
					}
				>
					<QuestionCard question={question} answer={correctAnswer} />
					<Input
						autoFocus
						ref={answerInput}
						type='text'
						onKeyDown={(e) =>
							e.code === 'Enter' ? submitAnswer() : {}
						}
					/>
				</div>
			</main>
		)
	}

	return (
		<>
			{finished ? (
				<TrainingResults
					exerciseMap={currentExerciseMap}
					correctAnswers={correctAnswers}
					incorrectAnswers={incorrectAnswers}
					trainingStartTime={trainingStartTime.current}
				/>
			) : (
				<OngoingTraining />
			)}
		</>
	)
}
export default TrainingComponent
