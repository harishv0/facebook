import React from 'react';
import {Grid, Avatar} from "@mui/material";
import '../Navbar/Navbar.css';
import logo from '../../images/logo.png';
import home from '../../images/home.svg';
import page from '../../images/pages.svg';
import watch from '../../images/watch.svg';
import market from '../../images/market.svg';
import groups from '../../images/groups.svg';
const Navbar = () => {
  return (
    <div>
        <Grid container className='navbar_main'>
            <Grid item xs = {3}>
                <div className='navbar_leftbar'>
                    <img className='navbar_logo' src={logo} width="40px" />
                    <input className="navbar_search" type="text" placeholder='Search facebook'/>
                </div>
            </Grid>
            <Grid item xs = {6} className='navbar_container'>
                <div className='navbar_tabs active' >
                    <img src={home} height='35px' width='35px' />
                </div>
                <div classNam='navbar_tabs'>
                    <img src={page} height='35px' width='35px' />
                </div>
                <div className='navbar_tabs'>
                    <img src={watch} height='35px' width='35px' />
                </div>
                <div className='navbar_tabs'>
                    <img src={market} height='35px' width='35px' />
                </div>
                <div className='navbar_tabs'>
                    <img src={groups} height='35px' width='35px' />
                </div>
                

            </Grid>
            <Grid item xs = {3} className='navbar_right'> 
                <div className='navbar_right_tab'>
                    <Avatar className='navbar_right_profile_img' src={logo} ></Avatar>
                    <div className='navbar_right_profile_name'>Luffy</div>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Navbar
