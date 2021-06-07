import React, { Component} from 'react';
import {connect} from 'react-redux'

class ScoreCard extends Component {
    render() {
        const {name, avatar, anslength, questions} = this.props
        const answerLength = anslength.length ? anslength.length : 0
        const questionsLength = questions.length ? questions.length :0
        const score = answerLength + questionsLength
        
        return (
            <div className="score-card2">
                <img src={avatar} alt={`Avatar of ${name}`}  className='avatar-img'/>
                <div className="score-details">
                    <h4>{name}</h4>
                    <h5>Answered questions</h5>
                    <h5>{answerLength}</h5>
                    <h5>Created Questions</h5>
                    <h5>{questionsLength}</h5>  
                </div>
                <div className="score">
                    <h4>Score</h4>
                    <h5>{score}</h5>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}, {id}) {
    const user = users[id];
    const {name, avatarURL: avatar, answers, questions} = user
    const anslength = Object.keys(answers)
    return {
        name,
        avatar,
        anslength,
        questions
    }
}

export default connect(mapStateToProps)(ScoreCard)