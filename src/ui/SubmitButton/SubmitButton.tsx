import { ButtonHTMLAttributes, FC } from 'react'

import styles from './submitButton.module.sass'

const SubmitButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) =>
	<button {...props} className={styles.button} />

export default SubmitButton
