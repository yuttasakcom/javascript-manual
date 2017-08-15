console.log('=== capturing ===')
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0)
}
console.log(addNumbers(1,2,3,4,5))

const defaultColors = ['red', 'green']
const userFavoriteColors = ['orange', 'yellow']

console.log('=== concat ===')
console.log(defaultColors.concat(userFavoriteColors))

console.log('=== rest ===')
console.log([...defaultColors, ...userFavoriteColors])

console.log('=== spread ===')
function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
    return [ 'milk', ...items]
  }
  return items
}
console.log(validateShoppingList('oranges', 'bread', 'eggs'))

console.log('=== Exercise 1 ===')
var array = [1, 2]
var array2 = [3, 4, 5]

console.log('=== normal ===')
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}

console.log(unshift(array, 3,4,5,6,7))

// Refactor
console.log('=== rest ===')
function unshiftRefactor(array, ...array2) {
  return [...array, ...array2];
}
console.log(unshiftRefactor(array, 3,4,5,6,7))