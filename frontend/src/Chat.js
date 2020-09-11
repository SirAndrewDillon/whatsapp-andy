import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { MoreVert, SearchOutlined, AttachFile } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat({ messages }) {
  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar />
        <div className="chat-headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat-headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        {messages.map((message) => (
        <p className={`chat-message ${message.recieved && 'chat-reciever'}`}>
          <span className="chat-name">{message.name}</span>
          {message.message}
          <span className="chat-timestamp">{message.timestamp}</span>
        </p>))}
        <p className="chat-message chat-reciever">
          <span className="chat-name">Doogie</span>
          This is a message
          <span className="chat-timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat-footer">
        <InsertEmoticonIcon />
        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
