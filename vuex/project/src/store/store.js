// 원래 index.js에 넣는건데 처음이니까 여기다가 따로 만들어볼게

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        counter : 1
    },
    getters : {
        getCounter : function(state){
            return state.counter;
            // store라는 객체안에 getters라는 객체륾 ㅏㄴ드는데, getcounter라는 키는 함수를 가지고 있고 위에있는 state의 counter인 값을 리턴하는 함수
        },
        doubleCounter: function(state){
            return state.counter * 2;
        }, 
        
    },
    mutations:{
        // 변경
        // action과의 차이점 
        // 동기적인 행동
        addCounter: function(state){
            return state.counter++;
        }
    },
    actions:{
        // 비동기적인 행동
    },
    modules:{
    }

})