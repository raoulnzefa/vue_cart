// import mutations from '../../../src/store/modules/products/mutations'
import product from '../../../src/store/modules/products/index'

/* eslint-disable*/
const actionsInjector = require('inject-loader!../../../src/store/modules/products/actions')
/* eslint-enable */

// helper for testing action with expected mutations and mutation payloads
const testAction = (action, payload, state, expectedMutations, done) => {
  let count = 0

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]

    try {
      expect(type).to.equal(mutation.type)
      if (payload) {
        expect(payload).to.deep.equal(mutation.payload)
      }
    } catch (error) {
      done(error)
    }

    count++
    if (count >= expectedMutations.length) {
      done()
    }
  }
  // call the action with mocked store and arguments
  action({ commit, state }, payload)

  // check if no mutations should have been dispatched
  if (expectedMutations.length === 0) {
    expect(count).to.equal(0)
    done()
  }
}

// create the module with mocks for API
const actions = actionsInjector({
  '../../../api': {
    getProductList () {
      return new Promise(resolve => {
        resolve([1, 2, 3])
      })
    }
  }
})

describe('Vuex module: product', () => {
  // Mutations
  describe('Mutations', () => {
    describe('updateProductList', () => {
      it('should update a list of products', () => {
        const state = {
          productList: null
        }
        const list = [1, 2, 3]

        product.mutations.updateProductList(state, list)

        expect(state.productList).to.equal(list)
      })
    })
  })

  describe('Actions', () => {
    describe('loadProductList', () => {
      it('should dispatch "updateProductList" mutation', done => {
        const list = [1, 2, 3]
        testAction(
          actions.default.loadProductList,
          null,
          {},
          [
            {
              type: 'updateProductList',
              payload: list
            }
          ],
          done
        )
      })
    })
  })

  describe('Getters', () => {
    describe('productList', () => {
      it('should return a list of products', () => {
        const state = {
          productList: [1, 2, 3]
        }

        expect(product.getters.productList(state)).to.equal(state.productList)
      })
    })
  })
})
