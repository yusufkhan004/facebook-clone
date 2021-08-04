import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Story.css"

const Story = ({image, profileSrc, title}) => {
    return (
        <div className="bgimage"
        style={{backgroundImage: `url(${image})`}}
        >
            <div 
        className="story">
            <Avatar className="story__avatar" src={profileSrc} />
            <h4>{title}</h4>
        </div>
        </div>
    )
}

export default Story
