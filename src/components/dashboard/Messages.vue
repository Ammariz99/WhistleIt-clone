<template>
    <div>
        <!--Direct Messages Heading Start-->
        <div class="heading">
          <div class="heading-content" @click="toggleDirectMessages">
            <v-btn text small rounded color="#e8e7ec">
              <v-icon>{{ directMessageIcon }}</v-icon>
              Messages
            </v-btn>
            <v-btn icon color="#e8e7ec" class="ml-16" small>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>
        </div>
        <!--Direct Messages Heading End-->

        <!--Direct Message Open Collapse Start-->
        <v-expand-transition>
          <div v-show="showDirectMessages">
            <v-list-item v-for="user in directMessages" :key="'user-'+ user.id" link @click="selectMessage(user.name)">
              <v-list-item-content>
                <v-list-item-title class="user-name">{{ user.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-expand-transition>
        <!--Direct Message Open Collapse End-->
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'Messages',
    data(){
        return {
            showDirectMessages: false,
            directMessages:[
                        {
                          id: 1,
                          name: 'Kashif',
                        },
                        {
                          id: 2,
                          name: 'Mohsin',
                        },
                        {
                          id: 3,
                          name: 'Saqib'
                        },
                      ],
       
        }
    },
    methods:{
      ...mapActions('message', ['setSelectedMessage']),
        toggleDirectMessages(){
        this.showDirectMessages = !this.showDirectMessages
      },
      selectMessage(userName){
        this.setSelectedMessage(userName)
      }
    },
    computed: {
        directMessageIcon(){
        return this.showDirectMessages ?  'mdi-chevron-up' : 'mdi-chevron-down'
      }
    },

}
</script>

<style>
.user-name{
    color: #fff
}
</style>