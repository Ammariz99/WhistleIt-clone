<template>
    <div>
        <!--Direct Messages Heading Start-->
        <div class="heading">
          <div class="heading-content" @click="toggleDirectMessages">
            <v-btn text small rounded color="#e8e7ec">
              <v-icon>{{ directMessageIcon }}</v-icon>
              Messages
            </v-btn>
            <v-btn icon color="#e8e7ec" class="ml-16" small @click="toggleAddDirectMessageDialog">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>
        </div>
        <!--Direct Messages Heading End-->

        <!--Direct Message Open Collapse Start-->
        <v-expand-transition>
          <div v-show="showDirectMessages">
            <v-list-item v-for="user in directMessages" :key="'user-'+ user.id" link @click="selectMessage(user)">
              <v-icon color="white" small>mdi-account-check</v-icon>
              <v-list-item-content>
                <v-list-item-title class="user-name " >{{ user.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-expand-transition>
        <!--Direct Message Open Collapse End-->

        <!--Add Direct Message start-->
        <v-dialog v-model="showAddDirectMessageDialog" max-width="500px">
          <v-card>
            <v-card-title class="justify-center">
              <span class="headline">Add Direct Message</span>
            </v-card-title>
            <v-card-text>
              <v-autocomplete v-model="selectedUsers" :items="directMessages" item-text="name"
               prepend-icon="mdi-magnify" multiple chips clearable></v-autocomplete>
            </v-card-text>
            <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeAddDirectMessageDialog">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="closeAddDirectMessageDialog">Go</v-btn>
        </v-card-actions>
          </v-card>
        </v-dialog>
        <!--Add Direct Message end-->

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'Messages',
    data(){
        return {
            showDirectMessages: true,
            selectedUsers: [],
       
        }
    },
    methods:{
      ...mapActions('message', ['setSelectedMessage', 'toggleAddDirectMessageDialog', 'closeAddDirectMessageDialog']),
      ...mapActions('channel', ['setSelectedChannel']),
        toggleDirectMessages(){
        this.showDirectMessages = !this.showDirectMessages
      },
      selectMessage(user){
        this.setSelectedMessage(user)
        this.setSelectedChannel(user);

      }
    },
    computed: {
      ...mapGetters('message', ['directMessages', 'showAddDirectMessageDialog']),
      

        directMessageIcon(){
        return this.showDirectMessages ?  'mdi-chevron-up' : 'mdi-chevron-down'
      },
      
    },

}
</script>

<style>
.user-name{
    color: #fff;
    margin-left: 3px;
}
</style>