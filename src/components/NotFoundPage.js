import React, { Component} from 'react'
import {Link} from 'react-router-dom'

class NotFoundPage extends Component {
    render() {
        return (
            <div>404! - <Link to='/home'>Go home</Link></div>
        )
    }
}

export default NotFoundPage