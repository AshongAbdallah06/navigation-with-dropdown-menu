import React, { useState } from 'react';
import Features from './Features';
import Company from './Company';
import Careers from './Careers';
import About from './About';
import Buttons from './Buttons';
import useToggle from '../hooks/useToggle';

const RightNav = () => {
    const [isShowing, handleClick] = useToggle();

    return (
        <>
            <Buttons />
            <nav className="mobile-right">
                <div className="hambuger-icon" onClick={handleClick}>
                    <span className="sticks"></span>
                    <span className="sticks"></span>
                    <span className="sticks"></span>    
                </div>
            </nav>

            
            {isShowing &&
                <>
                    <div 
                        className={`modal-overlay ${isShowing && 'modal-animation'}`}>
                    </div>

                    <aside 
                        className={`${isShowing && 'animation'}`}>

                        <div className="close-icon" onClick={handleClick}>
                            <span className="sticks close-sticks"></span>
                            <span className="sticks close-sticks"></span>
                            <span className="sticks close-sticks"></span>    
                        </div>

                        <Features />
                        <Company />
                        <Careers />
                        <About />

                        <nav className="buttons">
                            <p className="login">Login</p>
                            <button className="register">Register</button>
                        </nav>
                    </aside> 
                </>
            }
        </>
    )
}

export default RightNav