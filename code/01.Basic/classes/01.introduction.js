console.log('=== classes introduction ===')
function Car(options) {
  this.title = options.title
}

Car.prototype.drive = function() {
  return 'vroom'
}

const car = new Car({title: 'Focus'})

console.log(car.drive())
console.log(car.title)