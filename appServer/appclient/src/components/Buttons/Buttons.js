import React, { Component } from 'react';
import Radium from 'radium';
import Like from '../../assets/images/1278105.png';
import './Buttons.css';

class Buttons extends Component {
    state = {
        like: 0
    }

    addLikeHandler = () => {
        return this.setState(
            {like: this.state.like + 1}
        )
    }

    render (){
        return(
            <div className='Buttons'>
                <div className='Like'>
                    <img src={Like} like={this.state.like} onClick={this.addLikeHandler}/><span style={{fontSize: '22px'}}><strong>{this.state.like}</strong></span>
                </div>
                <button onClick={this.addSong}>ADD</button>
                <button onClick={this.removeSong}>REMOVE</button>
            </div>
        )
    }
}

export default Radium(Buttons);
