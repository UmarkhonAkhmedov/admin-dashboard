import React from 'react';
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom"

function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className="topLeft">
          <Link className='logo__link' to="/"><span className="logo">lamaadmin</span></Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon/>
            <span className='topIconBadge'>2</span>
          </div><div className="topbarIconContainer">
            <LanguageIcon/>
            <span className='topIconBadge'>2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon/>
          </div>
          <img src="https://avatars.githubusercontent.com/u/76143018?v=4" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
