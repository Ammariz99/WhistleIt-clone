import VuexPersistence from "vuex-persist";
import localforage from "localforage";


export const vuexLocal = new VuexPersistence({
    key: "userLogin",
    storage: localforage,
    asyncStorage: true,



  })

