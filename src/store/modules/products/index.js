import mutations from './mutations'
import actions from './actions'

const state = {
  productList: null,
  currency: '$'
}

const getters = {
  productList: state => state.productList,
  currency: state => state.currency
}

export default {
  state,
  getters,
  mutations,
  actions
}
