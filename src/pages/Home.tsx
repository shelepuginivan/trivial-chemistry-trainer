import { FC } from 'react'
import HomePageSection from '../ui/HomePageSection/HomePageSection'
import HomePageLink from '../ui/HomePageLink/HomePageLink'
import { EXERCISES_ROUTE, STATS_ROUTE } from '../utils/routes'

const Home: FC = () => {
	return (
		<main className='mainContainer'>
			<h1>Тренажёр тривиальных названий</h1>
			<HomePageSection>
				<h2>Учить тривиальные названия - легко!</h2>
				<p>
					Тренируйте свои знания тривиальных названий химических
					элементов, решая различные задания.
				</p>
				<p>
					Готовьтесь к заданиям государственных экзаменов,
					олимпиадам и развивайте свою химическую грамотность.
				</p>
				<HomePageLink to={EXERCISES_ROUTE}>Начать обучение!</HomePageLink>
			</HomePageSection>
			<HomePageSection>
				<h2>Статистика</h2>
				<p>
					Ваша статистика автоматически сохраняется в браузере.
					Следите за своим прогрессом и используйте эти данные
					для тренировки западающих названий.
				</p>
				<HomePageLink to={STATS_ROUTE}>Показать статистику</HomePageLink>
			</HomePageSection>
		</main>
	)
}

export default Home
