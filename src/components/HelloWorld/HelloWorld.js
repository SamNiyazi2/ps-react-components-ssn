
// 06/26/2020 10:05 pm - SSN - [20200626-2106] - [002] - M04 - Documentation

import React from 'react';
import PropTypes from 'prop-types';


/** A component that greets user */

function HelloWorld({ message }) {
    return <div>Hello {message}</div>
}


HelloWorld.propTypes = {
// 06/28/2020 06:40 am - SSN - [20200628-0636] - [001] - M04 - Documentation -  Enhance HolloWorld with comments
/** Messge to display 
  Test 2
  Test 3b
*/
    message: PropTypes.string
}


// 06/28/2020 06:40 am - SSN - [20200628-0636] - [002] - M04 - Documentation -  Enhance HolloWorld with comments
HelloWorld.defaultProps = {
    message: 'World'
}


export default HelloWorld;

