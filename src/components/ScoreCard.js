import React, { Component, Fragment} from 'react';
import NotFoundPage from './NotFoundPage'
import {connect} from 'react-redux'

class ScoreCard extends Component {
    render() {
        const {user, answerLength, questionsLength} = this.props
        if(user === null){
            return <NotFoundPage />
        }
        const {name, score, avatarURL: avatar} = user
        return (
           <Fragment>
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
           </Fragment> 
        )
    }
}

function mapStateToProps({users}, {id}) {
    const user = users[id];
    const {answers, questions} = user
    const anslength = Object.keys(answers)
    const answerLength = anslength.length ? anslength.length : 0
    const questionsLength = questions.length ? questions.length :0
    user.score = answerLength + questionsLength
    
    return {
        user: user
            ? user
            : null,
        answerLength,
        questionsLength
    }
}

export default connect(mapStateToProps)(ScoreCard)