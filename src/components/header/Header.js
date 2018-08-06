import React from 'react'
import logo from '../../public/logo.svg'
import './header.scss'

const Header = () => {
    return (
        <nav className="navbar navbar-light">
            <a className="navbar-brand" href="#">
                <img src={logo} width="30" height="30" className="d-inline-block align-top mx-2" alt="Meetup logo" />
                Meetup
            </a>
            <div className="form-inline">
            <input type="text" className="form-control" placeholder="Search..." /></div>
        </nav>
    )
}

export default Header