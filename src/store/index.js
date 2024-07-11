import Vue from 'vue'
import Vuex from 'vuex'
import { vuexLocal } from '../plugins/vuex-persist'
import authModule from '@/store/modules/auth.js'
import channelModule from '@/store/modules/channel.js'
import messageModule from '@/store/modules/message.js'
import sendMsgModule from '@/store/modules/sendMsg.js'
import hamburgerModule from '@/store/modules/hamburger.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    auth: authModule,
    channel: channelModule,
    message: messageModule,
    sendMsg: sendMsgModule,
    hamburger: hamburgerModule
  },
  plugins:[vuexLocal.plugin]
})