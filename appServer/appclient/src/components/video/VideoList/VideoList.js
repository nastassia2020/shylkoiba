import React from 'react';
import Radium from 'radium';
import './VideoList.css';
import VideoItem from './VideoItem/VideoItem';

const videoList = props => {
    return(
        <ul className='VideoList'>
            {props.allVideo.map((video, index) => {
                return(
                    <VideoItem
                        key={index}
                        video={video}
                        onVideoClick={props.onVideoClick}
                    />
                )
            })}
        </ul>
    )
}

export default Radium(videoList)