import React, {Component, Fragment} from 'react'
import {authenticateUser} from '../actions/shared'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'



class LoginForm extends Component{
    state= {
        userID: 'Select'
    }

    handleChange = (event) => {

        console.log(event.target.value)

        this.setState({userID: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {userID} = this.state
        if(userID !== 'Select'){
            this.props.dispatch(authenticateUser(userID))
            this.props.history.push('/home')
        }
    }

    render() {
        
        const {usersObjtoArr} = this.props
        console.log(usersObjtoArr)

        const {userID} = this.state

        return(
                        <Fragment>
                            <form className="login-form" onSubmit={this.handleSubmit} >
                                <h4>Sign in</h4>
                                <div>
                                    <select className="login-select" value={userID} onChange={this.handleChange}>
                                        {usersObjtoArr.map((user) => (
                                            <option key={user.userID} value={user.userID}>
                                                    {user.userName}  
                                            </option>
                                            ))}
                                    </select>
                                </div>
                                <button type="submit" className="log-btn">Log in</button>
                            </form>  
                        </Fragment>                           
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