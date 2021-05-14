import React, { Component} from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/helpers'

class Question extends Component {
    render() {
        const {question} = this.props

        const {name, avatar, id} = question
        return (
            <div className="question">
                <img 
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
                <div className="question-info">
                    <span>{name}</span>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id}){
    const question = questions[id]

    return {
        authedUser,
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null
    }
}

export default connect(mapStateToProps)(Question)