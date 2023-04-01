// TODO: Add more chemical stuff

const NON_ORGANIC_OXIDES_MAP = new Map<string, string>([
	['Веселящий газ', 'N2O'],
	['Бурый газ', 'NO2'],
])

const NON_ORGANIC_SALTS_MAP = new Map<string, string>([
	['Барит', 'BaSO4'],
	['Каменная соль', 'NaCl'],
])

const NON_ORGANIC_MAP = new Map([
	...NON_ORGANIC_OXIDES_MAP,
	...NON_ORGANIC_SALTS_MAP,
])

export const EXERCISES_MAPS = [
	NON_ORGANIC_MAP,
	NON_ORGANIC_OXIDES_MAP,
	NON_ORGANIC_SALTS_MAP
]

export const EXERCISES_NAMES_MAPPING = [
	'Все соединения',
	'Неорганика',
	'Органика',
	'Оксиды',
	'Кислоты',
	'Соли',
	'Щёлочи',
	// TODO: Add more exercises
]
