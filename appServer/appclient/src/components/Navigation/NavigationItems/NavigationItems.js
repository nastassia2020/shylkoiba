import React, {useContext} from 'react';
import Radium from 'radium';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { AuthContext } from '../../../context/AuthContext';
import { useHistory } from 'react-router-dom';

function NavigationItems () {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const logoutHandler = (event) => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    if(auth.isAuthenticated){
        return(
            <React.Fragment>
                <ul className='NavigationItems'>
                    <NavigationItem link='/'>MUSIC</NavigationItem>
                    <NavigationItem link='/videoBox'>VIDEO</NavigationItem>
                    <NavigationItem link='/ownList'>MY COLLECTION</NavigationItem>
                    {/* <NavigationItem link='/logout'>LOG OUT</NavigationItem> */}
                    <li><a href='/' onClick={logoutHandler}>LOGOUT</a></li>
                </ul>
            </React.Fragment>
        )
    } else {
        return(
            <React.Fragment>
                <ul className='NavigationItems'>
                    <NavigationItem link='/'>MUSIC</NavigationItem>
                    <NavigationItem link='/videoBox'>VIDEO</NavigationItem>
                    <NavigationItem link='/auth'>LOG IN</NavigationItem>
                </ul>
            </React.Fragment>
        )
    }
}

export default Radium(NavigationItems)