var numbers = [1, 2, 3]
var doubleNumbers = []

// for
console.log('=== for ===')
for (var i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2)
}
console.log(doubleNumbers)

// map
console.log('=== map ===')
var doubled = numbers.map(number => number * 2)
console.log(doubled)

// map Continued
var cars = [
  { model: 'Buick', price: 'CHEAP'},
  { model: 'Camaro', price: 'expensive'}
]
var prices = cars.map(car => car.price)
console.log(prices)

// Exercise 1
console.log('=== Execrcise 1 ===')
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(image => image.height)
console.log(heights)

// Exercise 2
console.log('=== Execrcise 2 ===')
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(trip => trip.distance / trip.time)
console.log(speeds)

// Exercise 3
console.log('=== Execrcise 3 ===')
var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];
function pluck(array, property) {
  let paints = array.map(prop => prop[property])
  console.log(paints)
  return paints
}