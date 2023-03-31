import { FC, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EXERCISES_MAPS } from '../../utils/trivialNamesMaps'
import { randomMapItem } from '../../utils/randomMapItem'
import { EXERCISES_ROUTE } from '../../utils/routes'
import TrainingResults from '../TrainingResults/TrainingResults'
import Input from '../../ui/Input/Input'
import QuestionCard from '../../ui/QuestionCard/QuestionCard'
import CancelButton from '../../ui/CancelButton/CancelButton'
import SubmitButton from '../../ui/SubmitButton/SubmitButton'
import styles from './trainingComponent.module.sass'

const TrainingComponent: FC<{ exerciseId: number }> = ({ exerciseId }) => {
	const navigate = useNavigate()

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

		const submit = () => {
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

		return (
			<main
				className={styles.ongoingTraining}
				onKeyDown={(e) =>
					e.code === 'Escape' ? setFinished(true) : {}
				}
			>
				<QuestionCard question={question} answer={correctAnswer} />
				<Input
					autoFocus
					ref={answerInput}
					type='text'
					onKeyDown={(e) => (e.code === 'Enter' ? submit() : {})}
				/>
				<menu>
					<CancelButton onClick={() => navigate(EXERCISES_ROUTE)}>
						Выйти
					</CancelButton>

					<SubmitButton onClick={() => setFinished(true)}>
						Завершить
					</SubmitButton>
				</menu>
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
