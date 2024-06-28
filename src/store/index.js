import Vue from 'vue'
import Vuex from 'vuex'
import { vuexLocal } from '../plugins/vuex-persist'
import authModule from '@/store/modules/auth.js'
import channelModule from '@/store/modules/channel.js'
import messageModule from '@/store/modules/message.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    auth: authModule,
    channel: channelModule,
    message: messageModule,
  },
  plugins:[vuexLocal.plugin]
})