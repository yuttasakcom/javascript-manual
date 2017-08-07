## Javascript 101

## สารบัญ
- Beginner
  - ประวัติความเป็นมา
  - ทบทวนเรื่องพื้นฐาน
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