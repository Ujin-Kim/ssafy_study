import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    salt : 30,
    message: "치킨은 맛있다",
  },
  getters:{
    getSalt : function(state){
      return state.salt;
    },
    getMsg : function(state){
      return state.message;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
