const Open = new Promise((resolve, reject) => {
  let rand = Rand()
  setTimeout(() => {
    resolve(`1. เปิดประตู ${rand}ms`)
  }, rand) 
})

const Order = new Promise((resolve, reject) => {
  let rand = Rand()
  setTimeout(() => {
    resolve(`2. สั่งกาแฟ ${rand}ms`)
  }, rand)
})

const Sit = new Promise((resolve, reject) => {
  let rand = Rand()
  setTimeout(() => {
    resolve(`3. หาที่นั่ง ${rand}ms`)
  }, rand) 
})

const Drink = new Promise((resolve, reject) => {
  let rand = Rand()
  setTimeout(() => {
    resolve(`4. ดื่มกาแฟ ${rand}ms`)
  }, rand) 
})

const Pay = new Promise((resolve, reject) => {
  let rand = Rand()
  setTimeout(() => {
    resolve(`5. จ่ายตังค์ ${rand}ms`)
  }, rand) 
})

const Exit = new Promise((resolve, reject) => {
  let rand = Rand()
  setTimeout(() => {
    resolve(`6. ออกจากร้าน ${rand}ms`)
  }, rand) 
})

function Rand() {
  return (Math.floor(Math.random() * 5) + 1) * 1000
}

// เรียงตามลำดับ, non blocking io
// Open.then(res => {
//   console.log(res)
//   Order.then(res => {
//     console.log(res)
//     Sit.then(res => {
//       console.log(res)
//       Drink.then(res => {
//         console.log(res)
//         Pay.then(res => {
//           console.log(res)
//           Exit.then(res => {
//             console.log(res)
//           })
//         })
//       })
//     })
//   })
// })

// เรียงตามลำดับ, non blocking io
const step = async () => {
  const open = await Open
  console.log(open)

  const order = await Order
  console.log(order)

  const sit = await Sit
  console.log(sit)

  const drink = await Drink
  console.log(drink)

  const pay = await Pay
  console.log(pay)

  const exit = await Exit
  console.log(exit)
}

step()