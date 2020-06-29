
// 06/29/2020 09:56 am - SSN - [20200629-0956] - [001] - M10-11 - Demo snapshot test


import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';


describe("Password", () => {


    test("hides password quality by default", () => {


        const tree = renderer.create(<PasswordInput htmlId="test"
            name="test"
            onChange={() => { }}
            value="Uisi38#8iad" />).toJSON();
        expect(tree).toMatchSnapshot();


    });


});
