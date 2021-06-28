import React from 'react';
import Radium from 'radium';
import {NavLink} from 'react-router-dom';
import Like from '../../../../assets/images/1278105.png';
import * as audioFiles from '../../../AudioFiles/AudioFiles';
import './SongItem.css'
import '../SongsList.css'

const songItem = props => {
    const newSong = audioFiles.soundFiles.map(song => {
        return (
            <li className='SongItem' key={song.id}>
                <p onClick={() => {(console.log('song id ', song.id))}}>
                    <NavLink className='SongItemNav' to={'/musicBox/' + song.id}>{song.songName}</NavLink>
                </p>
                <audio controls><source src={song.track}/></audio>
                {props.children}
                <div className='Buttons'>
                <div className='Like'>
                    <img src={Like} /><span style={{fontSize: '22px'}}><strong>0</strong></span>
                </div>
                <button onClick={props.onClick}>ADD</button>
                <button onClick={props.removeSong}>REMOVE</button>
            </div>
            </li>
        )
    })

    return (
        <ul className='SongsList'>
            {newSong}
        </ul>
    )
}

export default Radium(songItem);