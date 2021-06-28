import React, {Component} from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';
import {createPost} from '../actions';
import './Post.css';

class PostForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()
        const {title} = this.state
        if(!title.trim()){
            return
        }
        const newPost = {
            title, id: Date.now().toString()
        }
        this.props.createPost(newPost)
        this.setState({title: ''})
    }

    changeInputHandler = event => {
        event.persist()
        this.setState( prev => ({...prev, ...{
            [event.target.name]: event.target.value
        }}))
    }

    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <div className='form'>
                    <label htmlFor='title'>Заголовок поста</label>
                    <input
                        type='text'
                        className='input'
                        id='title'
                        name='title'
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className='success' type='submit'>Создать</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost
}

export default connect(null, mapDispatchToProps)(Radium(PostForm))