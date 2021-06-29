import { Avatar } from '@material-ui/core'
import React, {useState} from 'react'
import "./MessageSender.css"
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import PhotoLibraryRoundedIcon from '@material-ui/icons/PhotoLibraryRounded';
import InsertEmoticonRoundedIcon from '@material-ui/icons/InsertEmoticonRounded';
const MessageSender = () => {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const Hiddenbutton = (e) => {
        e.preventDefault();

        // some database stuff

        setInput('');
        setImageUrl('');


    };

    return (
        <div className="messageSender">
            <div className="messageSender__top">

                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMYvrFt8pkrbXTx-NwqTYIJIbe4s928-C1Q&usqp=CAU"/>
                <form action="">
                    <input 
                    value={input} 
                    onChange= {(e) => setInput(e.target.value)}
                    className="messageSender__input" placeholder="What's on your mind, Yusuf?" />
                     <input 
                     value = {imageUrl}
                     onChange= {(e) => setImageUrl(e.target.value)}
                     placeholder="Image URL (Optional)" />
                     <button type="submit" onClick={Hiddenbutton}>
                         Hidden Button
                     </button>
                </form>
            </div>

            <div className="messageSender__bottom">
            <div className="messageSender__bottombuttons">
            <button className="messageSender__option">
                <VideoCallRoundedIcon style={{color: "red"}}/>
                <h3>Live Video</h3>
                </button>
                <button className="messageSender__option">
                <PhotoLibraryRoundedIcon style={{color: "#45bd62"}}/>
                <h3>Photo/Video</h3>
                </button>
                <button className="messageSender__option">
                <InsertEmoticonRoundedIcon style={{color: "#f7b928"}}/>
                <h3>Feeling/Activity</h3>
                </button>
            </div>
            </div>
        </div>
    )
}

export default MessageSender
