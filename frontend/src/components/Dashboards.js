import React from 'react';
import './Dashboard.css';
import Person2Icon from '@mui/icons-material/Person2';
import MailIcon from '@mui/icons-material/Mail';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';


const Dashboards = () => {
  return (
    <div className='dashboardContainer'>
      <div className='dashInnerBox'>
        <div className='dashMenu'>
          <div>
            <p>Dashboard</p>
          </div>
          <div className='menuItemsAlignment'>
            <div className='menuRow'>
              <Person2Icon /><span>Profile</span>
            </div>
            <div className='menuRow'>
              <MailIcon /><span>Inbox</span>
            </div>
            <div className='menuRow'>
              <HelpIcon /><span>Help</span>
            </div>
            <div className='menuRow logout'>
              <LogoutIcon /><span>Logout</span>
            </div>
          </div>
        </div>
        <div className='dashContents'>
            <div>
              
            </div>
            <div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard