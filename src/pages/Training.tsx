import { FC, useRef, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import TrainingResults from '../components/TrainingResults/TrainingResults'
import { EXERCISES_ROUTE } from '../utils/routes'
import { EXERCISES_MAPS } from '../utils/trivialNamesMaps'
import { randomMapItem } from '../utils/randomMapItem'

const Training: FC = () => {
	const params = useParams<{ exerciseId: string }>()
	const exerciseId = Number(params.exerciseId) - 1

	if (isNaN(exerciseId)) return <Navigate to={EXERCISES_ROUTE} />

	const trainingStartTime = useRef(Date.now())

	const currentExerciseMap = EXERCISES_MAPS[exerciseId]

	const [finished, setFinished] = useState<boolean>(false)
	const [correctAnswers, setCorrectAnswers] = useState<[string, string][]>([])
	const [incorrectAnswers, setIncorrectAnswers] =
		useState<[string, string][]>([])

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
				: setIncorrectAnswers)((prev) =>
				prev
					? [...prev, [question, receivedAnswer]]
					: [[question, receivedAnswer]]
			)

			const [newQuestion, newCorrectAnswer] =
				randomMapItem(currentExerciseMap)
			setQuestion(newQuestion)
			setCorrectAnswer(newCorrectAnswer)

			answerInput.current.value = ''
		}

		return (
			<main
				onKeyDown={(e) =>
					e.code === 'Escape' ? setFinished(true) : {}
				}
			>
				{question}
				<input
					autoFocus
					ref={answerInput}
					type='text'
					onKeyDown={(e) => (e.code === 'Enter' ? submit() : {})}
				/>
			</main>
		)
	}

	return (
		<>
			{finished ? (
				<TrainingResults
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

export default Training
