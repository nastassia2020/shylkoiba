import React from 'react';
import Layout from './hoc/Layout/Layout';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import MusicBox from './containers/MusicBox/MusicBox';
import Auth from './containers/Auth/AuthNode';
import {useAuth} from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import Disk from './components/Disk/Disk';

function App ()  {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token

  if(isAuthenticated){
    return (
      <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
        <Layout>
          <BrowserRouter>
            <Switch>
              {/* <Route path='/' exact component={MusicBox}/> */}
              <Route path='/'exact component={Disk}/>
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
              <Route path='/auth' component={Auth}/>
              <Redirect to={'/auth'}/>
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

