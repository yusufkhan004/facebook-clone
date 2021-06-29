import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Post.css"
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import CommentRoundedIcon from '@material-ui/icons/CommentRounded';
import NearMeRoundedIcon from '@material-ui/icons/NearMeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

const Post = ({ profilePic, image, username, timestamp, message}) => {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic}/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                <ThumbUpRoundedIcon />
                <p>Like</p>
                </div>
                <div className="post__option">
                <CommentRoundedIcon />
                <p>Comment</p>
                </div>
                <div className="post__option">
                <NearMeRoundedIcon />
                <p>Share</p>
                </div>
                <div className="post__option">
                <AccountCircleRoundedIcon />
                <ExpandMoreRoundedIcon />
                </div>
            </div>
        </div>
        
    )
}

export default Post
