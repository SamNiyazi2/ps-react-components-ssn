
// 06/28/2020 04:48 pm - SSN - [20200628-1646] - [001] - M06 - Demo: Progressbar Atom


import React from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends React.Component {

    getColor = (percent) => {

        if (this.props.percent === 100) return 'green';
        if (this.props.percent > 50) return 'lightgreen';
        return this.props.percent > 10 ? 'yellow' : 'red';
    }


    getWidthAsPercentOfTotalWidth = () => {

        return parseInt(this.props.width * (this.props.percent / 100), 10);

    }


    render() {
        const { percent, width, height } = this.props;

        return (
 
            <div style={{ border: 'solid 1px litgray', width: width }}>
 
                <div style={{ width: this.getWidthAsPercentOfTotalWidth(), height, backgroundColor: this.getColor(percent) }}>

                </div>

            </div>
        );

    }


}

ProgressBar.propTypes = {

    /** Percent of progress completed */
    percent: PropTypes.number.isRequired,

    /** Bar width */
    width: PropTypes.number.isRequired,

    /** Bar height */
    height: PropTypes.number


};



ProgressBar.defaultProps = {
    height: 5
};



export default ProgressBar;

