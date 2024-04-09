import React from 'react'
 import Person2Icon from '@mui/icons-material/Person2';
import MailIcon from '@mui/icons-material/Mail';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { useAuth } from "../context/auth";


function Sidebar({openSidebarToggle, OpenSidebar}) {
    const [auth, setAuth] = useAuth();

    const handleLogout = () => {
        setAuth({
          ...auth,
          user: null,
          token: "",
        });
        localStorage.removeItem("auth");
        toast.success("Logout Successful");
        console.log("Logout clicked")
      };

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
                <Link to={"/profile"}>
                  <Person2Icon className='icon' /> Profile
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to={"/inbox"}>
                    <MailIcon className='icon'/> Inbox
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to={"/help"}>
                    <HelpIcon className='icon'/> Help
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link onClick={handleLogout}>
                    <LogoutIcon className='icon'/> Logout
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
