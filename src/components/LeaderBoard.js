import React, { Component, Fragment} from 'react'
import ScoreCard from './ScoreCard'
import {GiTrophyCup} from 'react-icons/gi'
import {connect} from 'react-redux'


class LeaderBoard extends Component {
    componentDidMount() {
        if(this.props.authedUser === null) {
            this.props.history.push('/')
        }
    }
    render() {    
        return(
            <Fragment> 
                <div className="glass">
                    <div className="trophy"><GiTrophyCup  size={300}/></div>
                    <div className="rank-board">
                        <ul>
                            {this.props.usersID.map((id) => (
                                <li key={id}>
                                    <ScoreCard id={id} />
                                </li>
                            ))}
                        </ul>
                    </div>  
                </div>    
            </Fragment>
        )
    }
}

function mapStateToProps({users, authedUser}){
    let userID = Object.keys(users)
    let userArr = users

    const scoreObject =  userID.reduce((acc, user) => {
        let temp = userArr[user]
        
        const {answers, questions} = temp

        let questLength = questions.length
        
        let answerArr = Object.keys(answers)
        let answerLength = answerArr.length
        
        temp.score = questLength + answerLength

        acc[temp.id] = temp
        return acc
    }, {})

    return {
        usersID : Object.keys(scoreObject)
            .sort((a, b) => scoreObject[b].score - scoreObject[a].score),
        authedUser
    }
}

export default connect(mapStateToProps)(LeaderBoard)