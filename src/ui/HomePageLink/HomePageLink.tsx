import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import styles from './homePageLink.module.sass'

const HomePageLink: FC<LinkProps> = (props) =>
	<Link className={styles.link} {...props}/>

export default HomePageLink
