import React from 'react';
import Radium from 'radium';
import PostForm from './components/PostForm';
import Posts from './components/Posts'
import FetchedPosts from './components/FetchedPosts'
import './postApp.css';

function postApp (){
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <PostForm />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h3>Синхронные посты</h3>
                    <Posts />
                </div>
                <div className='col'>
                <h3>Асинхронные посты</h3>
                    <FetchedPosts />
                </div>
            </div>
        </div>
    )
}

export default Radium(postApp)