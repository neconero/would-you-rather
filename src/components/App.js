import React, { Component} from 'react'
import {connect} from 'react-redux'
import {handleInitialData}  from '../actions/shared'
import HomePage from './HomePage'
import NavBar from './NavBar'
import Login from './LoginForm'
import LoginPage from './LoginPage'


class App extends Component{
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {authedUser} = this.props
    return (
      <div className="App">
        {authedUser == null 
          ? <LoginPage /> 
          : <NavBar />}
        
      </div>
    )
  }
}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
