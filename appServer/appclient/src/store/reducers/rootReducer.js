import {combineReducers} from 'redux'
import authReducer from './auth'
import {postsReducer} from './postsReducer'

export default combineReducers({
    auth: authReducer,
    posts: postsReducer
})