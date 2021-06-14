import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'
import Nav from '../components/Nav'


function PrivateRoute({isAuth, component: Component, path, ...rest}) {
    
    return(
        <Route 
            path={path}
            {...rest} 
            render={(props) => {
                if (isAuth) {
                    return (
                        <Fragment>
                            <Nav />
                            <Component {...props}/>
                        </Fragment>
                    )
                }else{
                    return <Redirect to = {{
                        pathname: '/',
                        state: {
                            prevLocation: path,
                            error: 'Please Login'
                        }
                    }} />
                }
            }} />
        )
}

function mapStateToProps({authedUser}){
    return{
        isAuth: !!authedUser
    }
}


export default connect(mapStateToProps)(PrivateRoute)