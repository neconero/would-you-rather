import React, { Component} from 'react'
import {authenticateUser} from '../actions/shared'
import {connect} from 'react-redux'
import QHomeTab from './QHomeTab'
import Nav from './Nav'


class Homepage extends Component {

    

    componentDidUpdate() {
        console.log(sessionStorage.getItem('authID'))
        sessionStorage.getItem('authID') && this.props.dispatch(authenticateUser
          (sessionStorage.getItem('authID')))
      }
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

        this.props.dispatch(authenticateUser
            (sessionStorage.getItem('authID')))
    }

    

    
   
    render() {
        
        return (
            <div>
                <main className='home'>
                    <section >
                        <Nav />
                        <QHomeTab />     
                    </section>
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                </main>     
            </div>
        )
    }
}

function mapStateToProps({authedUser}) {  
    return{
        authedUser
    }
}

export default connect(mapStateToProps)(Homepage)