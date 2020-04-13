import { Switch, Route } from 'react-router-dom'
import React from 'react'
import GlobalFeed from '../pages/globalFeed/index'
import Article from '../pages/article/index'
import Auth from '../pages/Auth/index'

export default () => {
	return (
		<Switch>
			<Route path='/' component={GlobalFeed} exact />
			<Route path='/login' component={Auth} />
			<Route path='/register' component={Auth} />
			<Route path='/articles/:slug' component={Article} />
		</Switch>
	)
}