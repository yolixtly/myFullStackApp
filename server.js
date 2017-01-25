import config from './config';
import apiRouter from './api';
import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

//2 options using Node vs Webpack . with node we use it directly from the server!
server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}))
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
