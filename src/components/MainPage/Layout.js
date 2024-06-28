import React from 'react';
import {Grid} from '@mui/material';
import LeftSide from './LeftSidePannel/LeftSide';
import StatusBar from './MiddlePannel/StatusBar/StatusBar';
import UploadSection from './MiddlePannel/UploadSec/UploadSection';
import PostContainer from './MiddlePannel/PostContainer/PostContainer';
import RightSidePannel from './RightSidePannel/RightSidePannel';

const Layout = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={3}>
            <LeftSide/>
        </Grid>
        <Grid item xs={6} className='middle_container'>
            <StatusBar/>
            <UploadSection/>
            <PostContainer/>
        </Grid>
        <Grid item xs={3}>
            <RightSidePannel/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Layout
