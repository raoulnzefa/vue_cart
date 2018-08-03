import product from '../../../src/store/modules/products/index'
import { testAction } from '../../testutils'
/* eslint-disable*/
const actionsInjector = require('inject-loader!../../../src/store/modules/products/actions')
/* eslint-enable */

// create the module with mocks for API
const GET_PRODUCT_LIST_RESPONSE = "{ data: 'value' }"

const actions = actionsInjector({
  '../../../api': {
    getProductList () {
      return new Promise(resolve => {
        resolve(GET_PRODUCT_LIST_RESPONSE)
      })
    }
  }
})

describe('Vuex module: product', () => {
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
      it('should dispatch "updateProductList" mutation', () => {
        const commit = sinon.spy()

        return Promise.resolve(actions.default.loadProductList({commit})).then(null, null, commit).then((result) => {
          commit.should.have.been.calledWith(
            'updateProductList',
            GET_PRODUCT_LIST_RESPONSE
          )
        })
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
