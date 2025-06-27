import { Suspense, memo, lazy } from 'react'
import { Routes as Switch, Route, } from 'react-router-dom'

import SuspenseFallback from '@/components/pages/SuspenseFallback'

const Home = lazy(() => import('@/components/pages/Home'))
const NotFound = lazy(() => import('@/components/pages/NotFound'))
const Portfolio = lazy(() => import('@/components/pages/Portfolio'))
const Experience = lazy(() => import('@/components/pages/Experience'))

const Routes = () => {
	return (
		<Switch>
			<Route
				path="/"
				element={
					<Suspense fallback={ <SuspenseFallback /> }>
						<Home />
					</Suspense>
				}
			/>
			<Route
				path="/experience"
				element={
					<Suspense fallback={ <SuspenseFallback /> }>
						<Experience />
					</Suspense>
				}
			/>
			<Route
				path="/portfolio"
				element={
					<Suspense fallback={ <SuspenseFallback /> }>
						<Portfolio />
					</Suspense>
				}
			/>
			<Route
				path="*"
				element={
					<Suspense fallback={ <SuspenseFallback /> }>
						<NotFound />
					</Suspense>
				}
			/>
		</Switch>
	)
}

export default memo(Routes)