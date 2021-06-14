import React, { Component, Fragment } from 'react'
import { handleInitialData} from '../actions/shared'
import LeaderBoard from './LeaderBoard'
import LoginPage from './LoginPage'
import NotFoundPage from './NotFoundPage'
import PrivateRoute from '../routing/PrivateRoute'
import NewPoll from './NewPoll'
import Result from './Result'
import Poll from './Poll'
import Home from './Home'



import { connect } from 'react-redux'
import { Route, Switch,  BrowserRouter as Router } from 'react-router-dom'


class App extends Component {

  
  componentDidMount() {
    
    this.props.dispatch(handleInitialData())
  }

  

  render() {
    const { authedUser } = this.props
    console.log(authedUser)
    // const {state = {}} = this.props.location
    // const {error} = state
    return (
          <Router>
              <Fragment>
                
                <Switch>
                  <Route path='/' exact component={LoginPage} />
                  <PrivateRoute path='/home' component={Home}  />
                  <PrivateRoute path='/add' component={NewPoll} />
                  <PrivateRoute path='/question/:id' component={Poll}/>
                  <PrivateRoute path='/result/:id' component={Result} />
                  <PrivateRoute path='/leaderboard' component={LeaderBoard}/>
                  <Route path='*' component={NotFoundPage} />
                </Switch>
                  
              </Fragment>
          </Router>
    )
  }
}



function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
