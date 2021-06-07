import React, { Component} from 'react'
import ScoreCard from './ScoreCard'
import {GiTrophyCup} from 'react-icons/gi'
import {connect} from 'react-redux'
import Nav from './Nav'

class LeaderBoard extends Component {
    render() {    
        return(
            <div>
                <main className="home"> 
                    <section>
                        <Nav />
                        <div className="glass">
                            <div className="trophy"><GiTrophyCup  size={300}/></div>
                            <div className="rank-board">
                                <ul>
                                    {this.props.usersID.map((id) => (
                                        <li key={id}>
                                            <ScoreCard id={id} />
                                        </li>
                                    ))}
                                </ul>
                            </div>  
                        </div>    
                    </section>  
                </main>
                <div className="circle1"></div>
                <div className="circle2"></div>
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