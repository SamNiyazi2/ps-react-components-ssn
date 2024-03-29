
// 06/29/2020 09:56 am - SSN - [20200629-0956] - [001] - M10-11 - Demo snapshot test


import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';

// 06/29/2020 06:52 pm - SSN - [20200629-1852] - [001] - M10-11 - Demo interaction test

import { shallow } from 'enzyme';

import { Adapter, Enzyme } from '../../testUtil/ezymeRequirements';


describe("Password", () => {





    test('toggles input type when show/hide password clicked', () => {

        const wrapper = shallow(<PasswordInput
            htmlId="test"
            name="test"
            value=""
            onChange={() => { }}
            showVisibilityToggle />);



        // Password input should have a type of 'password' initially
        expect(wrapper.find({ type: 'password' })).toHaveLength(1);
        expect(wrapper.find({ type: 'text' })).toHaveLength(0);

        wrapper.find('a').simulate('click');

        // Password input should have a type of 'text' initially
        expect(wrapper.find({ type: 'password' })).toHaveLength(0);
        expect(wrapper.find({ type: 'text' })).toHaveLength(1);


    });








    test("hides password quality by default", () => {


        const tree = renderer.create(<PasswordInput htmlId="test"
            name="test"
            onChange={() => { }}
            value="Uisi38#8iad" />).toJSON();
        expect(tree).toMatchSnapshot();


    });





    test('shows password quality when enabled and a password is entered', () => {
        const tree = renderer.create(<PasswordInput
            htmlId="test"
            name="test"
            onChange={() => { }}
            showQuality
            value="Uisi38#8iad" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('hides password quality when enabled but no password is entered', () => {
        const tree = renderer.create(<PasswordInput
            htmlId="test"
            name="test"
            onChange={() => { }}
            showQuality
            value="" />).toJSON();
        expect(tree).toMatchSnapshot();
    });




});
