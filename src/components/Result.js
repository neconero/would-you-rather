import React, { Component} from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/helpers'

class Result extends Component {
    render() {
        return (
            <div>Result</div>
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