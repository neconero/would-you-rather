import React, { Component, Fragment } from 'react'
import {Typography, Divider, Grid} from '@material-ui/core'
import LoginForm from './LoginForm'
import { SiElectron } from "react-icons/si"
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'


class LoginPage extends Component {
    state = {
        redirectToReferrer: false,
    }

    handleLogin = () => {
        if(this.props.authedUser){
            this.setState({redirectToReferrer: true})
        }

        
        
    }

    componentDidMount() {
        if(this.state.redirectToReferrer === true){
            return <Redirect to={this.props.location.state.from || '/home'} />
        }
    }

    render() {
        
        
        return(
            <Fragment >
                <Grid container spacing={7} direction="column" justify="center" align="center" className='home'>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h6">Welcome to the Would You Rather App!</Typography>
                        <Typography align="center" variant="subtitle1">Please sign in to continue</Typography>
                    </Grid>
                    <Divider />
                    <Grid item xs={12}>
                        <SiElectron />
                    </Grid>
                    <Grid item xs={12}>
                        <LoginForm />
                    </Grid>
                    
                </Grid>
            </Fragment>
        )
    }
}

function mapStateToProps({authedUser}){
    return{authedUser}
}

export default connect(mapStateToProps)(LoginPage)