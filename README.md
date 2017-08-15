## Javascript 101

## สารบัญ
- Beginner
  - ประวัติความเป็นมา
  - ทบทวนเรื่องพื้นฐาน
    - Array Helper Methods
      - [forEach](#foreach)
      - [map](#map)
      - [filter](#filter)
      - [find](#find)
      - [every and some](#every-and-some)
      - [reduce](#reduce)
    - [Const/Let](#const-let)
    - [Template Strings](#template-strings)
  - ทบทวนประโยคคำสั่ง
- Intermediate
  - [Callback](#callback)
    - [Recursive Function](#recursive-function)
  - [Promise](#promise)
  - Event loop
  - [Reactive](#reactive)
  - Testing
    - Reference
      - [Mocha](https://mochajs.org/)
      - [Expect](https://github.com/mjackson/expect)
      - [Super Test](https://github.com/visionmedia/supertest)
- Advance
- Links
  - [Airbnb JavaScript Style Guide](#airbnb)
  - [JavaScript Standard Style](#standard)
  - [แปลและสรุปเรื่อง Ten Things A *Serious* JavaScript Developer Should Learn ของพี่ปุ๋ย somkiat.cc](http://www.somkiat.cc/summary-10-things-a-serious-javascript-developer-should-learn/)
  - [การใช้งาน array พื้นฐาน](https://medium.com/@camp191/javascript-%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3-array-%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%86-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-map-filter-reduce-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9C%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99-bfc84e59ebae)

## forEach
```javascript
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
```

## map
```javascript
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
```

## filter
```javascript
var products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 0, price: 1 },
  { name: 'celely', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'orange', type: 'fruit', quantity: 0, price: 1 },
]

var filterdProducts = []

// for
console.log('=== for ===')
for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filterdProducts.push(products[i])
  }
}
console.log(filterdProducts)

// filter
console.log('=== filter ===')
var newProducts = products.filter(product => product.type === 'fruit')
console.log(newProducts)

// Choosting When to Filter
var post = {id:4, title: 'New Post'}
var comments = [
  {postId: 4, content: 'awesome post'},
  {postId: 3, content: 'it was ok'},
  {postId: 4, content: 'neat'},
]
// filter Continued
console.log('=== filter Continued ===')
function commentsForPost(post, comments) {
  return comments.filter(comment => comment.postId === post.id)
}
var res = commentsForPost(post, comments)
console.log(res)

// Exercise 1 filter number over 50
console.log('=== Execrcise 1 ===')
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
var filteredNumbers = numbers.filter(number => number > 50)
console.log(filteredNumbers)

// Exercise 2 filter user admin = true
console.log('=== Execrcise 2 ===')
var users = [
  { id: 1, admin: true },  
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
]
var filteredUsers = users.filter(user => user.admin)
console.log(filteredUsers)

// Exercise 3 reject number over 15
console.log('=== Execrcise 3 ===')
var numbers = [10, 20, 30, 12]
var lessThanFifteen = reject(numbers, function(number){
  return number > 15
})
function reject(array, iteratorFunction) {
  // คิดแบบ for
  // let newArray = []
  // for (var i = 0; i < array.length; i++) {
  //   if ( ! iteratorFunction(numbers[i])) {
  //     newArray.push(numbers[i])
  //   }
  // }
  // return newArray

  return array.filter(number => ! iteratorFunction(number))
}
console.log(lessThanFifteen)
```

## find
```javascript
var users = [
  {name: 'Jill'},
  {name: 'Alex', id: 4},
  {name: 'Bill'},
  {name: 'Alex'},
]

var user
console.log('=== for ===')
for (var i = 0; i < users.length; i++) {
  if (users[i].name === 'Alex') {
    user = users[i]
    break
  }
}
console.log(user)

console.log('=== find ===')
var findUser = users.find(user => user.name === 'Alex')
console.log(findUser)

console.log('=== find Continued 1 ===')
function Car(model) {
  this.model = model
}
var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus'),
]

var findCar = cars.find(car => car.model === 'Focus')
console.log(findCar)

console.log('=== find Continued 2 ===')
var posts = [
  {id: 1, title: 'New Post'},
  {id: 2, title: 'Old Post'}
]
var comment = {postId: 1, content: 'Great Post'}
function postForComment(posts, comment) {
  return posts.find(post => post.id === comment.postId)
}

var findPost = postForComment(posts, comment)
console.log(findPost)

// Exercise 1 find admin
console.log('=== Execrcise 1 ===')
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(user => user.admin)
console.log(admin)

// Exercise 2 balance of 12
console.log('=== Execrcise 2 ===')
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(account => account.balance === 12)
console.log(account)

// Exercise 3 find by property
console.log('=== Execrcise 3 ===')
var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
]

function findWhere(array, criteria) {
  var property = Object.keys(criteria)[0]
  return array.find(ladder => {
    return ladder[property] === criteria[property]
  })
}

var res = findWhere(ladders, { height: 25 })
console.log(res)
```

## every and some
```javascript
var computers = [
  {name: 'Apple', ram: 24},
  {name: 'Compaq', ram: 4},
  {name: 'Acer', ram: 32}
]

var allComputersCanRunProgram = true
var onlySomeComputersCanRunProgram = false

console.log('=== for ===')
for (var i = 0; i < computers.length; i++) {
  var computer = computers[i]
  if (computer.ram < 16) {
    allComputersCanRunProgram = false
  } else {
    onlySomeComputersCanRunProgram = true
  }
}

console.log(allComputersCanRunProgram)
console.log(onlySomeComputersCanRunProgram)

console.log('=== every ===')
var everyComputers = computers.every(computer => computer.ram > 16)
console.log(everyComputers)

console.log('=== some ===')
var someComputers = computers.some(computer => computer.ram > 16)
console.log(someComputers)

// Every and Some in Practice
console.log('=== Practice ===')
function Field(value) {
  this.value = value
}
Field.prototype.validate = function() {
  return this.value.length > 0
}
var username = new Field("2cool")
var password = new Field("my_password")
var birthdate = new Field("10/10/2010")

var fields = [username, password, birthdate]
var formIsValid = fields.every(field => field.validate())

if (formIsValid) {
  // allow user to submit!
  console.log('formIsValid', formIsValid)
} else {
  // show an error message!
  console.log('formIsValid', formIsValid)
}

// Exercise 1 validate hasSubmitted
console.log('=== Execrcise 1 ===')
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(user => user.hasSubmitted)
console.log(hasSubmitted)

// Exercise 2 assign the boolean 'true' to the variable 'inProgress'
console.log('=== Execrcise 2 ===')
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(request => request.status === 'complete')
console.log(inProgress)
```

## reduce
```javascript
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
```

## Const Let
```javascript
// ES5
// var name = 'Jane'
// var title = 'Software Engineer'
// var hourlyWage = 40

// ES6
const name = 'Jane'
// name = 'Yo' const เป็นค่าคงที่ไม่สามารถเปลี่ยนแปลงได้
let title = 'Software Engineer'
title = 'Senior Software Engineer'

console.log('=== Const/Let ===')
const statuses = [ 
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
let currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}

console.log('const ที่เป็น object สามารถเปลี่ยนแปลงค่าภายใน object ได้')
```

## Template Strings
```javascript
function getMessage() {
  const year = new Date().getFullYear()
  return `The year is ${year}`
}

console.log(getMessage())
```

## Callback
```javascript
function Open(cb) {
  let rand = Rand()
  setTimeout(() => {
    cb(`1. เปิดประตู ${rand}ms`)
  }, rand)
}

function Order(cb) {
  let rand = Rand()
  setTimeout(() => {
    cb(`2. สั่งกาแฟ ${rand}ms`)
  }, rand)
}

function Sit(cb) {
  let rand = Rand()
  setTimeout(() => {
    cb(`3. หาที่นั่ง ${rand}ms`)
  }, rand)
}

function Drink(cb) {
  let rand = Rand()
  setTimeout(() => {
    cb(`4. ดื่มกาแฟ ${rand}ms`)
  }, rand)
}

function Pay(cb) {
  let rand = Rand()
  setTimeout(() => {
    cb(`5. จ่ายเงิน ${rand}ms`)
  }, rand)
}

function Exit(cb) {
  let rand = Rand()
  setTimeout(() => {
    cb(`6. ออกจากร้าน ${rand}ms`)
  }, rand)
}

function Rand() {
  return (Math.floor(Math.random() * 5) + 1) * 1000
}

// ไม่เรียงตามลำดับ, blocking io
// Open(res => console.log(res))
// Order(res => console.log(res))
// Sit(res => console.log(res))
// Drink(res => console.log(res))
// Pay(res => console.log(res))
// Exit(res => console.log(res))

//เรียงลำดับถูกต้อง, blocking io
Open(res => {
  console.log(res)
  Order(res => {
    console.log(res)
    Sit(res => {
      console.log(res)
      Drink(res => {
        console.log(res)
        Pay(res => {
          console.log(res)
          Exit(res => {
            console.log(res)
          })
        })
      })
    })
  })
})
```

## Recursive Function
```javascript
function Open(cb) {
  let rand = Rand()
  setTimeout(() => {
    cb(`1. Open the Door ${rand}ms`)
  }, rand)
}

function Order(cb) {
  let rand = Rand()
  setTimeout(() => {
    cb(`2. Order a Coffee ${rand}ms`)
  }, rand)
}

function Sit(cb) {
  let rand = Rand()
  setTimeout(() => {
    cb(`3. Sitdown ${rand}ms`)
  }, rand)
}

function Drink(cup, cb) {
  let rand = Rand()
  setTimeout(() => {
    cb(`${cup} ${rand}ms`)
  }, rand)
}

function Pay(cb) {
  let rand = Rand()
  setTimeout(() => {
    cb(`5. Pay Money ${rand}ms`)
  }, rand)
}

function Exit(cb) {
  let rand = Rand()
  setTimeout(() => {
    cb(`6. Exit Shop ${rand}ms`)
  }, rand)
}

function Rand() {
  return (Math.floor(Math.random() * 3) + 1) * 1000
}

function RecursiveDrink(arrCoffee, cb) {
  if (arrCoffee.length > 0) {
    let cup = arrCoffee.shift()
    Drink(cup, res => {
      console.log(res)
      RecursiveDrink(arrCoffee, cb)
    })
  } else {
    cb('Drink Success')
  }
}

Open(res => {
  console.log(res)
  Order(res => {
    console.log(res)
    Sit(res => {
      console.log(res)
      console.log('4. Drink Coffee')
      RecursiveDrink(['4.1. Espresso', '4.2. Late', '4.3. Back Coffee'], res => {
        console.log(res)
        Pay(res => {
          console.log(res)
          Exit(res => {
            console.log(res)
          })
        })
      })
    })
  })
})
```

## Promise
```javascript
const Open = new Promise((resolve, reject) => {
  let rand = Rand()
  setTimeout(() => {
    resolve(`1. เปิดประตู ${rand}ms`)
  }, rand) 
})

const Order = new Promise((resolve, reject) => {
  let rand = Rand()
  setTimeout(() => {
    resolve(`2. สั่งกาแฟ ${rand}ms`)
  }, rand) 
})

const Sit = new Promise((resolve, reject) => {
  let rand = Rand()
  setTimeout(() => {
    resolve(`3. หาที่นั่ง ${rand}ms`)
  }, rand) 
})

const Drink = new Promise((resolve, reject) => {
  let rand = Rand()
  setTimeout(() => {
    resolve(`4. ดื่มกาแฟ ${rand}ms`)
  }, rand) 
})

const Pay = new Promise((resolve, reject) => {
  let rand = Rand()
  setTimeout(() => {
    resolve(`5. จ่ายตังค์ ${rand}ms`)
  }, rand) 
})

const Exit = new Promise((resolve, reject) => {
  let rand = Rand()
  setTimeout(() => {
    resolve(`6. ออกจากร้าน ${rand}ms`)
  }, rand) 
})

function Rand() {
  return (Math.floor(Math.random() * 5) + 1) * 1000
}

// ไม่เรียงลำดับ, non blocking io
// Open.then(res => console.log(res))
// Order.then(res => console.log(res))
// Sit.then(res => console.log(res))
// Drink.then(res => console.log(res))
// Pay.then(res => console.log(res))
// Exit.then(res => console.log(res))

// เรียงตามลำดับ, non blocking io
Open.then(res => {
  console.log(res)
  Order.then(res => {
    console.log(res)
    Sit.then(res => {
      console.log(res)
      Drink.then(res => {
        console.log(res)
        Pay.then(res => {
          console.log(res)
          Exit.then(res => {
            console.log(res)
          })
        })
      })
    })
  })
})
```

## Async Await
```javascript
const Open = new Promise((resolve, reject) => {
  let rand = Rand()
  setTimeout(() => {
    resolve(`1. เปิดประตู ${rand}ms`)
  }, rand) 
})

const Order = new Promise((resolve, reject) => {
  let rand = Rand()
  setTimeout(() => {
    resolve(`2. สั่งกาแฟ ${rand}ms`)
  }, rand)
})

const Sit = new Promise((resolve, reject) => {
  let rand = Rand()
  setTimeout(() => {
    resolve(`3. หาที่นั่ง ${rand}ms`)
  }, rand) 
})

const Drink = new Promise((resolve, reject) => {
  let rand = Rand()
  setTimeout(() => {
    resolve(`4. ดื่มกาแฟ ${rand}ms`)
  }, rand) 
})

const Pay = new Promise((resolve, reject) => {
  let rand = Rand()
  setTimeout(() => {
    resolve(`5. จ่ายตังค์ ${rand}ms`)
  }, rand) 
})

const Exit = new Promise((resolve, reject) => {
  let rand = Rand()
  setTimeout(() => {
    resolve(`6. ออกจากร้าน ${rand}ms`)
  }, rand) 
})

function Rand() {
  return (Math.floor(Math.random() * 5) + 1) * 1000
}

// เรียงตามลำดับ, non blocking io
// Open.then(res => {
//   console.log(res)
//   Order.then(res => {
//     console.log(res)
//     Sit.then(res => {
//       console.log(res)
//       Drink.then(res => {
//         console.log(res)
//         Pay.then(res => {
//           console.log(res)
//           Exit.then(res => {
//             console.log(res)
//           })
//         })
//       })
//     })
//   })
// })

// เรียงตามลำดับ, non blocking io
const step = async () => {
  const open = await Open
  console.log(open)

  const order = await Order
  console.log(order)

  const sit = await Sit
  console.log(sit)

  const drink = await Drink
  console.log(drink)

  const pay = await Pay
  console.log(pay)

  const exit = await Exit
  console.log(exit)
}

step()
```

## Reactive
```javascript
function createReactiveObject (obj) {
  const keys = Object.keys(obj)
  obj.$data = Object.assign({}, obj)
  keys.forEach((key) => {
    Object.defineProperty(obj, key, {
      get: reactiveGetter.bind(obj, key),
      set: reactiveSetter.bind(obj, key)
    })
  })
}

function reactiveSetter (property, value) {
  this.$data[property] = value
  console.log(`${property} changed to ${value}`)
}

function reactiveGetter (property) {
  console.log(`get ${property}`)
  return this.$data[property]
}

let user = {
  name: '',
  score: 0
}

createReactiveObject(user)

user.name='Yo'
console.log(user.score) 
```

## Airbnb
A mostly reasonable approach to JavaScript [Click](https://github.com/airbnb/javascript)

## Standard
The best way to learn about standard is to just install it and give it a try on your code. [Click](https://standardjs.com/rules.html)