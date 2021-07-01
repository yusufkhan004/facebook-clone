import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FlagRoundedIcon from '@material-ui/icons/FlagRounded';
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
// import Avatar from '@material-ui/core/Avatar';
import {Avatar,IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import { useStateValue } from './StateProvider';
import {Icon, InlineIcon } from '@iconify/react'
import facebookMessenger from '@iconify-icons/fa-brands/facebook-messenger';


const Header = () => {

    const [{user}, dispatch] = useStateValue();

    return (
        <div className="header">
        <div className="header__left">
            <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="" />
            <div className="header__input">
                <SearchIcon />
                <input 
                placeholder="Search Facebook" type="text" />
            </div>
        </div>
        <div className="header__center">
            <div className="header__option
            header__option--active">
                <HomeRoundedIcon fontSize="large" />
            </div>
            {/* <div className="header__option active">
                <FlagRoundedIcon fontSize="large" />
            </div> */}
            <div className="header__option">
                <SubscriptionsRoundedIcon fontSize="large" />
            </div>
            <div className="header__option">
                <SupervisorAccountRoundedIcon fontSize="large" />
            </div>
            {/* <div className="header__option">
                <SupervisedUserCircleOutlinedIcon fontSize="large" />
            </div> */}
        </div>
        <div className="header__right">
                <IconButton className="header__right_icon">
                <AddIcon />
                </IconButton>

                <IconButton className="header__right_icon">
                <Icon icon={facebookMessenger} />
                </IconButton>
                
                <IconButton className="header__right_icon">
                <NotificationsActiveRoundedIcon />
                </IconButton>
            <div className="header__info">
                <Avatar src={user.photoURL} />
                {/* <h4>{user.displayName} </h4> */}
            </div>
        </div>
        </div>
    )
}

export default Header


// const  = styled.div `