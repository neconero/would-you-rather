export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function answerQuestion (qid, authedUser, answer){
    return{
        type: ANSWER_QUESTION,
        qid,
        authedUser,
        answer
    }
}