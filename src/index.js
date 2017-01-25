import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/app';

axios.get('/api/goals')
  .then(res => {
    ReactDOM.render(
      // React.createElement('h2', null, 'Hello React'),
    <App initialGoals={res.data.goals}/>,
        document.getElementById('root')
    );
  })
  .catch(console.error);
