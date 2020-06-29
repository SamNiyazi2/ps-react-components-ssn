

// 06/28/2020 05:40 pm - SSN - [20200628-1646] - [005] - M06 - Demo: Progressbar Atom


import React from 'react';
import ProgressBar from 'ps-react2/ProgressBar';

/** 50% progress with height 20px */

export default function Example10Percent() { 

    return <ProgressBar percent={50} width={150} height={20}/>
}