import React, { Component, Fragment } from 'react'
import {Typography, Divider, Grid, Avatar} from '@material-ui/core'
import LoginForm from './LoginForm'
import { SiElectron } from "react-icons/si"


class LoginPage extends Component {
    state = {
        loading: false
    }

    handleLoading = () => {
        this.setState({loading: true})
    }

    render() {
        return(
            <Fragment>
                <Grid container spacing={7} direction="column" justify="center" align="center">
                    <Grid item xs={12}>
                        <Typography align="center" variant="h6">Welcome to the Would You Rather App!</Typography>
                        <Typography align="center" variant="subtitle1">Please sign in to continue</Typography>
                    </Grid>
                    <Divider />
                    <Grid item xs={12}>
                        <Avatar  src={SiElectron} alt= "electron" />
                    </Grid>
                    <Grid item xs={12}>
                    <Typography align="center" variant="h5">Sign in</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <LoginForm onLoading={this.handleLoading}/>
                    </Grid>
                    
                </Grid>
            </Fragment>
        )
    }
}

export default LoginPage