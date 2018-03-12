var numbers = [10, 20, 30]
var sum = 0

console.log('=== for ===')
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}
console.log(sum)

console.log('=== reduce ===')
var r = numbers.reduce((previous, number) => previous + number, 0)
console.log(r)

// A touch More of Reduce
var primaryColors = [
  {color: 'red'},
  {color: 'green'},
  {color: 'blue'},
]

console.log('=== reduce Continued ===')
var p = primaryColors.reduce(function(previos, primaryColor){
  previos.push(primaryColor.color)
  return previos
}, [])

console.log(p)

console.log('=== reduce Continued 2 ===')
function balancedParens(string) {
  return string.split("").reduce((previous, char) => {
    if (previous <= 0) { return previous }
    if (char === "(") { return ++previous }
    if (char === ")") { return --previous }
    return previous
  }, 0)
}
var b= balancedParens(")))))")
console.log(b)

// Exercise 1 reduce sum distance
console.log('=== Excercise 1 ===')
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];
var totalDistance = trips.reduce((previos, trip) => previos + trip.distance, 0)
console.log(totalDistance)

// Exercise 2 ต้องการผลลัพธ์ = { sitting: 3, standing: 2 }
console.log('=== Excercise 2 ===')
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(previos, desk) {
    if (desk.type === 'sitting') { ++previos.sitting }
    if (desk.type === 'standing') { ++previos.standing }
    return previos
}, { sitting: 0, standing: 0 });
console.log(deskTypes)

// Exercise 3 unique value by reduc & find
console.log('=== Excercise 3 ===')
var numbers = [1, 1, 2, 3, 4, 4]

function unique(array) {
  return array.reduce(function(previos, arr){
    if (previos.find(p => p === arr)) {
      return previos
    }
    previos.push(arr)
    return previos
  }, [])
}
console.log(unique(numbers))