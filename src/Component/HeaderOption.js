import { Avatar } from '@mui/material';
import React from 'react'
import './HeaderOption.css'
function HeaderOption({avatar, title, Icon}) {
  return (
    <div className='headerOption'>
        {Icon &&<Icon className="headerOption__icon"></Icon>}
        {avatar && <Avatar className="headerOption__icon" src={avatar}></Avatar>}
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  );
}

export default HeaderOption