import React, {useContext} from 'react';
import Radium from 'radium';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { AuthContext } from '../../../context/AuthContext';

function NavigationItems () {
    const auth = useContext(AuthContext)
    if(auth.isAuthenticated){
        return(
            <React.Fragment>
                <ul className='NavigationItems'>
                    <NavigationItem link='/'>MUSIC</NavigationItem>
                    <NavigationItem link='/videoBox'>VIDEO</NavigationItem>
                    <NavigationItem link='/ownList'>MY COLLECTION</NavigationItem>
                    <NavigationItem link='/logout'>LOG OUT</NavigationItem>
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