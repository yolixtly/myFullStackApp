import React from 'react';

const color = Math.random() > 0.5 ? 'hotpink' : 'green';
console.log('Color should be: ' + color);

const Header = ({ message }) => {
  return (
    <div>
      <h2 className="text-center" style={{color}}>
        { message }
      </h2>
    </div>
  )
};

//Validation for Props - It only works in Development mode for Performance reasons
Header.propTypes = {
  message: React.PropTypes.string.isRequired
};

export default Header;
