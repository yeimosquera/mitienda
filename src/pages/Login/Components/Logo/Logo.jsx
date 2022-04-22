import React from "react";

import logo from "../../../../assets/img/logo.png";
import './Logo.css';

const Logo = () => {
    return (
        <div className='logo'>
            <img className="logoimg" src={logo} alt="" />           
        </div>
    )
}

export default Logo;
