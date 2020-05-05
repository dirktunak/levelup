import React from 'react'

const socket = new WebSocket('ws://localhost:3030');
 
socket.addEventListener('open', () => {
  socket.send('Hello World!');
});
 
socket.addEventListener('message', event => {
  console.log(`Message from server: ${event.data}`);
});

function App() {
    return (
        <div></div>
    )
}

export default App
