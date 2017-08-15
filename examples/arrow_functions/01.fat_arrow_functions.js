const add = (a, b) => a + b
console.log(add(1, 2))

const numbers = [1, 2, 3]
console.log(numbers.map(n => n * 2))

// function () { local scope } ต้อง => bind(this)
// const team = {
//   members: ['Jane', 'Bill'],
//   teamName: 'Super Squad',
//   teamSummary: function() {
//     return this.members.map(function(member) {
//       return `${member} is on team ${this.teamName}`
//     }.bind(this))
//   }
// }

const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`
    })
  }
}

console.log(team.teamSummary())

const profile = {
  name: 'Alex',
  getName: function() {return this.name;}
}

console.log(profile.getName())
