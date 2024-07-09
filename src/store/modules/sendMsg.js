/** create state of userMessages
 * it return empty object
 * all messages are stored in it by userId
 */
const state = {
    userMessages: {},
}

/** 
 * 
 * we use mutation to commit and track changes
 * create mutation in which ADD_MESSAGE
 * return params@(state)
 * destructure object are {userId, message}
 * set to push each message in messageList array
 */
const mutations = {
    ADD_MESSAGE(state, {userId,message}) {
        /**This if checks if the user has (identified by the userId) has an array of message in state.userMessage
         * and if user has not any message array it initialize to empty array
         * 
         */
        if (!state.userMessages[userId]) {
            state.userMessages[userId] = []
        }
        /**this line push the new message in userMessage array */
        state.userMessages[userId].push(message)
    },
    DELETE_MESSAGE(state, {userId, messageIndex}){
        /**This checks if the specified user(userId) has the array of messages
         * if yes then the condition will be true
         */
        if(state.userMessages[userId]){
            /** state.userMessages[userId] access the array of message of specified user
             * .splice remove the one item at messageIndex
             */
            state.userMessages[userId].splice(messageIndex,1)
        }
    },
    EDIT_MESSAGE(state, {userId, messageIndex, newMessage}){
        /**This checks if there is an array of messages of specified user(userId) in userMessages array
         * if yes then this condition will be true
         */
        if(state.userMessages[userId]){
            /** state.userMessages[userId] access the array of message of specified user
             * messageIndex is the position at which index message is located
             * 1 remove the old message at messageIndex
             * newMessage will replace the old message with new Message
             */
            state.userMessages[userId].splice(messageIndex, 1, newMessage)
        }
    },
    
    
}

/**
 * we use actions to implement logic
 * addMessage return two parameters
 * params@(context)
 * context is use to recieve mutation
 * destructure object{userId, message}
 * userId is the identifier to check wwhich user send message
 * message is the content which is sent
 * commit is use to trigger mutation
 */
const actions = {
    addMessage(context, {userId, message}){
        context.commit('ADD_MESSAGE', {userId, message})
    },

    /**deleteMessage function for deleting message
     * params@{context, {userId, messageIndex}}
     * context is use to recieve mutations
     * destructure objects{userId, messageIndex}
     * userId is the idetifier which user's message to delete
     * messageIndex is the index at which location message is located 
     */
    deleteMessage(context, {userId, messageIndex}){
        context.commit('DELETE_MESSAGE', {userId, messageIndex})
    },

    /**editMessage function for editing message
     * params@{context, {userId, messageIndex, newMessage}}
     * context is use to recieve mutations
     * destructure objects{userId, messageIndex, newMessage}
     * userId is the idetifier which user's message to edit
     * messageIndex is the index at which location message is located 
     * newMessage replace the old message
     */
    editMessage(context, {userId, messageIndex, newMessage}){
        context.commit('EDIT_MESSAGE',{userId, messageIndex, newMessage})
    }
}


const getters = {
    userMessages(state){
        return state.userMessages
    },
    messagesByUser: (state) => (userId) =>{
        return state.userMessages[userId] || [channelId]
    }
    
    
}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
