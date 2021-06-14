import React, { Component, Fragment} from 'react'
//import {authenticateUser} from '../actions/shared'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import QHomeTab from './QHomeTab'
//import Nav from './Nav'

class Home extends Component {

    // componentDidUpdate() {
    //     console.log(sessionStorage.getItem('authID'))
    //     sessionStorage.getItem('authID') && this.props.dispatch(authenticateUser(sessionStorage.getItem('authID')))
    // }

    componentDidMount() {
        if(this.props.authedUser === null) {
            this.props.history.push('/')
        }

        window.onbeforeunload = (event) => {
            const e = event || window.event;
    
            e.preventDefault();
    
            if(e){
                e.returnValue = ''
            }
            return ''
        }

    }

    render() {
        
        return (
            <Fragment>
                <main className='home'>
                    <section >
                        <QHomeTab />     
                    </section>
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                </main>     
            </Fragment>
        )
    }

}

function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(Home))
