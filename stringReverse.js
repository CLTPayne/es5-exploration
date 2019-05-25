// Apparently this is a classic javascript interview question
// As it involves an understanding of the string type

function stringReverse(stringToReverse) {
    var arrayFromString = stringToReverse.split('');
    var reversedString = arrayFromString.reverse().join('');
    return reversedString;
}

// Although strings are sometime thought to be array like 
// They do not have a reverse method like the array type
// Converting a string to an array enables a lot of additional 
// string manipulations

console.log(stringReverse("Hello World"))