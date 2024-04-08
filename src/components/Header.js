import React from 'react';
import logo from '../images/logo.svg';
import RightNav from './RightNav';
import LeftNav from './LeftNav';


const Header = () => {
    return (
        <header>
            <img src={logo} alt="" className="logo" />

            <LeftNav />

            <RightNav />
        </header>
    )
}

export default Header