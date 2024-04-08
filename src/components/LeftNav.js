import React from 'react';
import Features from './Features';
import Company from './Company';
import Careers from './Careers';
import About from './About';


const LeftNav = () => {
    return (
        <nav className="left">
            <Features />

            <Company />

            <Careers />

            <About />
        </nav>
    )
}

export default LeftNav