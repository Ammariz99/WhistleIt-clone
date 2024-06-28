
/** create state of selectedMessage 
 * it return empty string
 */
const state = {
    selectedMessage: ''
}


/** 
 * 
 * we use mutation to commit and track changes
 * create mutation in which SET_SELECTED_MESSAGE
 * return two params@{state, userName}
 * set selectedMessage string in state to userName
 */

const mutations = {
    SET_SELECTED_MESSAGE(state, userName) {
        state.selectedMessage = userName
    }
}

/**
 * we use actions to implement logic
 * setSelectedMessage return two parameters
 * params@{context, userName}
 * context is use to recieve mutation
 * commit is use to trigger mutation
 */

const actions = {
    setSelectedMessage(context, userName){
        context.commit('SET_SELECTED_MESSAGE', userName)
    }
}

const getters = {
    selectedMessage(state){
        return state.selectedMessage
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}