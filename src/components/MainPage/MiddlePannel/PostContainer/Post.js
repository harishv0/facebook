import { Paper, Avatar } from '@mui/material'
import React from 'react';
import './PostContainer.css'
import '../UploadSec/UploadSection.css'
import logo from '../../../../images/logo.png'
import post from '../../../../images/pic1.jpeg'
import like from '../../../../images/like.png'
import likeButton from "../../../../images/likebutton.png"
import commentButton from "../../../../images/comment.png"
import shareButton from "../../../../images/share.png"


const Post = ({object}) => {
    const isPostAvailable = (data) => {
        return data == "" ? false : true;
    }
  return (
    <div>
        <Paper className='post_container'>
            {/* header */}
            <div className='post_header'>
                <div className="post_header_img">
                    <Avatar className="post_img" src={logo}></Avatar>
                </div>
                <div className='post_header_text'>{object.user_name}</div>
            </div>
            {/* description */}
            <div className='post_description'>
                {object.description}
            </div>
            {/* image */}
            <div className='post_image'>
                {isPostAvailable(object.post_img) ? <img src={object.post_img} width="600px" /> : <span></span>}
            </div> 
            {/* like count */}
            <div className='post_like_container'>
                <div className='post_like'>
                    <img className="post_like_img" src={like} />
                </div>
                <div className='post_like_count'>{object.like}</div>
            </div>
            {/* like and share and comment */}
            <div className='post_like_share'>
                <div className='post_like_tabs'>
                    <div className='post_like_tabs_first'>
                        <img className="post_like_button_img"src={likeButton} />
                    </div>
                    <div className='post_like_button_text'>
                        Like
                    </div>
                </div>
                <div className='post_like_tabs'>
                    <div className='post_like_tabs_first'>
                        <img className="post_like_button_img"src={commentButton} />
                    </div>
                    <div className='post_like_button_text'>
                        Comment
                    </div>
                </div>
                <div className='post_like_tabs'>
                    <div className='post_like_tabs_first'>
                        <img className="post_like_button_img"src={shareButton} />
                    </div>
                    <div className='post_like_button_text'>
                        Share
                    </div>
                </div>
            </div>
            {/* comment */}
            <div className='upload_comment'>
                <div className='upload_top'>
                    <div>
                        <Avatar className='upload_img' src={logo}></Avatar>
                    </div>
                    <div>
                        <input className='upload_box' type="text" placeholder="Comment"/>
                    </div>
                </div> 
            </div>


        </Paper>
    </div>
  )
}

export default Post
