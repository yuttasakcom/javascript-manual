function makeAjaxRequest(url, method = 'GET') {
  return method
}
console.log(makeAjaxRequest('google.com')) // null != undefined
console.log(makeAjaxRequest('google.com', 'POST'))

function User(id) {
  this.id = id
}

function generateId() {
  return Math.random() * 9999999
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true
  return user
}

console.log(createAdminUser())