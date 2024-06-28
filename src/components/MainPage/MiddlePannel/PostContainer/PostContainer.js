import React from 'react'
import { useState} from 'react'
import Post from './Post'
import './PostContainer.css'

const PostContainer = () => {
    const[postData, setPostData] = useState([
        {
            "post_ID": 1,
            "user_ID": 12345678,
            "user_img": "url..",
            "user_name": "Luffy",
            "description": "loved this wallpaper",
            "post_img": "",
            "like": "25"
        },
        {
            "post_ID": 2,
            "user_ID": 12345679,
            "user_img": "url..",
            "user_name": "Zoro",
            "description": "I lost again",
            "post_img": "url of the image",
            "like": "15"
        },
        {   "post_ID": 3,
            "user_ID": 12345677,
            "user_img": "url..",
            "user_name": "Sanji",
            "description": "I reach the All-Blue",
            "post_img": "",
            "like": "25"
        }
    ]);

  return (
    <div>
        {
            postData.map((item) => (
                <Post object = {item}/>
                ))
        }
    </div>
  )
}

export default PostContainer
