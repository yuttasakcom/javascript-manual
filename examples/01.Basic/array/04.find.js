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

// Exercise 3
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