import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import axios from "./axios";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  console.log(messages);

  useEffect(() => {
    const pusher = new Pusher("8191775d6c4b9d3fb70c", {
      cluster: "us2",
    });

    const channel = pusher.subscribe('messages');
        channel.bind('inserted', function (newMessage) {
            // alert(JSON.stringify(newMessage));
            setMessages([...messages, newMessage]);
            // window.scrollTo({ bottom: 0, behavior: "smooth" })
        });

        //cleanup function
        // THIS doesn't make it alert twice
        return () => {
            channel.unbind_all()
            channel.unsubscribe()
        }
    }, [messages])


    console.log(messages)

  return (
    <div className="app">
      <div className="app-body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
