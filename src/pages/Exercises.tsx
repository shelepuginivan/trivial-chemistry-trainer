import { FC } from 'react'
import ExerciseBlock from '../components/ExerciseBlock/ExerciseBlock'
import ExerciseCard from '../ui/ExerciseCard/ExerciseCard'
import { exerciseLink } from '../utils/exerciseLink'
import { Stats } from '../utils/Stats'
import { EXERCISES_NAMES_MAPPING } from '../utils/trivialNamesMaps'

const Exercises: FC = () => {
	return (
		<main className='mainContainer'>
			<h1>Упражнения</h1>

			<ExerciseBlock blockName='Общее'>
				{Array(3).fill(0).map((_, index) => (
					<ExerciseCard
						key={index}
						linkToExercise={exerciseLink(index)}
						exerciseTitle={EXERCISES_NAMES_MAPPING[index]}
						previousResultInPercents={Stats.getLastResultOfExerciseById(index)}
					/>
				))}
			</ExerciseBlock>

			<ExerciseBlock blockName='Нерганическая химия'></ExerciseBlock>

			<ExerciseBlock blockName='Органическая химия'></ExerciseBlock>
		</main>
	)
}

export default Exercises
