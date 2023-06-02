import React from 'react'

// Icon Import
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Link css
import './Header.css'

// link component
import HeaderOption from './HeaderOption';
export default function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <img src="https://www.freepnglogos.com/uploads/linkedin-logo-design-30.png" alt="linkedin logo design"  />
            <div className="header__search">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>
        <div className="header__right">
            <HeaderOption title="Home" Icon = {HomeIcon}/>
            <HeaderOption title="My Network"  Icon = {GroupIcon}/>
            <HeaderOption title="Jobs"  Icon = {WorkIcon}/>
            <HeaderOption title="Messaging"  Icon = {MessageIcon}/>
            <HeaderOption title="Messaging"  Icon = {MessageIcon}/> 
            <HeaderOption title="Notification"  Icon = {NotificationsIcon}/> 
            <HeaderOption title="Me"  avatar = "https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc=w240-h480-rw"/> 
        </div>
    </div>
  )
}
