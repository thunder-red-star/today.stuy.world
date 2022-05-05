// Backend for Today.stuy.world

const express = require('express');
const app = express();
const DateTime = require('date-and-time');

const path = require('path');
// const cors = require('cors');
// const bcrypt = require('bcrypt');
const http = require('http').Server(app);
const io = require('socket.io')(http);

const StuyUtils = require('stuyutils.js');
const ThunderUtils = require('./utils/utils.js');

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
    let currentClass = StuyUtils.getCurrentClass(new Date());
    let nextClass = StuyUtils.getNextClass(new Date());
    io.emit('heartbeat', {
        currTime: new Date().getTime(),
        currentClassName: currentClass.name,
        // Convert the class start time to a current time, then subtract that time from the current time to get the time since the class started.
        currentClassTimeSince: new Date().getTime() - ThunderUtils.time.epochToCurrent(currentClass.start).getTime(),
        // Do the same for the end time but subtract in the opposite direction.
        currentClassTimeUntil: ThunderUtils.time.epochToCurrent(currentClass.end).getTime() - new Date().getTime(),
    });
}, 1000);

// Listen on port 3000
http.listen(3000, () => {
    console.log('listening on *:3000');
});