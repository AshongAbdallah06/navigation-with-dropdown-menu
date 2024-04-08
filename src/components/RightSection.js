import React from 'react';
import heroImage from '../images/image-hero-desktop.png';
import databiz from '../images/client-databiz.svg';
import audiophile from '../images/client-audiophile.svg';
import meet from '../images/client-meet.svg';
import clientMaker from '../images/client-maker.svg';

const RightSection = () => {
    return (
        <section class="right-section">
            <div class="hero-image-container">
                <img src={heroImage} class="hero-image" alt="" />
            </div>

            <div class="text-container-right">
                <h1>Make remote work</h1>
                <p class="subtext">
                    Get your team in sync, no matter your<br /> location.  Streamline processes, create<br /> team rituals, and watch  productivity soar.                    
                </p>
                <button class="learn-more">Learn more</button>

                <div class="bottom">
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