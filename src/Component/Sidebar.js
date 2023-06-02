import { Avatar } from "@mui/material";
import React from "react";
import "./sidebar.css";
function Sidebar() {
  const recentItems =(topic)=>(
        <div className="sidebar__recentitems">
          <span className="sidebar__hash">
            #
          </span>
          <p>{topic}</p>
        </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="img" />
        <Avatar className="sidebar__avatar" />
        <h2>Niraj Lamichhane</h2>
        <h4>nirajlamichhane22@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p> who view your</p>
          <p className="sidebar__stats__statnumber">2235</p>
        </div>
        <div className="sidebar__stat">
          <p> view your post</p>
          <p className="sidebar__stats__statnumber">1135</p>
        </div>
      </div>

      <div className="sidebar__buttom">
        <p>Recent</p>
        {recentItems('new to coding')}
        {recentItems('software Engineer')}
        {recentItems('React')}
        {recentItems('React')}
        {recentItems('React')}
      </div>
    </div>
  );
}

export default Sidebar;
