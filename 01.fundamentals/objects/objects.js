let person = {
  _name: 'Lu Xun',
  _age: 137,

  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn
    } else {
      console.log('Invalid input')
      return 'Invalid input'
    }
  },

  get age() {
    return `${this._name} is ${this._age} years old.`
  }
}

console.log(person.age)

/* Output
Lu Xun is 137 years old.
*/
