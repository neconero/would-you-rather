import React from 'react'
import {connect} from 'react-redux'
import {NavLink, withRouter} from 'react-router-dom'
import {authenticateUser} from '../actions/shared'




class Nav extends React.Component {

    logout = (e) => {
        e.preventDefault()

        sessionStorage.removeItem('authID')
  
        this.props.dispatch(authenticateUser(sessionStorage.getItem('authID')))
        if(sessionStorage.getItem('authID') === null){
            sessionStorage.clear()
            this.props.history.push('/')
        }
    }

    render() {
        console.log(this.props)
        const {authedUser, name, avatarURL} = this.props
        
        return(
            <header>
                
                <ul className="list-group">
                    
                    <li>
                        <NavLink to='/home' exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' exact activeClassName="active">
                            NewPoll
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' exact activeClassName="active">
                            LeaderBoard
                        </NavLink>
                    </li> 
                    {authedUser && (
                        <ul className="list-group">
                            <li>
                                <img 
                                    src={avatarURL} 
                                    alt={`Avatar of ${name}`} 
                                    className='avatarURL'
                                />
                                <span>{`Hello, ${name}`}</span>
                            </li>
                            <li>
                                <NavLink to='/' exact activeClassName="active" onClick={this.logout}>
                                    Logout
                                </NavLink>
                            </li>
                        </ul>  
                    )}  
                </ul>
                
            </header>
        )
    }          
}

function mapStateToProps({authedUser, users}){
    const user = users[authedUser]
    
    const{name = '', avatarURL = ''} =  user ? user : null 
    return {
        authedUser,
        name,
        avatarURL
    }
}

export default withRouter(connect(mapStateToProps)(Nav))

