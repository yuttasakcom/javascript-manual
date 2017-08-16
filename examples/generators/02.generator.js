function* numbers() {
  yield
}

const gen = numbers()
console.log(gen.next())
console.log(gen.next())