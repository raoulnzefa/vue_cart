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
          selectedProducts: []
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
      it(`should not decrease the value if number of the      
          selected product is not grater than 1`, () => {
        const selectedProduct = new Product(1, 'product', '50', '$')
        selectedProduct.number = 1
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

  describe('Actions', () => {
    describe('addOrder', () => {
      it(`should dispatch the "appendSelectedProduct" and
          action "syncCart"`, () => {
        const commit = sinon.spy()
        const dispatch = sinon.spy()
        const product = new Product(1, 'product', '50', '$')
        cart.actions.addOrder({commit, dispatch}, product)

        commit.should.have.been.calledWith('appendSelectedProduct', product)
        dispatch.should.have.been.calledWith('syncCart')
      })
    })

    describe('setOrderValue', () => {
      it(`should dispatch the "updateProductNumber" and
          action "syncCart"`, () => {
        const commit = sinon.spy()
        const dispatch = sinon.spy()
        const product = new Product(1, 'product', '50', '$')
        const value = 10
        cart.actions.setOrderValue({commit, dispatch}, {
          product,
          value
        })

        commit.should.have.been.calledWith('updateProductNumber', {
          product,
          value
        })
        dispatch.should.have.been.calledWith('syncCart')
      })
    })

    describe('increaseOrderValue', () => {
      it(`should dispatch the "increaseProductNumber" mutation and
          action "syncCart"`, () => {
        const commit = sinon.spy()
        const dispatch = sinon.spy()
        const product = new Product(1, 'product', '50', '$')
        cart.actions.increaseOrderValue({commit, dispatch}, product)

        commit.should.have.been.calledWith('increaseProductNumber', product)
        dispatch.should.have.been.calledWith('syncCart')
      })
    })

    describe('decreaseOrderValue', () => {
      it(`should dispatch the "decreaseProductNumber" mutation and
          action "syncCart"`, () => {
        const commit = sinon.spy()
        const dispatch = sinon.spy()
        const product = new Product(1, 'product', '50', '$')
        cart.actions.decreaseOrderValue({commit, dispatch}, product)

        commit.should.have.been.calledWith('decreaseProductNumber', product)
        dispatch.should.have.been.calledWith('syncCart')
      })
    })

    describe('removeFromCart', () => {
      it(`should dispatch the "removeSelectedProduct" mutation and
          action "syncCart"`, () => {
        const commit = sinon.spy()
        const dispatch = sinon.spy()
        const product = new Product(1, 'product', '50', '$')
        cart.actions.removeFromCart({commit, dispatch}, product)

        commit.should.have.been.calledWith('removeSelectedProduct', product)
        dispatch.should.have.been.calledWith('syncCart')
      })
    })

    describe('clearCart', () => {
      it(`should dispatch the "updateSelectedProducts" mutation and
          action "syncCart"`, () => {
        const commit = sinon.spy()
        const dispatch = sinon.spy()
        cart.actions.clearCart({commit, dispatch})

        commit.should.have.been.calledWith('updateSelectedProducts')
        dispatch.should.have.been.calledWith('syncCart')
      })
    })

    describe('syncCart', () => {
      it(`should save the "selectedItems" list to the "window.localStorage" 
          object`, () => {
        const product = new Product(1, 'product', '50', '$')
        const state = {
          selectedProducts: [
            product
          ]
        }
        cart.actions.syncCart({state})

        expect(localStorage.getItem('selectedProducts')).to.equal(JSON.stringify(state.selectedProducts))
      })
    })

    describe('loadCart', () => {
      it(`should get the "selectedItems" list from the "window.localStorage" 
          and dispatch the "updateSelectedProducts" mutation`, () => {
        const product = new Product(1, 'product', '50', '$')
        const state = {
          selectedProducts: [
            product
          ]
        }
        const commit = sinon.spy()
        localStorage.setItem(
          'selectedProducts',
          JSON.stringify(state.selectedProducts)
        )
        cart.actions.loadCart({commit})

        commit.should.have.been.calledWith(
          'updateSelectedProducts',
          JSON.parse(localStorage.getItem('selectedProducts'))
        )
      })
      it(`should not load the "selectedItems" list from the 
          "window.localStorage" if it is empty`, () => {
        const commit = sinon.spy()

        if (localStorage.getItem('selectedProducts')) {
          localStorage.removeItem('selectedProducts')
        }
        cart.actions.loadCart({commit})

        return commit.should.not.have.been.called
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
