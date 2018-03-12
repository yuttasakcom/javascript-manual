function Open(cb) {
  let rand = Rand()
  setTimeout(() => {
    cb(`1. เปิดประตู ${rand}ms`)
  }, rand)
}

function Order(cb) {
  let rand = Rand()
  setTimeout(() => {
    cb(`2. สั่งกาแฟ ${rand}ms`)
  }, rand)
}

function Sit(cb) {
  let rand = Rand()
  setTimeout(() => {
    cb(`3. หาที่นั่ง ${rand}ms`)
  }, rand)
}

function Drink(cup, cb) {
  let rand = Rand()
  setTimeout(() => {
    cb(`${cup} ${rand}ms`)
  }, rand)
}

function Pay(cb) {
  let rand = Rand()
  setTimeout(() => {
    cb(`5. จ่ายเงิน ${rand}ms`)
  }, rand)
}

function Exit(cb) {
  let rand = Rand()
  setTimeout(() => {
    cb(`6. ออกจากร้าน ${rand}ms`)
  }, rand)
}

function Rand() {
  return (Math.floor(Math.random() * 3) + 1) * 1000
}

function RecursiveDrink(arrCoffee, cb) {
  if (arrCoffee.length > 0) {
    let cup = arrCoffee.shift()
    Drink(cup, res => {
      console.log(res)
      RecursiveDrink(arrCoffee, cb)
    })
  } else {
    cb('ดื่มกาแฟเสร็จ')
  }
}

Open(res => {
  console.log(res)
  Order(res => {
    console.log(res)
    Sit(res => {
      console.log(res)
      console.log('4. ดื่มกาแฟ')
      RecursiveDrink(['4.1. Espresso', '4.2. Late', '4.3. Back Coffee'], res => {
        console.log(res)
        Pay(res => {
          console.log(res)
          Exit(res => {
            console.log(res)
          })
        })
      })
    })
  })
})