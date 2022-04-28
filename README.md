# Prove of Concept for WebSocket

## Run server
node index.js

## Test on client
Open browser console and run below code:

const ws = new WebSocket('ws://localhost:8082');

ws.addEventListener('open', () => {

	console.log('We are connected!');

});

// Define event of receiving message

ws.onmessage = function (msgEvent) {console.log(`Received message: ${msgEvent.data}`)};

ws.send('halo'); // Send message

// Close the connection

ws.close();
