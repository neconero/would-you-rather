import React, { Component} from 'react'
import {handleInitialData}  from '../actions/shared'
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
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
                <div>
                  <Router>
                    <div> 
                      <Switch>
                        <Route path='/' exact component={LoginPage} />
                        <Route  path='/home' component={Homepage}  />
                        <Route path='/add' component={NewPoll} />
                        <Route path='/question/:id' component={Poll} />
                        <Route path='/result/:id' component={Result} />
                        <Route path='/leaderboard' component={LeaderBoard} />
                        <Route component={NotFoundPage} />
                      </Switch>
                    </div>
                  </Router>
                </div>
    )
  }
}

function mapStateToProps(){

}

export default connect(mapStateToProps)(App);
