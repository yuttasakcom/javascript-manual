console.log('Start')
var getUser = (id, cb) => {
  var user = {
    id: id,
    name: 'Yo'
  }
  
  // cb(user)

  setTimeout(() => {
    cb(user)
  }, 2000)
}

getUser(1, (user) => {
  console.log(user)
})

console.log('End')