import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    facts: [
        "Self-driven, professional, team player, with a strong focus on learning new technologies, who adapts quickly in a fast paced environment, and loves solving difficult problems.",
        "I love spending time with my animals, Skylar and Zeus.",
        "Cooking is another passion of mine.",
        "If you can't find me, I'm most likely wandering the vast outdoors."
    ]
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
}

// getters are functions
const getters = {
    getFacts: (state) => {
        return state.facts;
    }
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})