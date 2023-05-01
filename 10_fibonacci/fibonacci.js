const fibonacci = function(input1) {
    let n1 = 0, n2 = 1, nextTerm; 

    if (input1 >= 0) {
        for (let i = 1; i <= input1; i++) {
            nextTerm = n1 + n2; 
            n1 = n2; 
            n2 = nextTerm;
        }
}  else {
    return "OOPS";
}
    return n1;
};

// Do not edit below this line
module.exports = fibonacci;
