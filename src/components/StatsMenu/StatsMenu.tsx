import { ChangeEvent, FC, useEffect, useRef } from 'react'
import CancelButton from '../../ui/CancelButton/CancelButton'
import { Stats } from '../../utils/Stats'
import styles from './statsMenu.module.sass'
import FileInput from '../../ui/FileInput/FileInput'
import ExportLink from '../../ui/ExportLink/ExportLink'

const StatsMenu: FC = () => {
	const downloadLink = useRef<HTMLAnchorElement>(null)

	useEffect(() => {
		const statsJSON = Stats.exportStatsToJSON()

		const statsFile = new Blob([statsJSON], {
			type: 'application/json',
		})

		if (!downloadLink.current) return

		downloadLink.current.href = URL.createObjectURL(statsFile)
		downloadLink.current.download = 'stats.json'
	}, [])

	const importStatsFromJSON = async (e: ChangeEvent<HTMLInputElement>) => {
		const fileList = (e.target as HTMLInputElement).files

		if (!fileList) return

		const fileReader = new FileReader()

		fileReader.onload = () =>
			Stats.importStatsFromJSON(fileReader.result as string)

		fileReader.readAsText(fileList[0])
	}

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
				<CancelButton onClick={() => Stats.clear()}>
					Обнулить статистику
				</CancelButton>
				<ExportLink ref={downloadLink}>
					Экспортировать статистику
				</ExportLink>

				<FileInput
					label='Импортировать статистику'
					id='file-input'
					accept='.json'
					onChange={importStatsFromJSON}
				/>
			</menu>
		</section>
	)
}

export default StatsMenu
