
// 06/27/2020 12:59 am - SSN - [20200627-0056] - [002] - M04 - Documentation - Creating Docs components

// Copied code from download M12


import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({components}) => {
  return (
    <ul className="navigation">
      {
        components.map( name => {
          return (
            <li key={name}>
              <a href={`#${name}`}>{name}</a>
            </li>
          )
        })
      }
    </ul>
  )
}

Navigation.propTypes = {
  components: PropTypes.array.isRequired
};

export default Navigation;




