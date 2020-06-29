
// 06/28/2020 11:15 pm - SSN - [20200628-2315] - [001] - M06 - Demo Label atom

import React from 'react';
import PropTypes from 'prop-types';

/** Label with requird field display, htmlFor, and block styling  */

function Label({ htmlFor, label, required }) {

    return (
        <label style={{ display: 'block' }} htmlFor={htmlFor}>
            {label} {required && <span style={{ color: 'red' }}> *</span>}
        </label>
    );

}

Label.propTypes = {

    /** HTML ID for associated input  */
    htmlFor: PropTypes.string.isRequired,

    /** Label text */
    label: PropTypes.string.isRequired,

    /** Display asterisk after label if true */
    required: PropTypes.bool

};

export default Label;
