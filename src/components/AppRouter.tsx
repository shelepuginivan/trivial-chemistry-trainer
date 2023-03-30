import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import {
	HOME_ROUTE,
	SETTINGS_ROUTE,
	STATS_ROUTE,
	TRAINING_ROUTE,
} from '../utils/constants'
import Home from '../pages/Home'
import Training from '../pages/Training'
import Settings from '../pages/Settings'
import Stats from '../pages/Stats'

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={HOME_ROUTE} Component={Home} />
				<Route path={TRAINING_ROUTE} Component={Training} />
				<Route path={SETTINGS_ROUTE} Component={Settings} />
				<Route path={STATS_ROUTE} Component={Stats} />
				<Route path='*' element={<Navigate to={HOME_ROUTE} />} />
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter
