import React, {Component} from 'react'
import {authenticateUser} from '../actions/shared'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'



class LoginForm extends Component{
    state= {
        userID: ''
    }

    handleChange = (event) => {

        console.log(event.target.value)

        this.setState({userID: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {userID} = this.state
        if(userID !== ''){
            this.props.dispatch(authenticateUser(userID))
            this.props.history.push('/')
        }
    }

    render() {
        
        const {usersObjtoArr} = this.props
        console.log(usersObjtoArr)

        const {userID} = this.state

        return(
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <select value={userID} onChange={this.handleChange}>
                                    {usersObjtoArr.map((user) => (
                                        <option key={user.userID} value={user.userID}>
                                                {user.userName}  
                                        </option>
                                        ))}
                                </select>
                            </div>
                            <button type="submit">Sign in</button>
                        </form>                   
        )
    }
}


function mapStateToProps({users, authedUser}){
    let userProps = []

    Object.entries(users).forEach(([key, value]) =>
        userProps.push({
            userID: value.id,
            userName: value.name
        })
    )
    return{
        usersObjtoArr: userProps,
        authedUser
    }
}

LoginForm.propTypes = {
    onLoading: PropTypes.func.isRequired
}



export default withRouter(connect(mapStateToProps)(LoginForm))