import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import App from '../../../src/App.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Component: App', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      loadProductList: sinon.spy(),
      loadCart: sinon.spy()
    }
    store = new Vuex.Store({
      state: {
        selectedProductsCount: 0
      },
      getters: {
        selectedProductsCount: state => state.selectedProductsCount
      },
      actions
    })

    mount(App, {
      store,
      localVue,
      stubs: ['router-link', 'router-view']
    })
  })

  describe('Created hook', () => {
    it(`should dispatch the "loadProductList" action`, () => {
      return actions.loadProductList.should.have.been.called
    })
    it(`should dispatch the "loadCart" action`, () => {
      return actions.loadCart.should.have.been.called
    })
  })
})
