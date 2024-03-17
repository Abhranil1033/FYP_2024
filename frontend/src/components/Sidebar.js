import React from 'react'
 import Person2Icon from '@mui/icons-material/Person2';
import MailIcon from '@mui/icons-material/Mail';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import './Sidebar.css';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                DASHBOARD
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/profile">
                  <Person2Icon className='icon' /> Profile
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <MailIcon className='icon'/> Inbox
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <HelpIcon className='icon'/> Help
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <LogoutIcon className='icon'/> Logout
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
