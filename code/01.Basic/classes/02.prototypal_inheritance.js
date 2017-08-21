console.log('=== prototypal inheritance ===')
function Car(options) {
  this.title = options.title
}

Car.prototype.drive = function() {
  return 'vroom'
}

function Toyota(options) {
  Car.call(this, options)
  this.color = options.color
}

Toyota.prototype = Object.create(Car.prototype)
Toyota.prototype.constructor = Toyota

Toyota.prototype.honk = function() {
  return 'beep'
}

const toyota = new Toyota({color: 'red', title: 'Daily Driver'})
console.log(toyota.drive())
console.log(toyota.color)
console.log(toyota.title)
console.log(toyota.honk())