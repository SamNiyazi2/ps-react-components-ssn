
// 06/28/2020 05:34 am - SSN - [20200627-0056] - [005] - M04 - Documentation - Creating Docs components

// Copied code from download M12


import React from 'react';
import PropTypes from 'prop-types';

const Props = ({props}) => {
  return (
    <table className="props">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
        </tr>
      </thead>
      <tbody>
      {
        Object.keys(props).map(key => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{props[key].description}</td>
              <td>{props[key].type.name}</td>
              <td>{props[key].defaultValue && props[key].defaultValue.value}</td>
              <td>{props[key].required && "X"}</td>
            </tr>
          );
        })
      }
      </tbody>
    </table>
  )
}

Props.propTypes = {
  props: PropTypes.object.isRequired
};

export default Props;
