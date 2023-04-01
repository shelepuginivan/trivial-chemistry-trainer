import { ButtonHTMLAttributes, FC } from 'react'
import SubmitButton from '../../ui/SubmitButton/SubmitButton'
import styles from './trainingMenu.module.sass'

type PropsType = {
	exerciseTitle: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'type'>

const TrainingMenu: FC<PropsType> = ({ exerciseTitle,  ...buttonProps}) => {
	return (
		<menu className={styles.menu}>
			<h3>{exerciseTitle}</h3>

			<section>
				<h4>&#128161;&nbsp;Управление:</h4>

				<ul>
					<li>Нажмите 'Enter', чтобы ответить и перейти к следующему вопросу</li>
					<li>Если не знаете ответ, нажмите на карточку с названием</li>
					<li>Нажмите 'esc', чтобы завершить упражнение</li>
				</ul>
			</section>

			<SubmitButton {...buttonProps}>Завершить</SubmitButton>
		</menu>
	)
}

export default TrainingMenu
