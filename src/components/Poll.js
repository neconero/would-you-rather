import React, { Component} from 'react'
import {formatQuestion} from '../utils/helpers'
import {handleAnsweringQuestion} from '../actions/shared'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class Poll extends Component{
    state={
        selectedOption: '',
        selected: false
    }

    onChange = (event) => {
        this.setState({
            selected: !this.state.selected,
            selectedOption: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const {dispatch, question, authedUser, history} = this.props
        const {selectedOption} = this.state
        const {id} = question

        dispatch(handleAnsweringQuestion(id, authedUser, selectedOption ))
        history.push(`/results/${id}`)
    }

    render() {
        if(this.props.authedUser === null){
            return this.props.history('/login')
        }

        console.log(this.props.question)

        const {name, avatar, optionOne, optionTwo} = this.props.question

        return (
            <div className='poll'>
                <div className='user-name'>{name} asks</div>

                <div className='poll-info'>
                    <img src={avatar} alt={`Avatar of ${name}`}  className='avatar'/>
                

                    <div>
                        <h2>Would you rather...</h2>
                    
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label>
                                    <input 
                                        type="radio"
                                        value={optionOne.text}
                                        onClick={this.onChange}
                                        checked={this.state.selected}
                                    />
                                    {optionOne.text}
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input 
                                        type="radio"
                                        value={optionTwo.text}
                                        onClick={this.onChange}
                                        checked={this.state.selected}
                                    />
                                    {optionTwo.text}
                                </label>
                            </div>
                            <button
                                className="btn"
                                type="submit"
                                disabled={this.state.selected}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, props){
    const {id} = props.match.params
    const question = questions[id]

    console.log(id)

    return{
        authedUser,
        question: question
                ? formatQuestion(question, users[question.author], authedUser)
                : null
    }
}

export default withRouter(connect(mapStateToProps)(Poll))