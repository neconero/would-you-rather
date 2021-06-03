import {getInitialData, saveQuestionAnswer, saveQuestion} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'
import {receiveUsers, handleUserAddition} from '../actions/users'
import {receiveQuestions, answerQuestion, addQuestion} from '../actions/questions'
import {setAuthedUser}  from '../actions/authedUser'



export function handleInitialData(){
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
            }) 
    }
}

export function authenticateUser(authID){
    return (dispatch) => {
        dispatch(setAuthedUser(authID))
    }
}

//async action creator for handling answering question
export function handleAnsweringQuestion(qid,  answer){
    
    return (dispatch, getState) => {

        const {authedUser} = getState()

        dispatch(showLoading())
        
        return saveQuestionAnswer({authedUser, qid, answer})
            .then(() => {
                dispatch(answerQuestion( qid, authedUser, answer))
                dispatch(handleUserAddition(qid, answer))
            })
            .then(() => dispatch(hideLoading()))
    }
}

//async action creator for add question
export function handleAddQuestion(optionOne, optionTwo) {
    return(dispatch, getState) => {
        const {authedUser} = getState()

        const question = {optionOne, optionTwo, author: authedUser}

        dispatch(showLoading())
        return saveQuestion(question)
    }
}