function getMessage() {
  const year = new Date().getFullYear()
  return `The year is ${year}`
}

console.log(getMessage())