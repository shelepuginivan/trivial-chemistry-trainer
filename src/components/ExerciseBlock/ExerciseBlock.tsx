import { FC, PropsWithChildren } from 'react'
import styles from './exerciseBlock.module.sass'

type PropsType = { blockName: string } & PropsWithChildren

const ExerciseBlock: FC<PropsType> = ({ blockName, children }) => {
	return (
		<div className={styles.exerciseBlock}>
			<h2>{blockName}</h2>
			<menu>{children}</menu>
		</div>
	)
}

export default ExerciseBlock
