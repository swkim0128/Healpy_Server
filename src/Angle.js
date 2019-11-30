'use strict';

function calculateAngle(x1, y1, x2, y2) {
    // let result = (Math.atan2(y1, x1) / Math.atan2(y2, x2)) * 180 / Math.PI;
    let result = (Math.atan2(y1*x2 - x1*y2, x1*x2 + y1*y2) * 180 / Math.PI);

    return Math.abs(result);
}

module.exports = calculateAngle;
