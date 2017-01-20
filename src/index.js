import React from 'react';
import ReactDOM from 'react-dom';

const color = Math.random() > 0.5 ? 'hotpink' : 'green';
console.log('Color should be: ' + color);
ReactDOM.render(
  // React.createElement('h2', null, 'Hello React'),
  <h2 className="text-center" style={{color}}>
    Hello React with JSX!!
    This Works!
    {Math.random()}
  </h2>,
    document.getElementById('root')
);
