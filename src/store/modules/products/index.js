import mutations from './mutations'
import actions from './actions'

const DEFAULT_CURRENCY = {
  name: 'USD',
  symbol: '$'
}

const state = {
  productList: null,
  currency: DEFAULT_CURRENCY
}

const getters = {
  productList: state => state.productList,
  currency: state => {
    if (state.currency) {
      return state.currency
    } else {
      return DEFAULT_CURRENCY
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
