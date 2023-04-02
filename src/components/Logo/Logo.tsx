import { FC } from 'react'
import { Link } from 'react-router-dom'

import { HOME_ROUTE } from '../../utils/routes'

const Logo: FC = () => (
	<Link draggable={false} to={HOME_ROUTE}>
		<img height={40} draggable={false} src='/favicon.png' alt='logo' />
	</Link>
)

export default Logo
