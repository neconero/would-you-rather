import React, { Component} from 'react'
import {connect} from 'react-redux'
import QHomeTab from './QHomeTab'
import NavBar from './NavBar'
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
                <main>
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

function mapStateToProps({questions, authedUser}) {
    
    return{
        questionsIds: Object.keys(questions)
            .sort((a,b)=> questions[b].timestamp - questions[a].timestamp),
        authedUser
    }
}

export default connect(mapStateToProps)(HomePage)