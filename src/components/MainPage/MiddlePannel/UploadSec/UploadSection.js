import React from 'react';
import {Avatar, Paper} from '@mui/material';
import './UploadSection.css';
import logo from '../../../../images/logo.png';
import live from '../../../../images/video.png';
import image from '../../../../images/image.png';
import feeling from '../../../../images/feelings.png';



const UploadSection = () => {
  return (
    <div>
        <Paper className='upload_container'>
            <div className='upload_top'>
                <div>
                    <Avatar className='upload_img' src={logo}></Avatar>
                </div>
                <div>
                    <input className='upload_box' type="text" placeholder="What's on your mind"/>
                </div>
            </div> 
            <div className='upload_bottom'>
                <div className='upload_tabs'>
                    <img src={live} width='35px'/>
                    <div>Live Video</div>
                </div>
                <div className='upload_tabs'>
                    <img src={image} width="35px"/>
                    <div>Photo/Video</div>
                </div>
                <div className='upload_tabs'>
                    <img src={feeling} width='35px'/>
                    <div>Feeling/Activity</div>
                </div>
            </div>
        </Paper>
    </div>
  )
}

export default UploadSection
