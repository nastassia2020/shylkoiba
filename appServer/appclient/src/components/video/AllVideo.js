import React from 'react';
import Radium from 'radium';
import VideoList from './VideoList/VideoList';
import './AllVideo.css';

const video = (props) => {
    return (
        <div className='AllVideo'>
            <h2>Самые популярные видео</h2>
            <VideoList
                allVideo={props.allVideo}
                onVideoClick={props.onVideoClick}
            />
        </div>
    )
}

export default Radium(video)