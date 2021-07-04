import { Avatar } from '@material-ui/core'
import React,{useState} from 'react'
import "./Post.css"
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import CommentRoundedIcon from '@material-ui/icons/CommentRounded';
import NearMeRoundedIcon from '@material-ui/icons/NearMeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

const Post = ({ profilePic, image, username, timestamp, message}) => {

    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);

    // const likebutton = () => {
    //     if(like === false){
    //         setCounter(count+1)
    //         setLike(true)
    //     }else{
    //         setCounter(count-1)
    //         setLike(false)
    //     }
    //     return count;
    // }

    const handleLike = (e) => {
        e.preventDefault();
        if(like === false){
            setCount(count+1)
            setLike(true)
        }else{
            setCount(count-1)
            setLike(false)
        }
        return count;
    }
    

    // console.log(handleLike);

    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic}/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <button className="post__option"
                onClick = {e => handleLike(e)}
                // onClick={ likebutton }
                >
                <ThumbUpRoundedIcon />
                <p>Like</p>
                <p>{count}</p>
                </button>
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
