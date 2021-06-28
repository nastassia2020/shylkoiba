import React, { Component } from 'react';
import Radium from 'radium';
import {NavLink} from 'react-router-dom';
import './MusicBox.css';

class MusicBox extends Component{
    state ={
        links: [
            {
                linkName: 'Список всех треков',
                id: 1,
            },
            {
                linkName: 'Самые популярные треки',
                id: 2,
            },
            {
                linkName: 'Треки с наибольшим количеством лайков',
                id: 3,
            }
        ]
    }

    renderSongs(){
        return this.state.links.map(link => {
            return(
                <li className='MusicBoxNavLink'
                    key={link.id}
                >
                    <NavLink className='MusicBoxNavLinkItem' to={'/musicBox/' + link.id}>
                        {link.linkName}
                    </NavLink>
                </li>
            )
        })
    }

    render(){
        return(
            <div className='MusicBox'>
                <div className='MusicBoxWrapper'>
                    <h1>MUSIC</h1>
                    <ul>
                        {this.renderSongs()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Radium(MusicBox);