import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      colectes: [{tiel:"soy un a colecta"}]
  },
  mutations: {
    newColecte(state,payload){
      state.colectes.push(payload)
    }
  },
  actions: {
    newColecte({commit}, payload){
      commit('newColecte', payload)
    }
  }
})
