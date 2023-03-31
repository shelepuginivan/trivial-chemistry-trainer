export const timeInReadableFormat = (ms: number): string => {
	ms = Math.floor(ms / 1000)

	const seconds = ms % 60
	ms = Math.floor(ms / 60)

	const minutes = ms % 60
	ms = Math.floor(ms / 60)

	const hours	= ms

	const secondsString = seconds ? `${seconds} с` : ''
	const minutesString = minutes ? `${minutes} м` : ''
	const hoursString = hours ? `${hours} ч` : ''

	return `${hoursString} ${minutesString} ${secondsString}`
}
