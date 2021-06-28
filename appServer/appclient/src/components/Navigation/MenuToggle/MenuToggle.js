import React from 'react';
import './MenuToggle.css';
import Radium from 'radium';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const MenuToggle = props => {
    return(
       <header className={'MenuToggle'}>
           <DrawerToggle clicked={props.drawerToggleClicked}/>
           <Logo/>
           <nav className='DesktopOnly'>
               <NavigationItems/>
            </nav>
       </header>
    )
}

export default Radium(MenuToggle);