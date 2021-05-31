import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import {NotFoundPage, NavBar, NewPoll, LoginPage, HomePage} from '../components'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <NavBar />
            <Switch>
                <Route path='/' component={HomePage} />
                <Route path='/add' component={NewPoll} />
                <Route path='/leaderboard' component={LeaderBoard} />
                <Route path='/login' component={LoginPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter
