import { createStore } from 'vuex'
import { ItemInterface } from '@/models/items/Item.interface'
import { ItemsStateInterface } from '@/models/store/ItemsState.interface'

const state: ItemsStateInterface = {
  loading: false,
  items: []
}

export default createStore({
  state: state,
  mutations: {
   loadingItems(state: ItemsStateInterface) {
      state.loading = true
      state.items = []
    },
    loadedItems(state: ItemsStateInterface, items: ItemInterface[]) {
      state.items = items
      state.loading = false
    }
  },
  actions: {
    loadItems({ commit, state }) {
      commit('loadingItems')
      const mockItems: ItemInterface[] = [{
        id: 1,
        name: 'Item 1',
        selected: false
      }, {
        id: 2,
        name: 'Item 3',
        selected: false
      }, {
        id: 3,
        name: 'Item 3',
        selected: false
      }]

      setTimeout(() => {
        commit('loadedItems', mockItems)
      }, 1000)

    }
  },
  modules: {
  }
})