import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

function Sidebar() {
    return (
        <div className="sidebar">
            i'm sidebar.
            <SidebarRow title="Home" />
            <SidebarRow title="Trending" />
            <SidebarRow title="Subscription" />
        </div>
    )
}

export default Sidebar
