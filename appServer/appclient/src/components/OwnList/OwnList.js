import React, { useState, useCallback, useEffect } from 'react';
import Radium from 'radium';
import axios from 'axios'
import './OwnList.css';

function OwnList (){
    const [name, setName] = useState('')
    const [singer, setSinger] = useState('')
    const [songs, setSongs] = useState([])

    const addSong = useCallback(async () => {
        if(!name && !singer) return null
        try{
            await axios.post('/api/songs/add', {name, singer}, {
                headers: {'content-type': 'application/json'}
            })
            .then((response) => {
                setSongs([...songs], response.data)
                setName('')
                setSinger('')
                getSong()
            })
        } catch(e){
            console.log(e)
        }
    }, [name, singer, songs, getSong])

    const getSong = useCallback(async () => {
        try{
            await axios.get('/api/songs', {
                headers: {'content-type': 'application/json'}
            })
            .then((response) => setSongs(response.data))
        }catch(e){
            console.log(e)
        }
    }, [])

    useEffect(() => {
        getSong()
    }, [getSong])

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
                <input type='text' name='name' value={name} placeholder='Name' onChange={nameChangeHandler}></input>
                <label htmlFor='singer'>Name of singer</label>
                <input type='text' name='singer' value={singer} placeholder='Singer' onChange={singerChangeHandler}></input>
                <button onClick={addSong} className='waves-effect waves-light btn blue'>Save</button>
            </form>
            <h3>Songs list</h3>
            <div className='songsList'>
                {
                    songs.map((song, index) => {
                        return (
                            <div className='songItem' key={index}>
                                <div>{song.singer} - {song.name}</div>
                                <div className='itemButtons'>
                                    <i className='material-icons blue-text'>add</i>
                                    <i className='material-icons red-text'>delete</i>
                                    <i className='material-icons orange-text'>star</i>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Radium(OwnList)