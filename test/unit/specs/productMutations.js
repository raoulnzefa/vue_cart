import { mutations } from '../../../src/store/index'

const { updateProductList } = mutations

describe('Vuex module: product.mutations', () => {
  it('should update a list of products', () => {
    const state = {
      productList: null
    }
    const list = [1, 2, 3]

    updateProductList(state, list)

    expect(state.productList).to.equal(list)
  })
})
