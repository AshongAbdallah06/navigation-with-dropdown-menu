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
            <nav class="mobile-right">
                <div class="hambuger-icon" onClick={handleClick}>
                    <span class="sticks"></span>
                    <span class="sticks"></span>
                    <span class="sticks"></span>    
                </div>
            </nav>

            
            {isShowing &&
                <>
                    <div 
                        className={`modal-overlay ${isShowing && 'modal-animation'}`}>
                    </div>

                    <aside 
                        className={`${isShowing && 'animation'}`}>

                        <div class="close-icon" onClick={handleClick}>
                            <span class="sticks close-sticks"></span>
                            <span class="sticks close-sticks"></span>
                            <span class="sticks close-sticks"></span>    
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