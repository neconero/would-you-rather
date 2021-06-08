import React, { Component} from 'react'
import {connect} from 'react-redux'
import QHomeTab from './QHomeTab'
import Nav from './Nav'

class HomePage extends Component {
    componentDidMount() {
        if(this.props.authedUser === null) {
            this.props.history.push('/')
        }
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

export default connect(mapStateToProps)(HomePage)