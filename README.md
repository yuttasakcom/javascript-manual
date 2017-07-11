## Javascript 101

## สารบัญ
- [Airbnb JavaScript Style Guide](#airbnb)
- [JavaScript Standard Style](#standard)
- [Callback](#callback)
- [Promise](#promise)
- [Reactive](#reactive)

## Airbnb
A mostly reasonable approach to JavaScript [Click](https://github.com/airbnb/javascript)

## Standard
The best way to learn about standard is to just install it and give it a try on your code. [Click](https://standardjs.com/rules.html)

## Callback

## Promise

## Reactive
```javascript
function createReactiveObject (obj) {
	const keys = Object.keys(obj)
  obj.$data = Object.assign({}, obj)
  keys.forEach((key) => {
  	Object.defineProperty(obj, key, {
    	get: reactiveGetter.bind(obj, key),
      set: reactiveSetter.bind(obj, key)
    })
  })
}

function reactiveSetter (property, value) {
	this.$data[property] = value
  console.log(`${property} changed to ${value}`)
}

function reactiveGetter (property) {
	console.log(`get ${property}`)
  return this.$data[property]
}

let user = {
	name: '',
	score: 0
}

createReactiveObject(user)

user.name='Yo'
console.log(user.score) 
```