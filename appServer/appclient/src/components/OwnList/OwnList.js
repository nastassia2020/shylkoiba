import React, {Component} from 'react';
import Radium from 'radium';
import SongItem from '../Songs/SongsList/SongItem/SongItem';
import './OwnList.css';

class OwnList extends Component {
    state = {
        items: []
    }

    listItems(){
        this.setState({
            items: this.state.items.push(
                <SongItem items={this.state.items}/>
            )
        })
        console.log('ADDDD')
    }

    render(){
        return(
            this.state.items.length === 0 ?
            <div className='OwnList'>
                <p>Please start your own playlist!</p>
            </div>:
            <div className='OwnList'>
                <h1>MY COLLECTION</h1>
                {this.state.items}
            </div>
        )
    }
}

export default Radium(OwnList)