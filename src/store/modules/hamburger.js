
const state = {
    drawer: false
}

const mutations = {
    TOGGLE_DRAWER(state){
        state.drawer = !state.drawer
    }
}

const actions = {
    toggleDrawer(context){
        context.commit('TOGGLE_DRAWER')
    }
}

const getters = {
    drawer(state){
        return state.drawer
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}