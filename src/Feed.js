import React from 'react'
import StoryReel from './StoryReel'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'


const Feed = () => {
    return (
        <div className="feed">
        <StoryReel />
        <MessageSender />
        <Post 
            profilePic="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"
            image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            username="Yusuf"
            timestamp="12:30:05 pm"
        />
        <Post 
            profilePic="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"
            image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            username="Yusuf"
            timestamp="12:30:05 pm"
        />
        <Post 
            profilePic="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"
            image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            username="Yusuf"
            timestamp="12:30:05 pm"
        />


            {/* storyReel */}
            {/* MessageSender */}
        </div>
    )
}

export default Feed
