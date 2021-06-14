import React, { Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Tabs from './Tabs'


class Home extends Component {

    

    componentDidMount() {
        if(this.props.authedUser === null) {
            this.props.history.push('/')
        }

        window.onbeforeunload = (event) => {
            const e = event || window.event;
    
            e.preventDefault();
    
            if(e){
                e.returnValue = ''
            }
            return ''
        }

    }

    render() {
        const { answered, unanswered } = this.props
        return (
            <Fragment>
                <div className="glass">
                    <Tabs answered={answered} unanswered={unanswered} />
                </div>      
            </Fragment>
        )
    }

}

function mapStateToProps({ authedUser, users, questions }) {
    console.log(questions)
    const { answered, unanswered } = Object.entries(questions).reduce((acc, curr) => {
        const [, questionValue] = curr
        console.log(questionValue)
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
        answered: answered.sort((a, b) => (b.timestamp - a.timestamp)),
        unanswered: unanswered.sort((a, b) => (b.timestamp - a.timestamp))

    }
}

export default withRouter(connect(mapStateToProps)(Home))
