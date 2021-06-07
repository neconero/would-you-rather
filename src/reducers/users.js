import {RECEIVE_USERS, ADD_ANSWER_TO_USER, ADD_QUESTION_TO_USER} from '../actions/users'

export default function users(state = {}, action){
    switch(action.type){
        case RECEIVE_USERS:
            return{
                ...state,
                ...action.users
            }
        case ADD_ANSWER_TO_USER:
            return{
                ...state,
                [action.authedUser]:{
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.id]: action.answer
                    }
                }
            }
        case ADD_QUESTION_TO_USER:
            return{
                ...state,
                [action.question.author]:{
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            }
        default:
            return state
    }
}