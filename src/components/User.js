//import React, { Component} from 'react'
import {components} from 'react-select'


const {Option} = components

const User = props => (
    <Option {...props}>
        <div>
            <img 
                src={props.data.avatarURL}
                alt={`Avatar of ${props.data.name}`}
                className='avatar'
            />
            <div>
                <span>{props.data.name}</span>
            </div>
            
        </div>
    </Option>
)


export default User