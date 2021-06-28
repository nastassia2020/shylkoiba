import React from 'react';
import Radium from 'radium';
import './NavigationItem.css';

const navigationItem = (props) => (
    <li className='NavigationItem'>
        <a href={props.link}
            className={props.active ? 'active' : null}>
            {props.children}
        </a>
    </li>

)

export default Radium(navigationItem)