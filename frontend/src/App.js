import React, {useEffect} from 'react';
import Pusher from 'pusher-js'
import './App.css'
import  Sidebar  from './Sidebar'
import Chat from './Chat'

function App() {

useEffect(() => {
  const pusher = new Pusher('8191775d6c4b9d3fb70c', {
    cluster: 'us2'
  });
  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (data) => {
    alert(JSON.stringify(data));
  });
},[])

  

  return (
    <div className="app">
      <div className="app-body">
    <Sidebar />
    <Chat />
      </div>
    </div>
  );
}

export default App;
