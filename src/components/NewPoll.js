import React, { Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {handleAddQuestion} from '../actions/shared'
import Nav from './Nav'

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
            <div>
                <Nav />
                <div>
                    <h2>Create New Question</h2>
                    <h5>Complete the questions:</h5>
                    <h2>Would you rather ...</h2>
                    <form className='new-poll' onSubmit={this.handleSubmit}>
                        <input 
                            placeholder='Enter Option One Text Here'
                            type='text'
                            value={optionOne}
                            onChange={this.handleChange1}
                        />
                        <span>OR</span>
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
        )
    }
}



export default connect()(NewPoll)