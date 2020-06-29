
// 06/29/2020 12:22 am - SSN - [20200628-2354] - [003] - M07 - Molecules


import React from 'react';
import TextInput from 'ps-react2/TextInput';

/** Required TextBox with error */

export default class ExampleError extends React.Component {

    render() {
        return (
            <TextInput
                htmlId="example-error"
                label="First Name"
                name="firstName"
                onChange={(e) => { console.log('Text changed [', e.target.value, ']') }}
                required
                error="First name is required"
            />
        );

    }

}