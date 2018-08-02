import { getProductList } from '../../../api'

const actions = {
  loadProductList ({ commit }) {
    getProductList().then(result => {
      commit('updateProductList', result)
    })
  }
}

export default actions
