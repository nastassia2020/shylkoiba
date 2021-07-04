import React from 'react';
import Layout from './hoc/Layout/Layout';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import MusicBox from './containers/MusicBox/MusicBox';
import VideoBox from './containers/VideoBox/VideoBox';
import Songs from './components/Songs/Songs';
import SongItem from './components/Songs/SongsList/SongItem/SongItem';
import OwnList from './components/OwnList/OwnList';
import Auth from './containers/Auth/AuthNode';
// import {connect} from 'react-redux';
// import Logout from './components/logout/Logout';
import {useAuth} from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';

function App ()  {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token

  if(isAuthenticated){
    return (
      <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
        <Layout>
          <BrowserRouter>
            <Switch>
              <Route path='/' exact component={MusicBox}/>
              <Route path='/videoBox' component={VideoBox}/>
              <Route path='/musicBox/:id' component={Songs}/>
              <Route path='/musicBox/' component={SongItem}/>
              <Route path='/videoBox/:id' component={VideoBox}/>
              <Route path='/ownList' component={OwnList}/>
              {/* <Route path='/logout' component={Logout}/> */}
              <Redirect to={'/'}/>
            </Switch>
          </BrowserRouter>
      </Layout>
      </AuthContext.Provider>
      )
  } else {
    return (
      <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
        <Layout>
          <BrowserRouter>
            <Switch>
              <Route path='/' exact component={MusicBox}/>
              <Route path='/videoBox' component={VideoBox}/>
              <Route path='/auth' component={Auth}/>
              <Route path='/musicBox/:id' component={Songs}/>
              <Route path='/musicBox/' component={SongItem}/>
              <Route path='/videoBox/:id' component={VideoBox}/>
              <Redirect to={'/'}/>
            </Switch>
          </BrowserRouter>
        </Layout>
      </AuthContext.Provider>
      )
  }
  
}

// function mapStateToProps(state){
//   return {
//     isAuthenticated: !!state.auth.token
//   }
// }

// function mapDispatchToProps(dispatch){
//   return {
//     autoLogin: () => dispatch(autoLogin())
//   }
// }

export default App;

