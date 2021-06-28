import React from 'react';
import Radium from 'radium';
import './Button.css';

const Button = props => {
    const cls = [
        'Button',
        [props.type]
    ]

    return(
        <button
            onClick={props.onClick}
            className={cls.join(' ')}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Radium(Button)