import React from 'react';
import Radium from 'radium';
import './Backdrop.css'

const backdrop = props => (
    props.show ? <div className={'Backdrop'} onClick={props.clicked}></div> : null
)

export default Radium(backdrop)