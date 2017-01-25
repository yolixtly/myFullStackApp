import React from 'react';
import ReactDOM from 'react-dom';
import data from './testData';

import App from './components/app';

console.log(data);
ReactDOM.render(
  // React.createElement('h2', null, 'Hello React'),
<App  goals={data.Goals2017}/>,
    document.getElementById('root')
);
