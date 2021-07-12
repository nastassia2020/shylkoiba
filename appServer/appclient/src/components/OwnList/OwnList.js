import React, { useState, useContext, useCallback } from 'react';
import Radium from 'radium';
import axios from 'axios'
import './OwnList.css';

function OwnList (){
    const [name, setName] = useState('')
    const [singer, setSinger] = useState('')

    const addSong = useCallback(async () => {
        try{
            await axios.post('/api/songs/add', {name, singer}, {
                headers: {'Content-Type': 'application/json'}
            })
            .then((res) => console.log(res))
        } catch(e){
            console.log(e)
        }
    }, [])

    const submit = e => {
        e.preventDefault()
    }

    const nameChangeHandler = e =>{
        setName(e.target.value)
    }

    const singerChangeHandler = e =>{
        setSinger(e.target.value)
    }

    return(
        <div className='OwnList'>
            <p>Add your file to playlist</p>
            <form onSubmit={submit}>
                <label htmlFor='name'>Name of song</label>
                <input type='text' name='name' placeholder='Name' value={name} onChange={nameChangeHandler}></input>
                <label htmlFor='singer'>Name of singer</label>
                <input type='text' name='singer' placeholder='Singer' value={singer} onChange={singerChangeHandler}></input>
                <button type='submit' onClick={addSong} className='waves-effect waves-light btn blue'>Save</button>
            </form>
            <h3>Songs list</h3>
            <div className='songsList'>
                <div className='songItem'>
                    <div>Text(name and singer)</div>
                    <div className='itemButtons'>
                        <i className='material-icons blue-text'>add</i>
                        <i className='material-icons red-text'>delete</i>
                        <i className='material-icons orange-text'>star</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Radium(OwnList)