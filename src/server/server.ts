import http from 'http';
import cors from 'cors';
import express from 'express';
import socketIO from 'socket.io';

const app = express();
app.use(cors());

app.get('/test', (req, res) => {
  setTimeout(() => res.json({ test: 'test' }), 1000);
});

const server = http.createServer(app);
const io = socketIO(server);
const MESSAGE_TIMEOUT = 5000;

io.on('connection', client => {
  console.log('New client');
  setInterval(() => {
    client.emit('message', {
      type: 'message',
      message: new Date().getTime().toString(),
    });
  }, MESSAGE_TIMEOUT);
});

server.listen(5000, () => {
  console.log('Listening on port 5000');
});
