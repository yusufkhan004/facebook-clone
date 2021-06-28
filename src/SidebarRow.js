import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarRow.css";

const SidebarRow = ({src,title}) => {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src}/>}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow;
