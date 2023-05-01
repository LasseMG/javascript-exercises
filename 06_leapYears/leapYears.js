const leapYears = function(anyYear, i) {
    
    for (i = 0; i <= anyYear; i++) {
        if (anyYear % 4 === 0 && (anyYear % 100 !== 0 || anyYear % 400 === 0)) {
            //remainder must be 0, when divided by 100 remainder must not be 0 OR remainder must be 0 when divided by 400 
            return true; 
        } else {
            return false;
        }
    }
};

// Do not edit below this line
module.exports = leapYears;
