export const randomMapItem = <T, U>(map: Map<T, U>): [T, U] => {
	const randomIndex = Math.floor(Math.random() * map.size)
	const randomKey = Array.from(map.keys())[randomIndex]

	return [randomKey, map.get(randomKey) as U]
}
