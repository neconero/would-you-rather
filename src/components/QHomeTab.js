import React, { Component} from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/helpers'

class QHomeTab extends Component {
    render() {
        const {answered, unanswered} = this.props

        console.log(answered)
        console.log(unanswered)

        
        return (
            <div className="question">
               Romeo 
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id}){
    
    const answered = Object.entries(questions).reduce((acc, curr) => {
        const [, questionValue] = curr
        for(const [key, value] of Object.entries(questionValue)){
            const {id, author, timestamp} = questionValue

            if(key.toLowerCase().startsWith('option')){
                if(value.votes.includes(authedUser) && !acc.some(a => id === a.id)){
                    const {name, avatarURL, id: username} = users[author]
                    acc.push({id, author: {name, avatarURL, username}, timestamp, value: value.text})
                }
            }
        }
        return acc        
    }, [])


    console.log(answered)


    return {
        authedUser,
        answered
        
    }
}

export default connect(mapStateToProps)(QHomeTab)