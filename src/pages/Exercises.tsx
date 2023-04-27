import { FC } from 'react'

import ExerciseBlock from '../components/ExerciseBlock/ExerciseBlock'
import ExerciseCard from '../ui/ExerciseCard/ExerciseCard'
import { exerciseLink } from '../utils/exerciseLink'
import { Stats } from '../utils/Stats'
import { EXERCISES_NAMES_MAPPING } from '../utils/trivialNamesMaps'

const Exercises: FC = () => {
	const exerciseCardById = (id: number) => {
		return (
			<ExerciseCard
				key={id}
				linkToExercise={exerciseLink(id)}
				exerciseTitle={EXERCISES_NAMES_MAPPING[id]}
				previousResultInPercents={Stats.getLastResultOfExerciseById(id)}
			/>
		)
	}

	return (
		<main className='mainContainer'>
			<h1>Упражнения</h1>

			<ExerciseBlock blockName='Общее'>
				{[0, 1, 2].map((index) => exerciseCardById(index))}
			</ExerciseBlock>

			<ExerciseBlock blockName='Нерганическая химия'>
				{[3, 4, 5, 6, 7].map((index) => exerciseCardById(index))}
			</ExerciseBlock>

			<ExerciseBlock blockName='Органическая химия'>
				{[8, 9].map((index) => exerciseCardById(index))}
			</ExerciseBlock>
		</main>
	)
}

export default Exercises
