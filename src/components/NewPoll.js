import React, { Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {handleAddQuestion} from '../actions/shared'

class NewPoll extends Component {
    state={
        optionOne: '',
        optionTwo: '',
        toHome: false,
    }
    handleChange1 =(e) => {
       const optionOne = e.target.value
       this.setState(() => ({
           optionOne
       }))
    }
    handleChange2 = (e) => {
        const optionTwo = e.target.value
        this.setState(() => ({
            optionTwo
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {optionOne, optionTwo} = this.state
        const {dispatch} = this.props

        
        dispatch(handleAddQuestion(optionOne, optionTwo))

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            toHome: true
        }))
    }

    
    render() {
        const { optionOne, optionTwo, toHome } = this.state

        if(toHome === true) {
            return <Redirect to='/home' />
        }
        return (
            <Fragment>
                <div className='glass'>
                    <div className='poll-container'>
                        <h2>Create New Question</h2>
                        <div className='poll-intro'>
                            <h6>Complete the questions:</h6>
                            <h4>Would you rather ...</h4>
                        </div>
                        <form className='new-poll' onSubmit={this.handleSubmit}>
                            <input 
                                placeholder='Enter Option One Text Here'
                                type='text'
                                value={optionOne}
                                onChange={this.handleChange1}
                            />
                            <p className='message'>OR</p>
                            <input
                                placeholder='Enter Option Two Text Here'
                                type='text'
                                value={optionTwo}
                                onChange={this.handleChange2} 
                            />
                            <button
                                className='btn newquestion'
                                type='submit'
                                disabled={optionOne === '' || optionTwo === ''}
                            >
                                Submit
                            </button>
                        </form>
                    </div>   
                </div> 
            </Fragment>
        )
    }
}



export default connect()(NewPoll)