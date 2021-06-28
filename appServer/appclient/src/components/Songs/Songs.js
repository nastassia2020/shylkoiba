import React, {Component} from 'react';
import Radium from 'radium';
import axios from 'axios';
import SongItem from '../Songs/SongsList/SongItem/SongItem';
import './Songs.css';

class Song extends Component {

    componentDidMount() {
        axios.get('https://music-app-c9898-default-rtdb.europe-west1.firebasedatabase.app/song.json').then(response => {
            console.log(response)
        })
    }

    listItems(key){
        const arr = [];
        const list = arr.push(<SongItem key={key}/>)
        console.log('ADDDD', list)
    }

    render () {
        return (
            <div className='Wrapper'>
                <div className='Songs'>
                    <h2>Список всех треков</h2>
                    <SongItem onClick={this.listItems}/>
                </div>
            </div>
        )
    }
}

export default Radium(Song)