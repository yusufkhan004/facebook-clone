import React from 'react'
import Chatprofile from './Chatprofile'
import "./ChatSection.css"
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import { IconButton } from '@material-ui/core';

const ChatSection = () => {
    return (
        <div className="chat__colomn">
        <div className="chat__top">
            <p>Contacts</p>
            <div className="chat__topIcons">
            <IconButton>
            <VideoCallRoundedIcon fontSize="small"/>
            </IconButton>
            <IconButton>
            <SearchRoundedIcon fontSize="small"/>
            </IconButton>
            <IconButton>
            <MoreHorizRoundedIcon fontSize="small"/>
            </IconButton>
            </div>
        </div>
            <Chatprofile
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxDrCR5SfO2zzeBNLF9U9xbjlC8-ToAA68g&usqp=CAU"
                profileName="Joseph Johnson"
            />
            <Chatprofile 
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxDrCR5SfO2zzeBNLF9U9xbjlC8-ToAA68g&usqp=CAU"
                profileName="Joseph Johnson"
            />
            <Chatprofile 
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxDrCR5SfO2zzeBNLF9U9xbjlC8-ToAA68g&usqp=CAU"
                profileName="Joseph Johnson"
            />
            <Chatprofile 
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxDrCR5SfO2zzeBNLF9U9xbjlC8-ToAA68g&usqp=CAU"
                profileName="Joseph Johnson"
            />
            <Chatprofile 
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxDrCR5SfO2zzeBNLF9U9xbjlC8-ToAA68g&usqp=CAU"
                profileName="Joseph Johnson"
            />
            <Chatprofile 
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxDrCR5SfO2zzeBNLF9U9xbjlC8-ToAA68g&usqp=CAU"
                profileName="Joseph Johnson"
            />
            <Chatprofile 
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxDrCR5SfO2zzeBNLF9U9xbjlC8-ToAA68g&usqp=CAU"
                profileName="Joseph Johnson"
            />
            <Chatprofile 
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxDrCR5SfO2zzeBNLF9U9xbjlC8-ToAA68g&usqp=CAU"
                profileName="Joseph Johnson"
            />
            <Chatprofile 
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxDrCR5SfO2zzeBNLF9U9xbjlC8-ToAA68g&usqp=CAU"
                profileName="Joseph Johnson"
            />
        </div>
    )
}

export default ChatSection
