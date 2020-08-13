import React from 'react';
import './SidebarRow.css';

function SidebarRow({ Icon, title }) {
    return (
        <div className="sidebarRow">
            <Icon />
            <h5>{title}</h5>
        </div>
    )
}

export default SidebarRow
