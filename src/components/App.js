import React, { Component} from 'react'
import {connect} from 'react-redux'
import {handleInitialData}  from '../actions/shared'
import HomePage from './HomePage'
import NavBar from './NavBar'
import Login from './Login'


class App extends Component{
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        {this.props.loading === true 
          ? <Login /> 
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
