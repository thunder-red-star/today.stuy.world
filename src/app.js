// Backend for Today.stuy.world

const express = require('express');
const app = express();

const path = require('path');
// const cors = require('cors');
// const bcrypt = require('bcrypt');
const http = require('http');
const server = http.createServer(app);

const socket = require('socket.io');
const io = socket(server);

const StuyUtils = require('stuyutils.js');

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
	socket.on('heartbeat', () => {
		console.log('heartbeat');
	});
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Every second, send a heartbeat to the client with the bell information
setInterval(() => {
	io.emit('heartbeat', {
		currTime: new Date().getTime(),
		currentClass: StuyUtils.getCurrentClass(new Date()),
		nextClass: StuyUtils.getNextClass(new Date()),
	});
}, 1000);

module.exports = function (port) {
	server.listen(port, () => {
		console.log('Server listening on port ' + port);
	});
};