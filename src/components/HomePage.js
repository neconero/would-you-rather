import React, { Component} from 'react'
import {connect} from 'react-redux'
import QHomeTab from './QHomeTab'

class HomePage extends Component {
    render() {
        
        return (
            <div>
                <h3 className="center">Unanswered Questions</h3>
                {this.props.questionsIds.map((id) => (
                <QHomeTab id={id}/>
                ))}
                
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser, users}) {
    
    return{
        questionsIds: Object.keys(questions)
            .sort((a,b)=> questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(HomePage)