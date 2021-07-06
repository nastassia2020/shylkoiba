import React from 'react';
import Radium from 'radium';
import './OwnList.css';

function OwnList (){
    return(
        <div className='OwnList'>
            <p>Please start your own playlist!</p>
        </div>
    )
}

export default Radium(OwnList)