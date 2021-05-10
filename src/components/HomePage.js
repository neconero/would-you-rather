import React, { Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'

class HomePage extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3 className="center">Unanswered Questions</h3>
                <ul className="homepage-list">
                    {this.props.questionsIds.map((id) => (
                        <li key={id}>
                            <Question id={id}/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions}) {
    return{
        questionsIds: Object.keys(questions)
            .sort((a,b)=> questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(HomePage)