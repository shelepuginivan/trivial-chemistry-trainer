import { forwardRef, InputHTMLAttributes } from 'react'

import styles from './input.module.sass'

type PropsType = InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, PropsType>((props, ref) => (
	<input className={styles.input} {...props} ref={ref}/>
))

export default Input
