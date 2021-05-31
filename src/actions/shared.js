import {getInitialData, saveQuestionAnswer} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'
import {receiveUsers, handleUserAddition} from '../actions/users'
import {receiveQuestions, answerQuestion} from '../actions/questions'
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