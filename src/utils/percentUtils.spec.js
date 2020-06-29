
// 06/29/2020 09:47 am - SSN - [20200629-0703] - [003] - M10 - Testing - Unit test

import { getWidthAsPercentOfTotalWidth } from './percentUtils';


describe("getWidthAsPercentOfTotalWidth (function)", () => {

    test('should return 250 with total width of 500 and percent of 50', () => {
        const width = getWidthAsPercentOfTotalWidth(50, 500);

        expect(width).toEqual(250);
    })
});
