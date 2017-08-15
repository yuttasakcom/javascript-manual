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