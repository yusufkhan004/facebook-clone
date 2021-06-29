import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Chatprofile.css"

const Chatprofile = ({profilePic, profileName}) => {
    return (
        <div className="chatProfile">
            <Avatar className="profilepic" src= {profilePic}/>
            <p>{profileName}</p>
        </div>
    )
}

export default Chatprofile
