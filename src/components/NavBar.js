import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, NavLink} from 'react-router-dom'
import isMobileHOC from '../hooks/Styles'
import{
        AppBar, 
        Toolbar,  
        Tabs,
        Tab, 
        Typography,
        makeStyles,
        Avatar,   
    } from '@material-ui/core'
import {RiGameLine,RiHome4Fill} from 'react-icons/ri'
import {GiVote, GiPodiumWinner} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {setAuthedUser} from '../actions/authedUser'
import LoginPage from './LoginPage'
import PropTypes from 'prop-types'


class NavBar extends Component {

    state={
        anchorEl: 0
    }

    handleLogout = (e) => {
        e.preventDefault()
        this.props.dispatch(setAuthedUser(''))
        this.props.history.push('/login')
    }

    handleTabClick = (e, value) => {
        
        this.setState(() => ({
            anchorEl: value
        }))
    }
    
    render() {
        const {toolbar,logo, root} = useStyles
        const {authedUser, users} = this.props
        return (
            <div className={root}>
                
                        <AppBar position='static'>
                            <Toolbar >
                                <Typography variant='h6' component='h1' className={logo}>
                                    <RiGameLine />
                                </Typography>
                                <div className={toolbar}>
                                    {authedUser 
                                        ? (
                                            <Tabs 
                                                onChange={this.handleTabClick} 
                                                indicatorColor='secondary' 
                                                value={this.state.anchorEl}
                                            >
                                                <NavLink 
                                                    to='/home'
                                                    activeClassName='is-active'
                                                    exact={true}
                                                >
                                                    <Tab 
                                                        icon={<RiHome4Fill />} 
                                                        disableRipple 
                                                        label='Home'
                                                    />
                                                </NavLink>
                                                <NavLink 
                                                    to='/add'
                                                    activeClassName='is-active'
                                                >
                                                    <Tab 
                                                        icon={<GiVote />} 
                                                        disableRipple 
                                                        label='NewPoll'
                                                    />
                                                </NavLink>
                                                <NavLink 
                                                    to='/leaderboard'
                                                    activeClassName='is-active'
                                                >
                                                    <Tab 
                                                        icon={<GiPodiumWinner />} 
                                                        disableRipple 
                                                        label='LeaderBoard'
                                                    />
                                                </NavLink>
                                                <Link to='/login'>
                                                    <Tab 
                                                        icon={<FiLogOut />} 
                                                        disableRipple 
                                                        label='Logout'
                                                        onActive={this.handleLogout}
                                                    />
                                                </Link>
                                            </Tabs>
                                        ) 
                                        : (
                                            <Link to='/login'>
                                                <LoginPage />
                                            </Link>
                                        )}    
                                    
                                </div>
                                
                                
                            </Toolbar>
                        </AppBar>
                    
            </div>
        )
    }
}




const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        backgroundColor: theme.palette.background.paper,
      },

    header: {
        backgroundColor: "#400CCC",
        paddingRight: "79px",
        paddingLeft: "118px",
      },

      toolbar: {
        position: 'relative',
        marginLeft: 'auto',
        width: '100%',
      },

    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
      },

    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
      
}))

NavBar.propTypes = {
    authedUser: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
}

function mapStateToProps({authedUser, users}){
    return{
        authedUser,
        users
    }
}

export default isMobileHOC(connect(mapStateToProps)(NavBar))