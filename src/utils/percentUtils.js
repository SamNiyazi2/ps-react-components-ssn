
// 06/29/2020 09:45 am - SSN - [20200629-0703] - [002] - M10 - Testing - Unit test


// Returns the width of a percent of total width, as an integer
export function getWidthAsPercentOfTotalWidth(percent, totalWidth) {

    return parseInt(totalWidth * (percent / 100), 10);

}
