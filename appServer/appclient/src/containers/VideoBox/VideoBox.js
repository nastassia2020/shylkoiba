import React, { Component } from 'react';
import Radium from 'radium';
import './VideoBox.css';
import AllVideo from '../../components/video/AllVideo';
import * as videoFiles from '../../components/VideoFiles/VideoFiles';

class VideoBox extends Component{
    state = {
        isChecked: false,
        videoList: [
            {
                allVideo: [
                    {track: videoFiles.video3.track, videoName: videoFiles.video3.videoName, id: 3},
                ]
            }
        ]
    }

    onVideoClickHandler = videoId => {
        console.log('Video is clicked: ', videoId);

        let video = this.state.videoList[0].allVideo

        if(video.id === videoId){
            // this.setState({
            //     isChecked: true,
            //     videoList: this.state.videoList.push(video.id),
            // })
            console.log('HELLOOOOOO')
        } else {console.log('NOOOOO')}
    }

    render(){
        return(
            <div className='VideoBox'>
                <div className='VideoBoxWrapper'>
                    <h1>VIDEO</h1>
                        <AllVideo
                            allVideo={this.state.videoList[0].allVideo}
                            videoName={this.state.videoList[0].videoName}
                            onVideoClick={this.onVideoClickHandler}>
                        </AllVideo>
                </div>
            </div>
        )
    }
}

export default Radium(VideoBox);