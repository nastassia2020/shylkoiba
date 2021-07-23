import React, { useEffect, useState } from 'react';
import Radium from 'radium';
import axios from 'axios';
import './OwnList.css';

const ListItem = (props) => {
    const [name, setName] = useState('')
    const [singer, setSinger] = useState('')
    const [file, setFile] = useState('')

    useEffect(() => {
        axios.get(`/api/songs/${props.match.params.id}`)
        .then(res => [
            setName(res.data.name),
            setSinger(res.data.singer),
            setFile(res.data.path)
        ])
        .catch((e) => console.log(e))
    }, [props])

    return (
        <div className='OwnList'>
            <h2>{singer} - {name}</h2>
            {file && <audio controls><source src={file}/></audio>}
            <label htmlFor='comment' style={{color: 'white', fontSize: '14px'}}>Your comment</label>
            <textarea name='comment'/>
            <button type='submit' className='waves-effect waves-light btn blue commentBtn'>Save comment</button>
        </div>
    )
}

export default Radium(ListItem)