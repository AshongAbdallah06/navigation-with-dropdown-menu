import React, { useState } from 'react';
import todo from '../images/icon-todo.svg';
import calendar from '../images/icon-calendar.svg';
import reminders from '../images/icon-reminders.svg';
import planning from '../images/icon-planning.svg';
import arrowDown from '../images/icon-arrow-down.svg';
import useToggle from '../hooks/useToggle';


const Features = () => {
    const [dropDown, handleClick] = useToggle();
    return (
        <div className="dropdown-cont">
            <p className="label">Features</p>
            <div className="arrow-down" onClick={handleClick}>
                <img src={arrowDown} alt="" />
            </div>

            { dropDown && 
                <>
                    <div className="dropdown-list">
                        <div>
                            <img src={todo} alt="todo-list" className='dropdown-icons' />
                            <p className='dropdown-text'>Todo List</p>
                        </div>
                        <div>
                            <img src={calendar} alt="todo-list" className='dropdown-icons' />
                            <p className='dropdown-text'>Calendar</p>
                        </div>
                        <div>
                            <img src={reminders} alt="todo-list" className='dropdown-icons' />
                            <p className='dropdown-text'>Reminders</p>
                        </div>
                        <div>
                            <img src={planning} alt="todo-list" className='dropdown-icons' />
                            <p className='dropdown-text'>Planning</p>
                        </div>
                    </div> 
                </>
            }

        </div>
    )
}

export default Features