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
    
    const { answered, unanswered } = Object.entries(questions).reduce((acc, curr) => {
        const [questionKey, questionValue] = curr
        let answeredKeys = []
        let unansweredKeys = {}
        for (const [key, value] of Object.entries(questionValue)) {
            const { id, author, timestamp } = questionValue
    
            if (key.toLowerCase().startsWith('option')) {
                if (value.votes.includes(name)) {
                    if (!acc.answered.some(a => id === a.id)) {
                        answeredKeys.push(id)
                        acc.answered.push({ id, author, timestamp, value: value.text })
                    }
                } else {
                    unanswered[id] = { id, author, timestamp, value: value.text }
                }
            }
        }
    
        if (answeredKeys.length) {
            answeredKeys.forEach(ak => {
                if (unanswered[ak]) delete unanswered[ak]
            })
    
        }
    
    
    
        if (Object.keys(unanswered).length) {
            acc.unanswered.push(Object.values(unanswered)[0])
        }
    
    
        return acc
    }, { answered: [], unanswered: [] })


    return {
        authedUser,
        answered,
        unanswered
        
    }
}

export default connect(mapStateToProps)(QHomeTab)