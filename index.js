const WebSocket = require('ws');
const wss = new WebSocket.Server({port: 8082});

wss.on('connection', ws => {
	console.log('WS Connected');
	
	ws.on('open', () => {
		ws.send('Welcome');
	});
	
	ws.on('message', data => {
		console.log(`Received ${data} and reply to the client 5 second later`);
		setTimeout(() => {
			ws.send('I have received your message:' + data);
		}, 5000);
		setTimeout(() => {
			console.log('Send TQ to the sender');
			ws.send('Thank you of sending us your message');
		}, 10000);
	});

	ws.on('close', () => {
		console.log('Client has disconnected!');
	});

});

