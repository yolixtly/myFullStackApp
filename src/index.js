import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

ReactDOM.render(
  // React.createElement('h2', null, 'Hello React'),
<App />,
    document.getElementById('root')
);

setTimeout(() => {
  ReactDOM.render(
    <h2> ... New Component Here </h2>,
    document.getElementById('root')
  );
}, 1000);
