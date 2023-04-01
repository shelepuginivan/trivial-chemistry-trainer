import { FC } from 'react'
import ExerciseStats from '../components/ExerciseStats/ExerciseStats'
import { EXERCISES_NAMES_MAPPING } from '../utils/trivialNamesMaps'

const Stats: FC = () => {
	return (
		<main className='mainContainer'>
			<h1>Статистика</h1>

			{
				EXERCISES_NAMES_MAPPING.map((title, index) => (
					<ExerciseStats key={title} exerciseId={index}/>
				))
			}
		</main>
	)
}

export default Stats
