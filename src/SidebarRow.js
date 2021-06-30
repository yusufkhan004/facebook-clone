import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarRow.css";

const SidebarRow = ({src,title,id}) => {

    return (
        <div className="sidebarRow" id={id} >
            {src && <Avatar src={src} />}
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow;
