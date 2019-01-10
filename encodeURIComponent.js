console.log(encodeURIComponent("How are you?")) // How%20are%20you%3F
console.log(decodeURIComponent("How%20are%20you%3F")) // How are you?

console.log(encodeURIComponent("I'm great!")) // I'm%20great!
console.log(decodeURIComponent("I'm%20great!")) // I'm great!

console.log(encodeURIComponent("I feel 110%")) // I%20feel%20110%25
console.log(decodeURIComponent("I%20feel%20110%25")) // I feel 110%
