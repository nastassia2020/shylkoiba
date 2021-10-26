import React, { useEffect, useState, useContext, useCallback } from 'react';
import Radium from 'radium';
import axios from 'axios';
import './OwnList.css';

const ListItem = (props) => {
    const [name, setName] = useState('')
    const [singer, setSinger] = useState('')
    const [file, setFile] = useState('')
    const [text, setText] = useState('')
    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get(`/api/songs/${props.match.params.id}`)
        .then(res => [
            setName(res.data.name),
            setSinger(res.data.singer),
            setFile(res.data.path)
        ])
        .catch((e) => console.log(e))
    }, [props])

    const addComment = useCallback(
        async () => {
            const formData = new FormData()
            formData.append('comment', text)

            if(!text) return null

            await axios
            .post(`/api/songs/${props.match.params.id}/comments`, formData)
            .then((response) => {
                setComments([...comments], response.data)
            })
            .catch((e) => console.log(e))
        }, [text]
    )


    return (
        <div className='OwnList'>
            <h2>{singer} - {name}</h2>
            {file && <audio controls><source src={file}/></audio>}
            <form style={{display: 'flex', flexDirection: 'column', marginTop: '10px', marginLeft: '0'}}
                onSubmit={e => e.preventDefault()}
            >
                <label htmlFor='comment' style={{color: 'white', fontSize: '14px', marginTop: '10px'}}>Your comment</label>
                <input name='comment' type='text' value={text} onChange={e => setText(e.target.value)}/>
            </form>
            <button type='submit' className='waves-effect waves-light btn blue commentBtn' onClick={addComment}>Save comment</button>
            <div>
                <p>Comment</p>
            </div>
        </div>
    )
}

export default Radium(ListItem)