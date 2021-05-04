import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import './NavItem.css';

const NavItem = () => {

    const user = useSelector(state=>state.login);
    const {userInfo} = user;

    


    return (

        <>
            <li className="nav-item">
                <Link to="/job/filter">Job filter</Link>  
            </li>
            {
                userInfo ? (
                    <li className="nav-item">
                        <Link to="/preview">Preview</Link>  
                    </li>
                ) : (
                    <li className="nav-item">
                        <Link to="/login"></Link>  
                    </li>
                )
            }
            
        </>
    )
}

export default NavItem
