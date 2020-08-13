import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import './SidebarRow.css';

function SidebarRow({ title }) {
    return (
        <div className="sidebarRow">
            <HomeIcon />
            <h5>{title}</h5>
        </div>
    )
}

export default SidebarRow
