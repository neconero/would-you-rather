import {getInitialData, saveQuestion} from '../utils/api'
import {receiveUsers, addAnswerToUser} from '../actions/users'
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

export function handleAnsweringQuestion(info){
    return (dispatch) => {
        return saveQuestion(info)
            .then((info) => {
                dispatch(answerQuestion(info))
                dispatch(addAnswerToUser(info))
            })
    }
}