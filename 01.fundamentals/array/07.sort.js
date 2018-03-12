// Sort String
let fruit = ['cherries', 'apples', 'bannas'];
console.log(fruit.sort()); // [ 'apples', 'bannas', 'cherries' ]

// Sort Number
let scores = [1, 10, 21, 2];
console.log(scores.sort()); //[1, 10, 21, 2];

let numbers = [4, 2, 10, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); //[ 1, 2, 3, 4, 5, 10]

// Sort Object
let items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// sort object by value
items.sort(function (a, b) {
  return a.value - b.value;
});
console.log(items);
//output
// [ { name: 'The', value: -12 },
// { name: 'Magnetic', value: 13 },
// { name: 'Edward', value: 21 },
// { name: 'Sharpe', value: 37 },
// { name: 'Zeros', value: 37 },
// { name: 'And', value: 45 } ]


// sort object by name
items.sort(function(a, b) {
  let nameA = a.name.toUpperCase(); // ignore upper and lowercase
  let nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log(items);
//output
// [ { name: 'And', value: 45 },
// { name: 'Edward', value: 21 },
// { name: 'Magnetic', value: 13 },
// { name: 'Sharpe', value: 37 },
// { name: 'The', value: -12 },
// { name: 'Zeros', value: 37 } ]