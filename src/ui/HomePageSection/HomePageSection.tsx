import { FC, PropsWithChildren } from 'react'
import styles from './homePageSection.module.sass'

const HomePageSection: FC<PropsWithChildren> = ({ children }) =>
	<section className={styles.section}>{children}</section>

export default HomePageSection
