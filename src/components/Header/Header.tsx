import { FC } from 'react'
import { Link } from 'react-router-dom'

import { EXERCISES_ROUTE, STATS_ROUTE } from '../../utils/routes'
import Logo from '../Logo/Logo'
import styles from './header.module.sass'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<nav>
				<Link to={EXERCISES_ROUTE}>Упражнения</Link>
				<Link to={STATS_ROUTE}>Статистика</Link>
			</nav>
		</header>
	)
}

export default Header
