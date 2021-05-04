import React from 'react';
import {Link} from "react-router-dom";
import './NavItem.css';

const NavItem = () => {
    return (
        <>
            <li className="nav-item">
                <Link to="/cart">Cart</Link>  
            </li>
            <li className="nav-item">
                <Link to="/login">Login</Link>  
            </li>
        </>
    )
}

export default NavItem
