import React, { useState } from 'react'
import StoryReel from './StoryReel'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'


const Feed = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ( { id: doc.id, data: doc.data() })))
        );
    }, []);

    return (
        <div className="feed">
        <StoryReel />
        <MessageSender />
        {
            posts.map((post) => (
                <Post 
                    key={post.id}
                    profilePic={post.profilePic}
                    message={post.message}
                    timestamp={post.timestamp}
                    username={post.username}
                    image={post.image}
                />
            ))
        }
        
        {/* <Post 
            profilePic="https://i.pinimg.com/originals/7d/65/ef/7d65ef04f5fbe7cfa26257d8c3cc2a48.jpg"
            image="https://i.imgflip.com/2kuh6f.jpg"
            username="Yusuf"
            timestamp="12:30:05 pm"
            message="Hello world, this is the first post of facebook clone for testing pusrpose, this is to test another liine for this post description part and i thnk it shud work"
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
        /> */}


            {/* storyReel */}
            {/* MessageSender */}
        </div>
    )
}

export default Feed
