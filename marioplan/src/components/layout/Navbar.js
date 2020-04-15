import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import logo from './1.png';
const Navbar = () => {
    return (
        <nav className="nav-wrapper grey " style={{paddingLeft: 2 + 'em'}}>
            <div className="contanier">
            <img src={logo}  height="60"></img>
                <Link to='/' className="brand-logo">CSCI 526 Mobile Games</Link>
                <SignedInLinks></SignedInLinks>
                <SignedOutLinks></SignedOutLinks>
            </div>
        </nav>
    )
}

export default Navbar