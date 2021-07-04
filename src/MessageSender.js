import { Avatar } from '@material-ui/core'
import React, {useState} from 'react'
import "./MessageSender.css"
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import PhotoLibraryRoundedIcon from '@material-ui/icons/PhotoLibraryRounded';
import InsertEmoticonRoundedIcon from '@material-ui/icons/InsertEmoticonRounded';
import { useStateValue } from './StateProvider';
import db from './firebase'
import firebase from 'firebase';


const MessageSender = () => {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [{user}, dispatch] = useStateValue();

    const Hiddenbutton = (e) => {
        e.preventDefault();

        // some database stuff

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        })
        setInput('');
        setImageUrl('');


    };

    return (
        <div className="messageSender">
            <div className="messageSender__top">

                <Avatar src={user.photoURL} />
                <form action="">
                    <input 
                    value={input} 
                    onChange= {(e) => setInput(e.target.value)}
                    className="messageSender__input1" 
                    placeholder={`What's on your mind, ${user.displayName}?`}    
                    />
                    <input 
                    value = {imageUrl}
                    onChange= {(e) => setImageUrl(e.target.value)}
                    className="messageSender__input2" 
                    placeholder="URL (Optional)" />
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
                <button className="messageSender__option hidden_messagesender">
                <InsertEmoticonRoundedIcon style={{color: "#f7b928"}}/>
                <h3>Feeling/Activity</h3>
                </button>
            </div>
            </div>
        </div>
    )
}

export default MessageSender
