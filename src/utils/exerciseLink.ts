import { TRAINING_ROUTE } from './routes'

export const exerciseLink = (exerciseId: number): string =>
	`${TRAINING_ROUTE}/${exerciseId}`
