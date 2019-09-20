// version with redunant args specified
const isBiggerThan = (threshold, int) => int > threshold
const result1 = [1, 2, 3, 4].filter(int => isBiggerThan(3, int))

const isBiggerThanNumber = threshold => int => int > threshold
const result2 = [1, 2, 3, 4, 5].filter(isBiggerThanNumber(4))

console.log({ result1, result2 }) // { result1: [ 4 ], result2: [ 5 ] }

const keepGreatestChar =
  (char1, char2) => char1 > char2 ? char1 : char2

const keepCharGreaterThanC = char => keepGreatestChar('c', char)

const result3 = keepGreatestChar('y', 'b')
const result4 = keepCharGreaterThanC('y') 
console.log({ result3, result4 }) // { result3: 'y', result4: 'y' }
