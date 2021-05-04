import React from 'react'
import { Link } from 'react-router-dom'
import NavItem from './NavItem'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="nav-logo">
                <Link to="/">
                    FOOD ORDER
                </Link>
            </div>
            <ul className="navlist">
                <NavItem/>
            </ul>
        </>
    )
}

export default Navbar
