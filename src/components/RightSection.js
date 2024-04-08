import React from 'react';
import heroImage from '../images/image-hero-desktop.png';
import databiz from '../images/client-databiz.svg';
import audiophile from '../images/client-audiophile.svg';
import meet from '../images/client-meet.svg';
import clientMaker from '../images/client-maker.svg';

const RightSection = () => {
    return (
        <section className="right-section">
            <div className="hero-image-container">
                <img src={heroImage} className="hero-image" alt="" />
            </div>

            <div className="text-container-right">
                <h1>Make remote work</h1>
                <p className="subtext">
                    Get your team in sync, no matter your<br /> location.  Streamline processes, create<br /> team rituals, and watch  productivity soar.                    
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

export default RightSection