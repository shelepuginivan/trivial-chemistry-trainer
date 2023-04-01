import { forwardRef, PropsWithChildren } from 'react'
import styles from './exportLink.module.sass'

const ExportLink = forwardRef<HTMLAnchorElement, PropsWithChildren>(
	({ children }, ref) => {
		return <a className={styles.a} target='_blank' ref={ref}>{children}</a>
	}
)

export default ExportLink
