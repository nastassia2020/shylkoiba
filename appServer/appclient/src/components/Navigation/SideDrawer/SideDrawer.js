import React from 'react';
import Radium from 'radium';
import './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../../components/Logo/Logo';
import Backdrop from '../Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = ['SideDrawer', 'Close']
    if(props.open){
        attachedClasses = ['SideDrawer', 'Open']
    }
    return(
        <div>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo/>
                <NavigationItems/>
            </div>
        </div>
    )
}


export default Radium(sideDrawer)