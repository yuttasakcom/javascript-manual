var expense = {
  type: 'Business',
  amount: '$45 USD'
}

// ES5
// var type = expense.type
// var amount = expense.amount

// ES6
const { type, amount } = expense
console.log(type, amount) // output: Business $45 USD

var savedFiled = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
}

function fileSummary({name, extension, size}, {color}) {
  return `The file ${name}.${extension} is of size ${size} color ${color}`
}
console.log(fileSummary(savedFiled, {color: 'red'}))
// output: The file repost.jpg is of size 14040 color red

const companies = [
  'Google',
  'Facebook',
  'Uber'
]

console.log('=== destructuring array ===')
const [name, name2, name3] = companies
console.log(name, name2, name3)
const [...rest] = companies
console.log(rest)

console.log('=== destructuring object ===')
const companies2 = [
  {name: 'Google', location: 'Mountain View'},
  {name: 'Facebook', location: 'Menlo Park'},
  {name: 'Uber', location: 'San Francisco'},
]
const [{location}] = companies2
console.log(location)

const Google = {
  locations: ['Mountain View', 'New York']
}

const {locations: [fLocation]} = Google
console.log(fLocation)

console.log('=== destructuring Continued ===')
function signup({username, password, email, dateOfBirth, city}) {
  return username
}
const user = {
  username: 'myname',
  password: 'mypassword',
  email: 'myemail@example.com',
  dateOfBirth: '1/1/1900',
  city: 'New York'
}
console.log(signup(user))

console.log('=== destructuring Continued 2 ===')
const points = [
  [4, 5],
  [10, 1],
  [0, 40],
]

console.log(points.map(([x, y]) => ({x, y})))
// output [ { x: 4, y: 5 }, { x: 10, y: 1 }, { x: 0, y: 40 } ]

console.log('=== Exercies 1 ===')
// ต้องการผลลัพธ์
// [ { subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick' },
//   { subject: 'Physics', time: '10:15AM', teacher: 'Mrs. Lithun' },
//   { subject: 'Math', time: '11:30AM', teacher: 'Mrs. Vitalis' } ]
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => ({
  subject, time, teacher
}))
console.log(classesAsObject)

console.log('=== Exercies 2 ===')
// ต้องการ output [2,4,6] โดยห้ามใช้ helper array เช่น map, forEach, reduce
const numbers = [1, 2, 3];

function double([...array]) {
  var newArray = []
  for (var i = 0; i < array.length; i++) {
    newArray[i] = array[i] * 2
  }
  return newArray
}
console.log(double(numbers))