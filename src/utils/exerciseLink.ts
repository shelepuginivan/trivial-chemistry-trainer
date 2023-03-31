import { TRAINING_ROUTE } from './constants'

export const exerciseLink = (exerciseId: number): string =>
	`${TRAINING_ROUTE}/${exerciseId}`
