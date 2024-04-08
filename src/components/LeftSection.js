import React from 'react';
import heroImageMobile from '../images/image-hero-mobile.png';
import databiz from '../images/client-databiz.svg';
import audiophile from '../images/client-audiophile.svg';
import meet from '../images/client-meet.svg';
import clientMaker from '../images/client-maker.svg';

const LeftSection = () => {
    return (
        <section className="left-section">
            <div className="hero-image-container-left">
                <img src={heroImageMobile} className="hero-image" alt="hero-desktop" />
            </div>

            <div className="text-container">
                <h1>Make remote work</h1>
                <p className="subtext">
                    Get your team in sync, no matter your location. <br /> Streamline processes, create team rituals, and watch <br /> productivity soar.                    
                </p>
                <button className="learn-more">Learn more</button>

                <div className="bottom">
                    <img src={databiz} alt="" />
                    <img src={audiophile} alt="" />
                    <img src={meet} alt="" />
                    <img src={clientMaker} alt="" />
                </div>              
            </div>
        </section>
    )
}

export default LeftSection