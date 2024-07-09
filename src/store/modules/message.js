/** create state of selectedMessage 
 * it return empty string
 */
const state = {
    selectedMessage: '',
    showAddDirectMessageDialog: true,
    directMessages:[
        {
          id: 1000,
          name: 'Ammar Bukhari',

        },
        {
          id: 1001,
          name: 'Zain Tanveer',
        },
        {
          id: 1002,
          name: 'Hamza Nasir'
        },
        {
            id: 1003,
            name: 'Jawad Saleem'
          },
      ],
}


/** 
 * 
 * we use mutation to commit and track changes
 * create mutation in which SET_SELECTED_MESSAGE
 * return two params@{state, userId}
 * set selectedMessage string in state to userName
 */

const mutations = {
    SET_SELECTED_MESSAGE(state, userId) {
        state.selectedMessage = userId
    },
    TOGGLE_ADD_DIRECT_MESSAGE_DIALOG(state){
        state.showAddDirectMessageDialog = !state.showAddDirectMessageDialog
    },
    CLOSE_ADD_DIRECT_MESSAGE_DIALOG(state){
        state.showAddDirectMessageDialog = false
    }
}

/**
 * we use actions to implement logic
 * setSelectedMessage return two parameters
 * params@{context, userId}
 * context is use to recieve mutation
 * commit is use to trigger mutation
 */

const actions = {
    setSelectedMessage(context, userId){
        context.commit('SET_SELECTED_MESSAGE', userId)
    },
    toggleAddDirectMessageDialog(context){
        context.commit('TOGGLE_ADD_DIRECT_MESSAGE_DIALOG')
    },
    closeAddDirectMessageDialog(context){
        context.commit('CLOSE_ADD_DIRECT_MESSAGE_DIALOG')
    },
}

const getters = {
    selectedMessage(state){
        return state.selectedMessage
    },
    directMessages(state){
        return state.directMessages
    },
    showAddDirectMessageDialog(state){
        return state.showAddDirectMessageDialog
    },
}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
