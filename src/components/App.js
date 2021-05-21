import React, { Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {handleInitialData}  from '../actions/shared'
import HomePage from './HomePage'
import LeaderBoard from './LeaderBoard'
import NavBar from './NavBar'
import LoginPage from './LoginPage'
import NotFoundPage from './NotFoundPage'
import NewPoll from './NewPoll'
import {Route, Switch,BrowserRouter as Router} from 'react-router-dom'



class App extends Component{
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {authedUser} = this.props
    return (
      <Router>
        <div className="App">
          {authedUser == null 
            ? (
              <Route render={() => (
                  <LoginPage />
              )} />
            )
            : (
              <Fragment>
                <NavBar />
                <div>
                  <Switch>
                    <Route  path='/' component={HomePage} exact={true} />
                    <Route path='/add' component={NewPoll} />
                    <Route path='/leaderboard' component={LeaderBoard} />
                    <Route component={NotFoundPage} />
                  </Switch>
                </div>
              </Fragment>
            )}
          
        </div>
      </Router>
      
    )
  }
}

function mapStateToProps({authedUser}){
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
