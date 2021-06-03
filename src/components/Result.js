import React, { Component} from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/helpers'
import Nav from './Nav'

class Result extends Component {
    render() {
        const {authedUser, question} = this.props
        const {optionOne, optionTwo, avatar, name} = question

        const totalVotes = optionOne.votes.length + optionTwo.votes.length
        const firstOptionVotePercentage = Math.floor(100*(optionOne.votes.length/totalVotes)) 
        const secondOptionVotePercentage = Math.floor(100*(optionTwo.votes.length/totalVotes))
        return (
            <div>
                <Nav/>
                <div className="profile-name">Asked by {name}</div>
                <div className="profile-info">
                    <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
                    <div className="poll-result">
                        <h3>Results</h3>
                        {optionOne.text}
                        <div>{`${firstOptionVotePercentage}%`}</div>
                        <div>{`${optionOne.votes.length} out of ${totalVotes}`}</div>
                        <br />
                        {optionTwo.text}
                        <div>{`${secondOptionVotePercentage}%`}</div>
                        <div>{`${optionTwo.votes.length} out of ${totalVotes}`}</div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}, props){
    const {id} = props.match.params
    console.log(id)
    const question = questions[id]

    return{
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null,
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Result)