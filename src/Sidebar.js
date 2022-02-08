import React from 'react';
import './Sidebar.css'
import { Avatar } from '@mui/material';
import background from "./images/IMG_4551.jpeg";

function Sidebar() {
    const recentItem = (topic) => {
        return <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>;
    };

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src={background} alt=""/>
                <Avatar className="sidebar_avatr"/>
                <h2>Daniela Collaguazo</h2>
                <h4>colXXXXodanielaXXX@gmail.com</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebarStatNumber">XXX</p>
                    
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebarStatNumber">XXX</p>
                </div>
                
            </div>
            
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('react js')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
            
        </div>
    )
}

export default Sidebar
