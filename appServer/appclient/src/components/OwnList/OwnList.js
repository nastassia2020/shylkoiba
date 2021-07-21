import React, { useState, useCallback, useEffect, useRef } from 'react';
import Radium from 'radium';
import axios from 'axios';
import './OwnList.css';

function OwnList (){
    const [name, setName] = useState('')
    const [singer, setSinger] = useState('')
    const [songs, setSongs] = useState([])
    const [file, setFile] = useState('')
    const el = useRef()

    const submit = e => {
        setFile(e.target.files[0])
    }

    const getSong = () => {
        axios
        .get('/api/songs')
        .then((response) => setSongs(response.data))
        .catch((e) => console.log(e))
    }

    // useEffect(() => {
    //     getSong()
    // }, [getSong])

    const addSong = useCallback(
        async (e) => {
            e.preventDefault()
            const formData = new FormData()
            formData.append('name', name)
            formData.append('singer', singer)
            formData.append('path', file)
    
            if(!name && !singer && !file) return null
    
            await axios
            .post('/api/songs/add', formData)
            .then((response) => {
                setSongs([...songs], response.data)
                setName('')
                setSinger('')
                getSong()
            })
            .catch((e) => console.log(e))
        }
    )

    const removeSong = useCallback(async (id) => {
        try{
            await axios.delete(`/api/songs/delete/${id}`, {id}, {
                headers: {'content-type': 'application/json'}
            })
            .then(() => getSong())
        } catch(e){
            console.log(e)
        }
    })

    const nameChangeHandler = e =>{
        setName(e.target.value)
    }

    const singerChangeHandler = e =>{
        setSinger(e.target.value)
    }

    return(
        <div className='OwnList'>
            <p>Add your file to playlist</p>
            <form encType='multipart/form-data'>
                <label htmlFor='name'>Name of song</label>
                <input type='text' name='name' value={name} placeholder='Name' onChange={nameChangeHandler}></input>
                <label htmlFor='singer'>Name of singer</label>
                <input type='text' name='singer' value={singer} placeholder='Singer' onChange={singerChangeHandler}></input>
                <input type="file" filename='path' onChange={submit}/>
                <button type='submit' onClick={addSong} className='waves-effect waves-light btn blue'>Save</button>
            </form>
            <h3>Songs list</h3>
            <div className='songsList'>
                {
                    songs.map((song, index) => {
                        return (
                            <div className='songItem' key={index}>
                                <div>{song.singer} - {song.name}</div>
                                {song.path && <audio controls><source src={song.path}/></audio>}
                                <div className='itemButtons'>
                                    <i className='material-icons blue-text'>add</i>
                                    <i className='material-icons red-text' onClick={() => removeSong(song._id)}>delete</i>
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