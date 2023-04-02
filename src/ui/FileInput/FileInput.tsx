import { FC, InputHTMLAttributes } from 'react'

import styles from './fileInput.module.sass'

type PropsType = {
	label: string
	id: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'type'>

const FileInput: FC<PropsType> = ({ id, label, ...inputProps }) => {
	return (
		<div className={styles.inputWrapper}>
			<label htmlFor={id}>{label}</label>
			<input type='file' id={id} {...inputProps} />
		</div>
	)
}

export default FileInput
