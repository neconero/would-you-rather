import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, NavLink} from 'react-router-dom'
import {RiGameLine,RiHome4Fill} from 'react-icons/ri'
import {GiVote, GiPodiumWinner} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {authenticateUser} from '../actions/shared'
import LoginPage from './LoginPage'
import PropTypes from 'prop-types'

class Nav extends Component {
    render() {
        return(
            <header>
                <RiGameLine />
                <ul>
                    <li>Home</li>
                    <li>NewPoll</li>
                    <li>LeaderBoard</li>
                    <li>Logout</li>
                </ul>
            </header>
        )
    }
}

export default Nav