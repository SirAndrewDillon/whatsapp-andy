import React from "react";
import SidebarChat from './SidebarChat'
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {SearchOutlined} from '@material-ui/icons'

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Sidebar</h1>
      <div className="sidebar-header">
          <Avatar src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png' />
        <div className="sidebar-headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
              <ChatIcon />
          </IconButton>
          <IconButton>
                <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search">
          <div className="sidebar-searchContainer">
            <SearchOutlined />
            <input placeholder='Search or start new chat' type="text"/>
          </div>
      </div>
      <div className="sidebar-chats">
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;