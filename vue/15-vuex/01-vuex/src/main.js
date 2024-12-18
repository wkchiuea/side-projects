import { createApp } from 'vue';
import {createStore} from "vuex";

import App from './App.vue';

const counterModule = {
  namespaced: true
}

const store = createStore({
  modules: {
    numbers: counterModule
  },
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    }
  },
  actions: {
    increment(context) {
      setTimeout(function() {
        context.commit("increment");
      }, 2000);
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(state, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      } else if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    }
  }
});

const app = createApp(App);
app.use(store);

app.mount('#app');
