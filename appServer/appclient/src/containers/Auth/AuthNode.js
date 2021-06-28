import React, { useContext, useEffect, useState } from 'react';
import Radium from 'radium';
import {useHttp} from '../../hooks/http.hook';
import './Auth.css'
import Button from '../../components/UI/Button/Button';
import { useMessage } from '../../hooks/message.hook';
import { AuthContext } from '../../context/AuthContext';

function authNode (){
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try{
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log('Data', data)
        }catch(e){

        }
    }

    const loginHandler = async () => {
        try{
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        }catch(e){

        }
    }

    return (
        <div className='Auth'>
            <div>
                <h1>Auth page</h1>
                <form className='AuthForm'>
                    <p className='Input'>
                        <input
                            placeholder='Enter your email'
                            type='text'
                            id='email'
                            name='email'
                            onChange={changeHandler}/>
                        <label htmlFor='email'>Email</label>
                    </p>
                    <p className='Input'>
                        <input
                            placeholder='Enter your password'
                            type='password'
                            id='password'
                            name='password'
                            onChange={changeHandler}/>
                        <label htmlFor='password'>Password</label>
                    </p>
                    <Button
                        type='success'
                        disabled={loading}
                        onClick={loginHandler}
                    >Enter</Button>
                    <Button
                        type='primary'
                        onClick={registerHandler}
                        disabled={loading}
                    >Register</Button>
                </form>
            </div>
        </div>
    )
}

export default Radium(authNode)