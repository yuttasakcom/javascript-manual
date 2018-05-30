let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: function() {
    return `Hello, my name is ${this.name}`
  },
  sayGoodbye() {
    return 'Goodbye!'
  }
}

let friend = {
  name: 'Yo'
}

friend.sayHello = person.sayHello

console.log(friend.sayHello())

person.hobbies = ['Basketball', 'Coaching']
person.hobbies = ['Basketball']
console.log(person.hobbies)

console.log(person['name'])
console.log(person['age'])

let day = 'Tuesday'
let alarm

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm'
} else {
  alarm = 'weekAlarm'
}

console.log(person[alarm])
console.log(person.sayHello())

/* Output
Hello, my name is Yo
[ 'Basketball' ]
Tyron
40
Alarm set to 7AM
Hello, my name is Tyron
*/
