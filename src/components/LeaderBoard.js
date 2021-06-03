import React, { Component} from 'react'
import ScoreCard from './ScoreCard'
import {connect} from 'react-redux'

class LeaderBoard extends Component {
    render() {    
        return(
            <div>
                <ul>
                    {this.props.usersID.map((id) => (
                        <li key={id}>
                            <ScoreCard id={id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({users}){
    return {
        usersID : Object.keys(users)
    }
}

export default connect(mapStateToProps)(LeaderBoard)