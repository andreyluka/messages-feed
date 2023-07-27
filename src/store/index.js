import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      messages: [],
      lastIndex: 0,
      numberMessages: 10,
      endFeed: false
   },
   mutations: {
      SET_MESSAGES(state, data) {
         let messagesArr = data.splice(state.lastIndex, state.numberMessages);
         messagesArr.forEach(elem => state.messages.push(elem));
         state.lastIndex += state.numberMessages;
      }
   },
   actions: {
      fetchMessages({state, commit}) {
         const response = require(`../assets/data/feed.json`);
         if (state.lastIndex <= response.length) {
            commit('SET_MESSAGES', response)
         } else {
            state.endFeed = true;
         }
      }
   }
})