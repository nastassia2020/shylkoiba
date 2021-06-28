import React, { Component } from 'react';
import './Layout.css';
import Radium from 'radium';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render(){
        return(
            <div className='Layout'>
                <MenuToggle drawerToggleClicked={this.sideDrawerToggleHandler} isAuthenticated={this.props.isAuthenticated}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                    <main>
                        {this.props.children}
                    </main>
            </div>
        )
    }
}

export default Radium(Layout);