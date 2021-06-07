import React, { Component} from 'react'
import UserCard from './UserCard'
import '../index.css'

class Tabs extends Component {
    state={
        index: 1
    }

    handleToggleTab = (index) => {
        this.setState({index})
    }

    

    render() {
        const {index} = this.state
        const {answered, unanswered} = this.props
        return (
                    <div className="container">
                        <div className="bloc-tabs">
                            <button
                                className={  index === 1 ? "tabs active-tabs" : "tabs"}
                                onClick={() => this.handleToggleTab(1)}
                            >
                                Unanswered
                            </button>
                            <button
                            className={index === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => this.handleToggleTab(2)}
                            >
                                Answered
                            </button>
                        </div>

                        <div className="content-tabs">
                            <div
                                className={index === 1 ? "content  active-content" : "content"}
                            >
                                <ul className='answered-list'>
                                    {unanswered.map((u) => (
                                        <li key={u.id}>
                                            <UserCard answer={u} tab={index} id={u.id}/>
                                        </li>  
                                    ))}
                                </ul>
                            </div>

                            <div
                                className={index === 2 ? "content  active-content" : "content"}
                            >
                                <ul className='answered-list'>
                                    {answered.map((a) => (
                                        <li key={a.id}>
                                            <UserCard answer={a} tab={index} id={a.id}/>
                                        </li>  
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
    }
}

export default Tabs