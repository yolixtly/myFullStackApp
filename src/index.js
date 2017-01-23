import React from 'react';
import ReactDOM from 'react-dom';

export const color = Math.random() > 0.5 ? 'hotpink' : 'green';
console.log('Color should be: ' + color);

const Header = ({ message }) => {
  return (
    <h2 className="text-center" style={{color}}>
      { message }
    </h2>
  )
}

//Validation for Props - It only works in Development mode for Performance reasons
Header.propTypes = {
  message: React.PropTypes.string.isRequired
};

const App = (props) => {
  return (
<div>
  <Header message="Naming Contests"/>
  <div className="text-right">
    Made by {props.name}
  </div>
</div>

  );
};



// defaultProps will be used to ensure that this.props.name will have a value if it was not specified by the parent component
App.defaultProps = {
  name: 'Yoli Anderson'
}
ReactDOM.render(
  // React.createElement('h2', null, 'Hello React'),
<App headerMessage="Hello Props!"/>,
    document.getElementById('root')
);
