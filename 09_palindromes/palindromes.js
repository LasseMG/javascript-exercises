const palindromes = function (string) {    
    const letterNumberString= string.toLowerCase("").replace(/[^0-9a-z]/gi, '');
    //expression to remove any alphanumeric symbols in the string
    
    let reversedString = letterNumberString.split("").reverse("").join("");

    if (letterNumberString === reversedString) {
        return true; 
    } else {
        return false;
    }

    //if string === reverse(string) return true 
    //else return false 
    //to lowercase 
    //split, reverse, join
};

// Do not edit below this line
module.exports = palindromes;
