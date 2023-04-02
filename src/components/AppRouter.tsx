import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Exercises from '../pages/Exercises'
import Home from '../pages/Home'
import Stats from '../pages/Stats'
import Training from '../pages/Training'
import {
	EXERCISES_ROUTE,
	HOME_ROUTE,
	STATS_ROUTE,
	TRAINING_ROUTE,
} from '../utils/routes'
import Header from './Header/Header'

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path={HOME_ROUTE} Component={Home} />
				<Route path={EXERCISES_ROUTE} Component={Exercises} />
				<Route
					path={`${TRAINING_ROUTE}/:exerciseId`}
					Component={Training}
				/>
				<Route path={STATS_ROUTE} Component={Stats} />
				<Route path='*' element={<Navigate to={HOME_ROUTE} />} />
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter
