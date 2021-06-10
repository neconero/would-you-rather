import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {authenticateUser} from '../actions/shared'




class Nav extends React.Component {

    componentDidUpdate() {
        console.log(sessionStorage.getItem('authID'))
        sessionStorage.getItem('authID') && this.props.dispatch(authenticateUser
          (sessionStorage.getItem('authID')))
      }

    render() {
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
                                <NavLink to='/' exact activeClassName="active">
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
    
    const{name, avatarURL} =  user 
    return {
        authedUser,
        name,
        avatarURL
    }
}

export default connect(mapStateToProps)(Nav)

