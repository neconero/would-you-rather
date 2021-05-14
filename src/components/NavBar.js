import React, {Fragment, Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import isMobileHOC from '../hooks/Styles'
import{
        AppBar, 
        Toolbar, 
        IconButton, 
        Button, 
        Typography,
        Menu,
        MenuItem,
        makeStyles,   
    } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {setAuthedUser} from '../actions/authedUser'
import {withRouter} from 'react-router-dom'

class NavBar extends Component {

    state={
        anchorEl: null
    }

    handleMenu = (e) => {
        const anchorEl = e.currentTarget
        this.setState(() => ({
            anchorEl
        }))
    }
    
    render() {
        const {authedUser, users, isMobileHOC} = this.props
        const classes = useStyles
        const open = Boolean(this.state.anchorEl)
        return (
            <div>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography variant='h6' style={{flexGrow: 1}}>Game</Typography>
                        {isMobileHOC ? (
                            <Fragment>
                                <IconButton
                                    edge='start'
                                    className={classes.menuButton}
                                    color='inherit'
                                    aria-label='menu'
                                    onClick={this.handleMenu}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id='menu'
                                    anchorEl={this.state.anchorEl}
                                    anchorOrigin={{
                                        horizontal: 'right',
                                        vertical: 'top'
                                    }}
                                    transformOrigin={{
                                        horizontal: 'right',
                                        vertical: 'top',
                                    }}
                                    keepMounted
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                </Menu>
                            </Fragment>
                        ) : (
                            <div className={classes.headerOptions}>
                                <Button
                                    color='inherit'
                                >
                                    Home
                                </Button>
                                <Button
                                    color='inherit'
                                >
                                    NewPoll
                                </Button>
                                <Button
                                    color='inherit'
                                >
                                    LeaderBoard
                                </Button>
                                <img 
                                    src={users[authedUser].avatar}
                                    className='avatar'
                                />
                                <Button
                                    color='inherit'
                                >
                                    Logout
                                </Button>
                            </div>
                        )}
                        
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const useStyles = makeStyles((theme) => ({
    
    headerOptions: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-evenly'
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
      title: {
        [theme.breakpoints.down("xs")]: {
          flexGrow: 1
        }
      }
}))

function mapStateToProps({authedUser, users}){
    return{
        authedUser,
        users
    }
}

export default isMobileHOC(connect(mapStateToProps)(NavBar))