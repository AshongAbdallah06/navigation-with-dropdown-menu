import React from 'react';
import arrowDown from '../images/icon-arrow-down.svg';
import useToggle from '../hooks/useToggle';


const Company = () => {
    const [dropDown, handleClick] = useToggle();
    return (
        <div className="dropdown-cont">
            <p className="label">Company</p>
            <div className="arrow-down" onClick={handleClick}>
                <img src={arrowDown} alt="" />
            </div>


            { dropDown && 
                <>
                    <div className="dropdown-list">
                        <div>
                            <p className='dropdown-text'>History</p>
                        </div>
                        <div>
                            <p className='dropdown-text'>Our Team</p>
                        </div>
                        <div>
                            <p className='dropdown-text'>Blog</p>
                        </div>
                    </div>   
                </>
            }
        </div>
    )
}

export default Company