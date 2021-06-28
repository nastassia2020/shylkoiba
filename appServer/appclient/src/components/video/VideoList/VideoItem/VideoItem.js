import React from 'react';
import Radium from 'radium';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Buttons from '../../../Buttons/Buttons';
import './VideoItem.css'

const videoItem = props => {
    return (
        <li className='VideoItem'>
            <p onClick={() => props.onVideoClick(props.video.id)}>{props.video.videoName}</p>
            <Video controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
             autoPlay loop muted width='600px'><source src={props.video.track}/></Video>
            {/* <Buttons/> */}
        </li>
    )
}

export default Radium(videoItem);