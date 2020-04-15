import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right" style={{marginRight: 2 + 'em'}}>
            {/* <li><NavLink to='/'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className= 'btn btn-floating pink lighten-1'>NN</NavLink></li> */}
            <li>Team Chibi</li>
        </ul>
    )
}

export default SignedInLinks