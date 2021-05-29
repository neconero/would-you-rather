import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'



class UserCard extends Component {
    handleClick = (event) => {
        const work = event.target.value
        console.log(work)
        const {tab, id, history} = this.props
        console.log(id)

        
        if(tab === 1){
            return history.push(`/question/${id}`)
        }else{
           return history.push(`/results/${id}`) 
        }
    }
    render() {
        const {answer} = this.props
        return (
            <div className="user-card">
                    <div className="avatar">
                        <img
                            src={answer.author.avatar}
                            className="avatar-img"
                        />
                    </div>
                    <div className="question-tease">
                        <h5>{`${answer.author.name} asks:`}</h5>
                        <h5>Would you rather</h5>
                        <p>{answer.value}</p>    
                        <button onClick = {this.handleClick}>View Poll</button>
                    </div> 
            </div>
        )
    }
}

export default withRouter(UserCard)