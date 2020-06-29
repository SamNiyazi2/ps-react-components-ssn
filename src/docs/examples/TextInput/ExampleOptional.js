
// 06/29/2020 12:09 am - SSN - [20200628-2354] - [002] - M07 - Molecules

import React from 'react';
import TextInput from 'ps-react2/TextInput';

/** Optional TextBox */

export default class ExampleOptional extends React.Component {

    render() {
 
        return (
            <TextInput
                htmlId="example-optional"
                label="First Name"
                name="firstName"
                onChange={(e) => { console.log('Value changed [', e.target.value, ']'); }}
            />
        );
    }
}