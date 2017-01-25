import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

ReactDOM.render(
  // React.createElement('h2', null, 'Hello React'),
<App initialGoals={[]}/>,
    document.getElementById('root')
);
