import { FC } from 'react'
import ExerciseBlock from '../components/ExerciseBlock/ExerciseBlock'

const Exercises: FC = () => {
	return (
		<main>
			<h1>Упражнения</h1>

			<ExerciseBlock blockName='Общее'></ExerciseBlock>
			<ExerciseBlock blockName='Нерганическая химия'></ExerciseBlock>
			<ExerciseBlock blockName='Органическая химия'></ExerciseBlock>
		</main>
	)
}

export default Exercises
