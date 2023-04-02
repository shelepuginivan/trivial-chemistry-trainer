import { ButtonHTMLAttributes, FC } from 'react'

import styles from './cancelButton.module.sass'

const CancelButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) =>
	<button {...props} className={styles.button} />

export default CancelButton
