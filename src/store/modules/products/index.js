import mutations from './mutations'
import actions from './actions'

const state = {
  productList: null
}

const getters = {
  productList: state => state.productList
}

export default {
  state,
  getters,
  mutations,
  actions
}
