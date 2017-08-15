var colors = ['red', 'green', 'blue']

// for
console.log('=== for ===')
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i])
}

// forEach
console.log('=== forEach ===')
colors.forEach(color => console.log(color))

// forEach Continued
console.log('=== forEach Continued ===')
var numbers = [1,2,3,4,5]
var sum = 0
numbers.forEach(number => sum += number)
console.log(sum)

// Exercise
console.log('=== Execrcise ===')
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image) {
  areas.push(image.height * image.width)
})

console.log(areas)
