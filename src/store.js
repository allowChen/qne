import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: null,
    city: null,
    detail: null,
    weekendHot: null
  },
  mutations: {
    getPage(state, val){
      state.page = val
    },
    getCity(state, val){
      state.city = val
    },
    getDetail(state, val){
      state.detail = val
    },
    getWeekendHot(state, val){
      state.weekendHot = val
    }
  },
  actions: axios

})
