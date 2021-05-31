import React, { Component } from 'react'
import Tabs from './Tabs'
import { connect } from 'react-redux'


class QHomeTab extends Component {
    render() {
        const { answered, unanswered } = this.props

        return (
            <div className="glass">
                <Tabs answered={answered} unanswered={unanswered} />
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }) {

    const { answered, unanswered } = Object.entries(questions).reduce((acc, curr) => {
        const [, questionValue] = curr
        let temp = { answered: [], unanswered: [] }

        for (const [key, value] of Object.entries(questionValue)) {
            const { id, author, timestamp } = questionValue

            if (key.toLowerCase().startsWith('option')) {
                if (value.votes.includes(authedUser)) {
                    if (!acc.answered.some(a => id === a.id)) {
                        temp.answered.push(id)
                        const { name, avatarURL: avatar, id: username } = users[author]
                        acc.answered.push({ id, author: { name, avatar, username }, timestamp, value: value.text })
                    }
                } else {
                    if (!temp.unanswered.some(a => id === a.id)) {
                        const { name, avatarURL: avatar, id: username } = users[author]
                        temp.unanswered.push({ id, author: { name, avatar, username }, timestamp, value: value.text })
                    }
                }
            }
        }

        temp.unanswered.forEach(ua => !temp.answered.includes(ua.id) && acc.unanswered.push(ua))


        return acc
    }, { answered: [], unanswered: [] })


    return {
        authedUser,
        answered,
        unanswered

    }
}

export default connect(mapStateToProps)(QHomeTab)