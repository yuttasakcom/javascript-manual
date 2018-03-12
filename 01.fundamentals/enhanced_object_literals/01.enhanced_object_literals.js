function createBookShop(inventory) {
  return {
    inventory, // inventory: inventory
    inventoryValue() { // inventoryValue: function()
      return this.inventory.reduce((total, book) => total + book.price, 0)
    },
    priceForTitle(title){ // priceForTitle: function(title)
      return this.inventory.find(book => book.title === title).price
    }
  }
}

const inventory = [
  {title: 'Harry Potter', price: 10},
  {title: 'Eloquent Javascript', price: 15}
]

const bookShop = createBookShop(inventory)
console.log(bookShop.inventoryValue())
console.log(bookShop.priceForTitle('Harry Potter'))