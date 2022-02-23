import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter : 1
    },
    getters : {
        getCounter : function(state){
            return state.counter;
        },
        doubleCounter : function(state){
            return state.counter * 2;
        }
    },
    mutations: {
        addCounter: function(state){
            return state.counter++;
        }
    },
    // 동기적 이냐 비동기적이냐
    // 동기적 행동 = mutation 비동기적 행동 action
    actions: {
    },
    modules: {
    }
  })
  