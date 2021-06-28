import React from 'react';
import Post from './Post';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../actions';
import './Post.css';

export default () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => {
        return state.posts.fetchedPosts
    })

    if(!posts.length){
        return <button
            className='primary'
            onClick={() => dispatch(fetchPosts())}
        >Загрузить </button>
    }
    return posts.map(post => <Post post={post} key={post.id}/>)
}