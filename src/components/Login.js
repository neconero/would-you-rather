import React, {Component} from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import User from './User'

class Login extends Component {
    state={
        authedUser: 'Select...'
    }

    handleChange = (value) => {
        console.log(value)
        this.setState({authedUser: value.name})
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        
        const values = this.props.usersObjtoArr
        console.log(this.state)
        return(
            <div>
                <h3 className='center'>Welcome to the Would You Rather App!</h3>
                <p className='center'>Please sign in to continue</p>
                <form className='login' onSubmit={this.handleSubmit}>
                    <Select 
                        placeholder={this.state.authedUser}
                        options={values}
                        onChange={this.handleChange}
                        components={{DropdownIndicator: () => null, Option: User}}
                        value={this.state.authedUser}
                    />
                    <button
                        className='btn'
                        type='submit'
                    >
                        Sign In
                    </button>
                </form>  
            </div>
        )
    }
}

function mapStateToProps({users}){
    return{
        usersObjtoArr: Object.values(users),
    }
}

export default connect(mapStateToProps)(Login)