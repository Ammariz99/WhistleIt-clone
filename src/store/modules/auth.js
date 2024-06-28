
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
    
}

const actions = {
    async signup(context, user){
        context.commit('SET_AUTH_USER', user)
        console.log(user);
    },
    async login(context, {email, password}){
        // context.commit('SET_AUTH_USER', user)
         const storedUser = context.state.users;
         const user = storedUser.find(user => user.email === email && user.password === password)
        console.log(storedUser)
        console.log(email)
        console.log(password)
         if(user){
            context.commit('SET_AUTH_USER', user)
        }else{
            throw new Error('invalid email and password')
        }
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}