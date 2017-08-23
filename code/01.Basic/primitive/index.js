// Primitive vs Reference Types
var number1 = 10
var number2 = number1
number1 = 15
console.log(number1) // 15
console.log(number2) // 10

var array1 = [1, 2]
var array2 = array1
array1.push(3)
console.log(array1) // [ 1, 2, 3 ]
console.log(array2) // [ 1, 2, 3 ]