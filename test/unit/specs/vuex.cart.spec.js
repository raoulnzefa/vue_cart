import cart from '../../../src/store/modules/cart'
import { assert } from 'chai'

class Product {
  constructor (id, name, price, currency) {
    this.id = id
    this.name = name
    this.price = price
    this.currency = currency
  }
}

describe('Vuex module: cart', () => {
  describe('Mutations', () => {
    describe('updateSelectedProducts', () => {
      it('should update a list of selected products', () => {
        const state = {
          selectedProducts: null
        }
        const list = [1, 2, 3]

        cart.mutations.updateSelectedProducts(state, list)

        expect(state.selectedProducts).to.deep.equal(list)
      })
    })

    describe('appendSelectedProduct', () => {
      it(`should create a list with a new product in "selectedProducts", 
          if selected products is not array, with key "date" that equals 
          to current date, and key "number", that equals to "1"`, () => {
        const state = {
          selectedProducts: null
        }
        const product = new Product(1, 'product', '50', '$')
        const expectedDate = new Date()
        cart.mutations.appendSelectedProduct(state, product)
        const object = state.selectedProducts[0]

        assert.exists(object)
        expect(object.date.toDateString()).to.equal(expectedDate.toDateString())
        expect(state.selectedProducts[0].number).to.equal(1)
      })
      it(`should append a new product to the list of selected products 
          with key "date" that equals to current date, and key "number", 
          that equals to "1"`, () => {
        const state = {
          selectedProducts: null
        }
        const product = new Product(1, 'product', '50', '$')
        const expectedDate = new Date()
        cart.mutations.appendSelectedProduct(state, product)
        const object = state.selectedProducts[0]

        assert.exists(object)
        expect(object.date.toDateString()).to.equal(expectedDate.toDateString())
        expect(state.selectedProducts[0].number).to.equal(1)
      })
      it(`should increase the "number" value of the object 
          if product with the similar id already exists in the 
          list of selected products`, () => {
        const selectedProduct = new Product(1, 'product', '50', '$')
        selectedProduct.number = 1
        selectedProduct.date = new Date()
        const state = {
          selectedProducts: [selectedProduct]
        }
        cart.mutations.appendSelectedProduct(state, new Product(1, 'product', '50', '$'))

        expect(state.selectedProducts[0].number).to.equal(2)
      })
    })

    describe('updateProductNumber', () => {
      it('should update a number of the selected product', () => {
        const selectedProduct = new Product(1, 'product', '50', '$')
        selectedProduct.number = 1
        selectedProduct.date = new Date()
        const state = {
          selectedProducts: [selectedProduct]
        }
        cart.mutations.updateProductNumber(state, {
          product: state.selectedProducts[0],
          value: 10
        })

        expect(state.selectedProducts[0].number).to.equal(10)
      })
    })

    describe('increaseProductNumber', () => {
      it(`should increase by 1 the value of the "number" property 
          of the selected product`, () => {
        const selectedProduct = new Product(1, 'product', '50', '$')
        selectedProduct.number = 1
        selectedProduct.date = new Date()
        const state = {
          selectedProducts: [selectedProduct]
        }
        cart.mutations.increaseProductNumber(state, state.selectedProducts[0])

        expect(state.selectedProducts[0].number).to.equal(2)
      })
    })

    describe('decreaseProductNumber', () => {
      it(`should decrease by 1 the value of the "number" property 
          of the selected product`, () => {
        const selectedProduct = new Product(1, 'product', '50', '$')
        selectedProduct.number = 2
        selectedProduct.date = new Date()
        const state = {
          selectedProducts: [selectedProduct]
        }
        cart.mutations.decreaseProductNumber(state, state.selectedProducts[0])

        expect(state.selectedProducts[0].number).to.equal(1)
      })
    })

    describe('removeSelectedProduct', () => {
      it(`should remove the product from the list of selected 
          products`, () => {
        const selectedProduct = new Product(1, 'product', '50', '$')
        selectedProduct.number = 2
        selectedProduct.date = new Date()
        const state = {
          selectedProducts: [selectedProduct]
        }
        cart.mutations.removeSelectedProduct(state, state.selectedProducts[0])

        expect(state.selectedProducts.indexOf(selectedProduct)).to.equal(-1)
      })
    })
  })
})

// describe('Actions', () => {
//   describe('loadProductList', () => {
//     it('should dispatch "updateProductList" mutation', done => {
//       const list = [1, 2, 3]
//       testAction(
//         actions.default.loadProductList,
//         null,
//         {},
//         [
//           {
//             type: 'updateProductList',
//             payload: list
//           }
//         ],
//         done
//       )
//     })
//   })
// })

// describe('Getters', () => {
//   describe('productList', () => {
//     it('should return a list of products', () => {
//       const state = {
//         productList: [1, 2, 3]
//       }

//       expect(product.getters.productList(state)).to.equal(state.productList)
//     })
//   })
// })
