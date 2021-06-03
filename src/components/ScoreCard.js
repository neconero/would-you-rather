import React, { Component} from 'react';
import {connect} from 'react-redux'

class ScoreCard extends Component {
    render() {
        const {name, avatar, answers, questions} = this.props
        const answerLength = answers.length ? answers.length : 0
        const questionsLength = questions.length ? questions.length :0
        const score = answerLength + questionsLength
        
        return (
            <div>
                <img src={avatar} alt={`Avatar of ${name}`} />
                <h6>{name}</h6>
                <p>{`Answered questions  ${answerLength}`}</p>
                <p>{`Created questions  ${questionsLength}`}</p>
                <p>{`Score  ${score}`}</p>
            </div>
        )
    }
}

function mapStateToProps({users}, {id}) {
    const user = users[id];
    const {name, avatarURL: avatar, answers, questions} = user
    return {
        name,
        avatar,
        answers,
        questions
    }
}

export default connect(mapStateToProps)(ScoreCard)