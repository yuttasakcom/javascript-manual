console.log('=== refactoring classes ===')

class Car {
  constructor(options) {
    this.title = options.title
  }

  drive() {
    return 'vroom'
  }
}

const car = new Car({title: 'Honda'})
console.log(car)
console.log(car.drive())
console.log(car.title)

class Toyota extends Car {
  constructor(options) {
    super(options)
    this.color = options.color
  }
  honk() {
    return 'beep'
  }
}
const toyota = new Toyota({title: 'Toyota', color: 'red'})
console.log(toyota)
console.log(toyota.drive())
console.log(toyota.title)
console.log(toyota.honk())
console.log(toyota.color)

console.log('=== Exercise 1 ===')
// Game Classes

// You are a game developer tasked with setting up some basic classes for a new game you are working on.  Create a class called 'Monster'.  In the constructor, you'll need to do some basic setup for Monster whenever they are created. 

// Initialize the Monster's health to 100.
// The constructor will be called with an 'options' object that has a 'name' property.  Assign the 'name' to the Monster
class Monster {
  constructor(options) {
    this.name = options.name
    this.health= 100
  }
}

console.log('=== Exercise 2 ===')
// Now that you have a monster created, create a subclass of the Monster called Snake.  

// The Snake should have a 'bite' method.  The only argument to this method is another instance of a Snake.
// The instance of Snake that is passed in should have their health deducated by 10
class Monster2 {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster2{
  constructor(options){
    super(options)
  }
  bite() {
    this.health -= 10
  }
}

const snake = new Snake({name: 'Snake'})
snake.bite()
console.log(snake.health)