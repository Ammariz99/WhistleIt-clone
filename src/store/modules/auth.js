
const state = {
    /**create object of users which is empty
     * use for to store all users data in it
     * isAuthenticated to false if user not exist */
    users:[],
    isAuthenticated: false

}
const getters = {
    allUser(state){
        return state.users
    },
    isAuthenticated(state){
         return state.isAuthenticated
    }
}

/**We use mutations to track and commit changes in state
 * we can use it to change state value 
 */
const mutations = {
    /**
     * we use this mutation to set user data in state
     * SET_AUTH_USER object is created to set new user
     * params@{state, user}
     * new user data will be store in user object state.user
     * user is aUTHENTICATED IS true when login
     * */
    SET_AUTH_USER(state, user){
        state.users.push(user);
        state.isAuthenticated = true;
       
    },
    /**
     * use this mutation to check user authentication
     * @param {} state 
     * @param {} status 
     */
    SET_AUTH_STATUS(state, status){
        /**his line of code updates the isAuthenticated property of the state to the value passed in status.
         * If status is true, state.isAuthenticated will be set to true.
         * If status is false, state.isAuthenticated will be set to false.
         * by default it set to false
         */
        state.isAuthenticated = status
    }
    
}

const actions = {
    
    async signup(context, user){
        /** this line checks if there user is existing
         * if yes then add to the  state.users.length generates new userId
         * and if not then it get id from getNewUserId and assign id:1 
         */
        const id = state.users.length ? getNewUserId(state.users) : 1;
        /** this assigns the new generated id to the id of user object */
        user.id = id
        context.commit('SET_AUTH_USER', user)
    },
    async login(context, {email, password}){
        // context.commit('SET_AUTH_USER', user)
        /**This assigns the list of users stored in the Vuex state to the variable storedUser. */
         const storedUser = context.state.users;
         /**This search the storedUser to find a user whose email and password match the provided email and password arguments.
          * The matching user is assigned to the user variable. */
         const user = storedUser.find(user => user.email === email && user.password === password)
        
         /**
          * This checks if a matching user was found. 
          * If a user is found, it commits the user object to the Vuex store using the SET_AUTH_USER mutation.
          * If no user is found, it throws an error with the message 'invalid email and password'.
          */
         if(user){
            context.commit('SET_AUTH_USER', user)
        }else{
            throw new Error('invalid email and password')
        }
    },

    checkAuth(context){
        /** this line checks in users array which is declared in state
         * to find a user who is authenticated
         */
        const user = context.state.users.find(user => user.isAuthenticated);
        /**
         * this line commit the 'SET_AUTH_STATUS' with boolean value
         * !! object convert the user object in boolean
         * if user is found it convert to true
         * if user is not found it convert to false
         */
        context.commit('SET_AUTH_STATUS', !!user)
    }
}

const getNewUserId = (users) =>{
    const lastUserId = users[users.length - 1].id;
    return Number(lastUserId + 1);
}

export default{
    
    state,
    getters,
    mutations,
    actions
}