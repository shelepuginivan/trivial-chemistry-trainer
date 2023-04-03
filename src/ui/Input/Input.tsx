import { forwardRef, InputHTMLAttributes, KeyboardEvent } from 'react'

import styles from './input.module.sass'

type PropsType = {
	onEnter?: () => void
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onKeyDown'>

const Input = forwardRef<HTMLInputElement, PropsType>(
	({ onEnter, ...props }, ref) => {
		const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
			if (e.key === 'Enter' && onEnter) onEnter()
		}

		return (
			<div className={styles.inputWrapper}>
				<input ref={ref} onKeyDown={keyDownHandler} {...props} />
				<button onClick={onEnter}>&#10003;</button>
			</div>
		)
	}
)

export default Input
