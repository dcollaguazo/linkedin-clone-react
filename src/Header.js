import React from 'react'
import "./Header.css"
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import logo from "./images/LI-In-Bug.png";


function Header() {
    return (
        <div className="header">
            {/* <h1>This is the Header</h1> */}
            <div className="header_left">
                <img src={logo} alt="" />
                <div className="header_search">
                    <SearchIcon />
                    <input type="text"/>
                </div>

            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messages"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4E03AQERdYYyeL1fOw/profile-displayphoto-shrink_800_800/0/1553634236731?e=1641427200&v=beta&t=fAYxIOCDrR6ghY8IeZjKMAHOkTV9Uzyq6f72uzlXAzg" title="me"/>

            </div>
        </div>
    )
}

export default Header
