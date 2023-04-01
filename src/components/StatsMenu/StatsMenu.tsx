import { FC } from 'react'
import CancelButton from '../../ui/CancelButton/CancelButton'
import { Stats } from '../../utils/Stats'
import styles from './statsMenu.module.sass'

const StatsMenu: FC = () => {
	return (
		<section className={styles.menu}>
			<blockquote>
				<p>
					Статистика сохранятся в браузере.
					Данные о результатах тренировок
					не отправляются на сторонние сервера.
				</p>
				<p>
					Вы можете обнулить статистику, а также экспортировать
					или импортировать её (в формате .csv)
				</p>
			</blockquote>

			<menu className={styles.actions}>
				<CancelButton onClick={() => Stats.clear()}>Обнулить статистику</CancelButton>
			</menu>
		</section>
	)
}

export default StatsMenu
