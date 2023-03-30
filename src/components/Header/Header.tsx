import { FC } from 'react'
import { Link } from 'react-router-dom'
import { EXERCISES_ROUTE, HOME_ROUTE, SETTINGS_ROUTE, STATS_ROUTE } from '../../utils/constants'

import styles from './header.module.sass'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Link className={styles.mainLink} to={HOME_ROUTE}>Тренажёр тривиальных названий</Link>
			<nav>
				<Link to={EXERCISES_ROUTE}>Упражнения</Link>
				<Link to={STATS_ROUTE}>Статистика</Link>
				<Link to={SETTINGS_ROUTE}>Настройки</Link>
			</nav>
		</header>
	)
}

export default Header
