import React from 'react';
import { useState } from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar.js'
import DashContent from './DashContent.js';

const Dashboard = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    return (
        <div className='grid-container'>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <DashContent />
        </div>
    )
}

export default Dashboard;
