

/** create state of selectedchannel 
 * it return empty string
 */
const state = {
    selectedChannel: '',
}

/** 
 * 
 * we use mutation to commit and track changes
 * create mutation in which SET_SELECTED_CHANNEL 
 * return two params@{state, channel}
 * set selectedChannel string in state to channel
 */

const mutations = {
    SET_SELECTED_CHANNEL(state, channel) {
        state.selectedChannel = channel
}
}

/**
 * we use actions to implement logic
 * setSelectedChannel return two parameters
 * params@{context, channelName}
 * context is use to recieve mutation
 * commit is use to trigger mutation
 */
const actions = {
    setSelectedChannel(context, channelName){
        context.commit('SET_SELECTED_CHANNEL', channelName)
    }
}

const getters = {
    selectedChannel(state){
        return state.selectedChannel
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}