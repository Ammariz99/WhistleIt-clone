<template>
  <v-app-bar app clipped-right flat height="72">
    <v-app-bar-nav-icon @click="toggleDrawer" class="d-lg-none"></v-app-bar-nav-icon>
    <v-icon>mdi-star-outline</v-icon>
     <div v-if="selectedChannel"  class="selected-channel">{{ selectedChannel.name }}</div>  
     <div v-else class="selected-message">{{ selectedMessage.name }}</div>  
    
    <v-spacer></v-spacer>
    
    <v-responsive max-width="300">
      <v-row>
        <v-col class="d-flex justify-center ml-16">
          <v-btn icon>
            <v-icon >mdi-clock-outline</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon  >mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon >mdi-cog</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  
  computed: {
    ...mapGetters('channel', ['selectedChannel']),  
    ...mapGetters('message',['selectedMessage']),

    showChannelName(){
      if(this.selectedChannel.name){
        return this.selectedChannel.name
      }else{
        return this.selectedMessage.name
        }
      
    }
  },
  methods:{
    ...mapActions('hamburger', ['toggleDrawer'])
  }
  
};
</script>

<style scoped>
.selected-channel {
  color: #000;
  font-weight: bold;
  margin-right: 20px;
}
.selected-message {
  color: #000;
  font-weight: bold;
  margin-right: 20px;
}
</style>
