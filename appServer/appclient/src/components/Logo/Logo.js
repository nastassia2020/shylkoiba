import React from 'react';
import Radium from 'radium';
import logoImg from '../../assets/images/unnamed.jpg';
import './Logo.css';

const logo = props => (
    <div className={'Logo'}>
        <img src={logoImg}/>
    </div>
)

export default Radium(logo)