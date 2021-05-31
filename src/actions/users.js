export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER'

export function receiveUsers(users){
    return{
        type: RECEIVE_USERS,
        users
    }
}

export function addAnswerToUser(questionID, authedUser, answer){
    return{
        type: ADD_ANSWER_TO_USER,
        id: questionID,
        authedUser,
        answer
    }
}
export function handleUserAddition(qid, answer){
    return (dispatch, getState) => {
        const { authedUser} = getState()
        dispatch(addAnswerToUser(qid, authedUser, answer))
    }
}