import VuexPersistence from "vuex-persist";
import localforage from "localforage";


export const vuexLocal = new VuexPersistence({
    key: "userLogin",
    storage: localforage,
    asyncStorage: true,


    // //it is example how we use restoreState and filter not related to this project just for usage
    // //restored the data from local storage in variable storedState
    // restoreState:(key, storage) => {
    //     const storedState = JSON.parse(storage.getItem(key));
    //     return{ ModuleTodos: {...storedState}} || {}
    // },

    // /* use filter because we only want that mutations that include in filter to update in local storage
    //    when triggered */
    // filter:(mutation) => [
    //     "setTodo",
    //     "newTodo",
    //     "removeTodo"
    // ].includes(mutation.type)
  })

