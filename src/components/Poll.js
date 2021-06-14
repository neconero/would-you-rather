import React, { Component, Fragment} from 'react'
import {formatQuestion} from '../utils/helpers'
import {handleAnsweringQuestion} from '../actions/shared'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class Poll extends Component{
    state={
        selectedOption: ''
    }

    

    handleOptionChange = (event) => {
        const value = event.target.value
        this.setState({
            selectedOption: value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const {dispatch,history, id} = this.props
        const {selectedOption} = this.state

        dispatch(handleAnsweringQuestion(id,  selectedOption))
        history.push(`/result/${id}`)
    }

    

    render() {
        if(this.props.authedUser === null){
            return this.props.history('/')
        }

        console.log(this.props.question)

        const {name, avatar, optionOne, optionTwo} = this.props.question
        const {selectedOption} = this.state

        return (
            <Fragment >
                        <div className='poll'>
                            <div className='poll-tab'>
                                <div className='user-name'>{name} asks</div>
                                <div className='poll-info'>
                                    <img src={avatar} alt={`Avatar of ${name}`}  className='avatar-img'/>
                                    <div>
                                        <h2>Would you rather...</h2>
                                    
                                        <form onSubmit={this.handleSubmit}>
                                            <div>
                                                <label>
                                                    <input 
                                                        type="radio"
                                                        value="optionOne"
                                                        onChange={this.handleOptionChange}
                                                        checked={selectedOption === "optionOne"}
                                                    />
                                                    {optionOne.text}
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input 
                                                        type="radio"
                                                        value="optionTwo"
                                                        onChange={this.handleOptionChange}
                                                        checked={selectedOption === "optionTwo"}
                                                    />
                                                    {optionTwo.text}
                                                </label>
                                            </div>
                                            <button
                                                className="btn"
                                                type="submit"
                                                disabled={!selectedOption}
                                            >
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>   
                        </div>
            </Fragment>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, props){
    const {id} = props.match.params
    console.log(questions)
    const question = questions[id]

    

    return{
        authedUser,
        question: question
                ? formatQuestion(question, users[question.author], authedUser)
                : null,
        id
    }
}

export default withRouter(connect(mapStateToProps)(Poll))