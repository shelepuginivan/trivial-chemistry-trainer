import { FC } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { EXERCISES_ROUTE } from '../utils/routes'
import TrainingComponent from '../components/TrainingComponent/TrainingComponent'

const Training: FC = () => {
	const params = useParams<{exerciseId: string}>()
	const exerciseId = Number(params.exerciseId) - 1

	if (isNaN(exerciseId)) return <Navigate to={EXERCISES_ROUTE} />

	return <TrainingComponent exerciseId={exerciseId}/>
}

export default Training
