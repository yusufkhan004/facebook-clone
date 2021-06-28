import { Avatar } from '@material-ui/core'
import React from 'react'

const MessageSender = () => {
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form action="">
                    <input placeholder="What's on your mind, Yusuf?" 
                    type="text"
                     />
                     <input placeholder="Image URL (Optional)" />
                </form>
            </div>

            <div className="messageSender__bottom">

            </div>
        </div>
    )
}

export default MessageSender
