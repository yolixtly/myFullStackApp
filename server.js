import config from './config';
import express from 'express';
import apiRouter from './api';


const server = express();

//seting up the template engine EJS
server.set('view engine', 'ejs');
server.get('/', (req,res) => {
  res.render('index', {
    content: 'React'
  });
});

//serving a static file with express
server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, ()=> {
  console.info('Express listening on port', config.port);
});
