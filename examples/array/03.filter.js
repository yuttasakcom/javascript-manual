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