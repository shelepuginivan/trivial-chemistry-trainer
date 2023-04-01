// TODO: Add more chemical stuff

const NON_ORGANIC_OXIDES_MAP = new Map<string, string>([
	['Асбест', '3MgO * 2SiO2 * 2H2O'],
	['Белая глина', 'Al2O3 * 2SiO2 * 2H2O'],
	['Бурый газ', 'NO2'],
	['Веселящий газ', 'N2O'],
	['Водяной газ', 'CO + H2'],
	['Глинозём', 'Al2O3'],
	['Гремучий газ', '2H2 + O2'],
	['Железная окалина', 'Fe3O4'],
	['Жжёная известь', 'CaO'],
	['Каолин', 'Al2O3 * 2SiO2 * 2H2O'],
	['Кварц', 'SiO2'],
	['Корунд', 'Al2O3'],
	['Кремнезём', 'SiO2'],
	['Лисий хвости', 'NO2'],
	['Магнезия жжёная', 'MgO'],
	['Магнитный железняк', 'Fe3O4'],
	['Негашёная известь', 'CaO'],
	['Натр', 'Na2O'],
	['Пиролюзит', 'MgO2'],
	['Сажа белая', 'SiO2'],
	['Сухой лёд', 'CO2'],
	['Тальк', '3MgO * 4SiO2 * 2H2O'],
	['Угарный газ', 'CO'],
])

const NON_ORGANIC_ACIDS_MAP = new Map<string, string>([
	['Купоросное масло', 'H2SO4'],
	['Плавиковая кислота', 'HF'],
	['Роданистая кислота', 'HCNS'],
	['Синильная кислота', 'HCN'],
	['Соляная кислота', 'HCl'],
	['Царская водка', 'HNO3 * 3HCl'],
])

const NON_ORGANIC_SALTS_MAP = new Map<string, string>([
	['Амофоска', '(NH4)3PO4 и KNO3'],
	['Алебастр', '2CaSO4 * H2O'],
	['Алюмокалиевые квасцы', 'Al2(SO4)3 * K2SO4 * 24H2O'],
	['Аммиачная селитра', 'NH4NO3'],
	['Аммофос', 'NH4H2PO4 и (NH4)2HPO4'],
	['Ангидрит', 'CaSO4'],
	['Английская соль', 'MgSO4 * 7H2O'],
	['Белильная известь (раствор)', 'CaOCl2'],
	['Боксит', 'Al2O3 * nH2O'],
	['Бура', 'Na2B4O7 * 10H2O'],
	['Барит', 'BaSO4'],
	['Гипс', 'CaSO4 * 2H2O'],
	['Глауберова соль', 'Na2SO4 * 10H2O'],
	['Диамофос', '(NH4)2HPO4'],
	['Доломит', 'CaCO3 * MgCO3'],
	['Жавелевая вода', 'NaClO'],
	['Железные квасцы', 'K[Fe(SO4)2] * 12H2O'],
	['Железный купорос', 'FeSO4 * 7H2O'],
	['Жёлтая кровяная соль', 'K4[Fe(CN)6]'],
	['Жидкое стекло', 'Na2SiO3'],
	['Известняк', 'CaCO3'],
	['Индийская селитра', 'KNO3'],
	['Калиевая селитра', 'KNO3'],
	['Каломель', 'Hg2Cl2'],
	['Кальциевая селитра', 'Ca(NO3)2'],
	['Кальцит', 'CaCO3'],
	['Каменная соль', 'NaCl'],
	['Киноварь', 'HgS'],
	['Красная кровяная соль', 'K3[Fe(CN)6]'],
	['Криолит', 'Na3AlF6'],
	['Кристаллическая сода', 'Na2CO3 * 10H20'],
	['Ляпис', 'AgNO3'],
	['Магнезит', 'MgCO3'],
	['Малахит', '(CuOH)2CO3'],
	['Марганцовка', 'KMnO4'],
	['Медный колчедан', 'CuFeS2'],
	['Медный купорос', 'CuSO4 * 5H2O'],
	['Мел', 'CaCO3'],
	['Мрамор', 'CaCO3'],
	['Нашатырь', 'NH4Cl'],
	['Питьевая сода', 'NaHCO3'],
	['Поташ', 'K2CO3'],
	['Преципитат', 'CaHPO4 * 2H2O'],
	['Сильвинит', 'NaCl * KCl'],
	['Соль Мора', '(NH4)2Fe(SO4)2 * 6H2O'],
	['Сулема', 'HgCl2'],
	['Флюорит', 'CaF2'],
	['Фосфорит', 'Ca3(PO4)2'],
	['Хромовые квасцы', 'Cr2(SO4)3 * K2SO4 * 24H2O'],
	['Хромпик', 'K2Cr2O7'],
	['Цинковая обманка', 'ZnS'],
	['Цинковый купорос', 'ZnSO4 * 7H2O'],
	['Челийская селитра', 'NaNO3'],
])

const ALKALIES = new Map<string, string>([
	['Баритовая вода', 'Ba(OH)2'],
	['Гашёная известь', 'Ca(OH)2'],
	['Едкий барит', 'Ba(OH)2 * 8H2O'],
	['Едкий натр', 'NaOH'],
	['Едкий кали', 'KOH'],
	['Известковая вода', 'Ca(OH)2'],
	['Известковое молоко', 'Ca(OH)2'],
	['Каустик', 'NaOH'],
])

const OTHER_NON_ORGANIC = new Map<string, string>([
	['Йодоформ', 'CHI3'],
	['Железный колчедан', 'FeS2'],
	['Карбамид', 'CO(NH2)2'],
	['Карборунд', 'SiC'],
	['Пирит', 'FeS2'],
	['Сажа', 'C'],
	['Фосген', 'COCl2'],
])

const NON_ORGANIC_MAP = new Map<string, string>([
	...NON_ORGANIC_OXIDES_MAP,
	...NON_ORGANIC_SALTS_MAP,
])

const ORGANIC_MAP = new Map<string, string>([])

const ALL_CHEMICALS_MAP = new Map<string, string>([
	...NON_ORGANIC_MAP,
	...ORGANIC_MAP
])

export const EXERCISES_MAPS = [
	ALL_CHEMICALS_MAP,
	NON_ORGANIC_MAP,
	ORGANIC_MAP,
	NON_ORGANIC_OXIDES_MAP,
	NON_ORGANIC_ACIDS_MAP,
	NON_ORGANIC_SALTS_MAP,
	ALKALIES,
	OTHER_NON_ORGANIC
]

export const EXERCISES_NAMES_MAPPING = [
	'Все соединения',
	'Неорганика',
	'Органика',
	'Оксиды',
	'Кислоты',
	'Соли',
	'Щёлочи',
	'Другое'
	// TODO: Add more exercises
]
