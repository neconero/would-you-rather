import React, { Component, Fragment} from 'react'
import {handleInitialData, authenticateUser}  from '../actions/shared'
import LeaderBoard from './LeaderBoard'
import Homepage from './Homepage'
import LoginPage from './LoginPage'
import NotFoundPage from './NotFoundPage'
import NewPoll from './NewPoll'
import Result from './Result'
import Poll from './Poll'


import {connect} from 'react-redux'
import {Route, Switch,BrowserRouter as Router} from 'react-router-dom'



class App extends Component{

  componentDidUpdate() {
    console.log(sessionStorage.getItem('authID'))
    sessionStorage.getItem('authID') && this.props.dispatch(authenticateUser
      (sessionStorage.getItem('authID')))
  }

  componentDidMount(){
    if(!sessionStorage.getItem('authID')){
      this.props.dispatch(handleInitialData())
    }else{
      this.props.dispatch(authenticateUser
        (sessionStorage.getItem('authID')))
    }  
  }

  componentWillUpdate(nextProps, nextState) {
      sessionStorage.setItem('authID', nextProps.authedUser)
}
  
  render() {
    const {authedUser} = this.props
    return (
                <div>
                  <Router>
                    {!authedUser ? (
                      <Switch>
                        <Route path='/' exact component={LoginPage} />
                      </Switch> 
                    ): (
                      <Fragment>
                        <Switch>
                          <Route  path='/home' component={Homepage}   />
                          <Route path='/add' component={NewPoll} />
                          <Route path='/question/:id' component={Poll} />
                          <Route path='/result/:id' component={Result} />
                          <Route path='/leaderboard' component={LeaderBoard} />
                          <Route component={NotFoundPage} />
                        </Switch>
                    </Fragment>
                    )}
                  </Router>
                </div>
    )
  }
}



function mapStateToProps({authedUser}){
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
