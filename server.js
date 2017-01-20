import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

//seting up the template engine EJS
server.set('view engine', 'ejs');

//curl http://localhost:3000/hiYolix
server.get('/hiYolix', (req, res) => {
  res.send('Hello from SERVER!');
});


server.get('/', (req,res) => {
  res.render('index', {
    content: 'This is comming directly from Server because we are integrating REACTJS!'
  });
});

//Using Router to distribute content in a cleaner and modular way
server.use('/api', apiRouter);

//serving a static file with express --> renders about.html
server.use(express.static('public'));

server.listen(config.port, ()=> {
  console.info('Express listening on port', config.port);
});
