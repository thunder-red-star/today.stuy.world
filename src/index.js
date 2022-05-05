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

function convertEpochTimeToCurrentTime (epochTime) {
  // "Epoch time" is a date with hours, minutes, and seconds, but otherwise the year, month, and day are all 0.
  // "Current time" is a date with hours, minutes, seconds, and the year, month, and day are all set to the current date.
  // This function converts an epoch time to a current time.
  let currentTime = new Date();
  let currentTimeYear = currentTime.getFullYear();
  let currentTimeMonth = currentTime.getMonth();
  let currentTimeDay = currentTime.getDate();

  return new Date(currentTimeYear, currentTimeMonth, currentTimeDay, epochTime.getHours(), epochTime.getMinutes(), epochTime.getSeconds());
}

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
        currentClassTimeSince: new Date().getTime() - convertEpochTimeToCurrentTime(currentClass.startTime).getTime(),
        // Do the same for the end time but subtract in the opposite direction.
        currentClassTimeUntil: convertEpochTimeToCurrentTime(currentClass.endTime).getTime() - new Date().getTime(),
    });
}, 1000);

// Listen on port 3000
http.listen(3000, () => {
    console.log('listening on *:3000');
});