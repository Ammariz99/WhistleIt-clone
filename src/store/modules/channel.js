/** create state of selectedchannel 
 * it return empty string
 * Also create array of channels in which channels are statically added
 */
const state = {
    selectedChannel: '',
    channels: [
        { channelId: 1, name: 'Access Control Support'},
        { channelId: 2, name: 'Announcements' },
        { channelId: 3, name: 'Network & It Support' },
        { channelId: 4, name: 'WhistleIt' },
        { channelId: 5, name: 'Hr' }
      ],
    


    /** create state of showAddChannelDialog for modal 
     * return false */  
    showAddChannelDialog: false,


    /** create state of newChannel for modal 
     * it has name object return empty string,
     * description object return empty string 
     * isPublic object return boolean value false
    */
    newChannel: {
        name: '',
        description: '',
        isPublic: true
    }  
}

/** 
 * 
 * we use mutation to commit and track changes
 * create mutation in which SET_SELECTED_CHANNEL 
 * return two params@{state, channel}
 * set selectedChannel string in state to channel
 */

const mutations = {
    SET_SELECTED_CHANNEL(state, channelId) {
        state.selectedChannel = channelId
    },

    /**Toggle Add channel function is created
     * it has state parameter
     * it works based on true or false value of showAddChannel
     * showAddChannel bydefault it is set to false
     * if dialog is currently true then showAddChannel is ready to false
     * if dialog is currently false then showAddChannel is ready to true
     * 
     */
    TOGGLE_ADD_CHANNEL_DIALOG(state){
        state.showAddChannelDialog = !state.showAddChannelDialog
    },

    /**New channel mutation is created
     * parameter(state, name)
     * when user create name of their new channel there name goes in newchannel object in state
     */

    SET_NEW_CHANNEL_NAME(state, name){
        state.newChannel.name = name

    },

    /**New channel description mutation is created
     * parameter(state, description)
     * when user set description of their new channel there name goes in newchannel object in state
     * 
    */

    SET_NEW_CHANNEL_DESCRIPTION(state, description){
        state.newChannel.description = description
    },

    /**New channel isPublic mutation is created
     * parameter(state, isPublic)
     * when user set channel to public or private of their new channel there name goes in newchannel object in state
     * 
    */

    SET_NEW_CHANNEL_PUBLIC(state, isPublic){
        state.newChannel.isPublic = isPublic
    },

    /** Add channel mutation is create
     * parameter(state, channel)
     * when user create new channel it pushes to the channels array
     */

    ADD_CHANNEL(state, channel){
        state.channels.push(channel)
        
    },

    /** Reset channel mutation is create
     * parameter(state)
     * when user create new channel it resets the channel modal
     */
    RESET_CHANNEL(state){
        state.newChannel = {
            name: '',
            description: '',
            isPublic: false
        }
    },


}


/**
 * we use actions to trigger mutations
 */
const actions = {
    /**
     * setSelectedChannel return two parameters
     * @params {context, channelName}
     * context is use to recieve mutation
     * commit is use to trigger mutation
     */
    setSelectedChannel(context, channelId){
        context.commit('SET_SELECTED_CHANNEL', channelId)
    },
    /**
     * toggleAddChannelDialog function
     * @params {context}
     * 
    */
    toggleAddChannelDialog(context){
        context.commit('TOGGLE_ADD_CHANNEL_DIALOG')
    },

    /**
     * setNewChannelName function
     * @params {context, name}
     * 
    */

    setNewChannelName(context, name){
        context.commit('SET_NEW_CHANNEL_NAME', name)
    },

    /**
     * setNewChannelDescription function
     * @params {context, description}
    */
    setNewChannelDescription(context, description){
        context.commit('SET_NEW_CHANNEL_DESCRIPTION', description)
    },

    /**
     * setNewChannelPublic function
     * @params {context, isPublic}
    */
    setNewChannelPublic(context, isPublic){
        context.commit('SET_NEW_CHANNEL_PUBLIC', isPublic)
    },

    /**createChannel function
     * @params {context, state}
     */

    createChannel(context, state){
        const newChannel = {
            channelId: context.state.channels.length + 1,
            name: context.state.newChannel.name,
            description: context.state.newChannel.description,
            public: context.state.newChannel.isPublic,
        }
        context.commit('ADD_CHANNEL', newChannel)
        
        context.commit('RESET_CHANNEL')
        context.commit('TOGGLE_ADD_CHANNEL_DIALOG')
    },
    

}

const getters = {
    selectedChannel(state){
        return state.selectedChannel
    },
    channels(state){
        return state.channels
    },
    showAddChannelDialog(state){
        return state.showAddChannelDialog
    },
    newChannel(state){
        return state.newChannel
    },
    
}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
