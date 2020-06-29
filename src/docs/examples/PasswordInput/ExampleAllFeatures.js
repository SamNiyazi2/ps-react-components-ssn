
// 06/29/2020 12:44 am - SSN - [20200629-0035] - [002] - M07 - Demo: PasswordInput

import React from 'react';
import PasswordInput from 'ps-react2/PasswordInput';

/** features enabled  */

class ExampleAllFeatures extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            password: ''
        };
    }


    getQuality() {

        const length = this.state.password.length;
        return length > 10 ? 100 : length * 10;

    }


    render() {

        return (
            <div>

                <PasswordInput
                    htmlId="password-input-example-all-features"
                    name="password"
                    onChange={event => this.setState({ password: event.target.value })}
                    value={this.state.password}
                    minLength={8}
                    placeholder="Enter password"
                    showVisibilityToggle
                    quality={this.getQuality()}
                    {...this.props} />

            </div>
        );

    }

}



export default ExampleAllFeatures;

