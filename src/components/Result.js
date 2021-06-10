import React, { Component, Fragment} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/helpers'
import NotFoundPage from './NotFoundPage'
import Nav from './Nav'

class Result extends Component {

    componentDidMount(){
        if(this.props.authedUser === null){
            return this.props.history.push('/')
        }
    }
    
    borderColorUserChoice1 = () => {
        const {authedUser, question} = this.props
        const {optionOne, optionTwo} = question

        if(optionOne.votes.indexOf(authedUser) !== -1) {
            return 1
        }else if(optionTwo.votes.indexOf(authedUser) !== -1) {
            return 2
        }
    }


    render() {
        const {question} = this.props

        if(question === null ) {
            return <NotFoundPage />
        }
        const {optionOne, optionTwo, avatar, name} = question


        const totalVotes = optionOne.votes.length + optionTwo.votes.length
        const firstOptionVotePercentage = Math.floor(100*(optionOne.votes.length/totalVotes)) 
        const secondOptionVotePercentage = Math.floor(100*(optionTwo.votes.length/totalVotes))
        return (
            <Fragment>
                <main className='home'>
                    <section>
                        <Nav />
                        <div className='result'>
                                <div className="profile-name">
                                    <h4>Asked by {name}</h4>
                                    <img src={avatar} alt={`Avatar of ${name}`} className='avatar-img' />
                                </div>  
                                    <div className="poll-result">
                                        <h3>Results</h3>
                                        <div className={`score-card ${(this.borderColorUserChoice1() === 1) && 'score-card-border'}`}>
                                            <p>{`Would you rather  ${optionOne.text}`}</p>
                                            <ProgressBar now={firstOptionVotePercentage} label={`${firstOptionVotePercentage}%`}/>
                                            <p>{`${optionOne.votes.length} out of ${totalVotes}`}</p>
                                        </div>
                                        <br />
                                        <div className={`score-card ${(this.borderColorUserChoice1() === 2) && 'score-card-border'}`}>
                                            <p>{`Would you rather  ${optionTwo.text}`}</p>
                                            <ProgressBar now={secondOptionVotePercentage} label={`${secondOptionVotePercentage}%`}/>
                                            <p>{`${optionTwo.votes.length} out of ${totalVotes}`}</p>
                                        </div>
                                        
                                    </div>
                        </div>  
                    </section>   
                </main> 
                <div className="circle1"></div>
                <div className="circle2"></div> 
            </Fragment>
        )
    }
}

function mapStateToProps({questions, users, authedUser}, props){
    const {id} = props.match.params
    
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