<template>
  <div>
    <!--Channel Heading Start-->
    <div class="heading">
      <div class="heading-content">
        <v-btn text rounded color="#e8e7ec" small @click="toggleChannels">
          <v-icon>{{ channelIcon }}</v-icon>
          Channels
        </v-btn>
        <v-btn icon color="#e8e7ec" class="ml-16" @click="toggleAddChannelDialog">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </div>
    <!--Channel Heading End-->

    <!--Channel expand collapse Transition Start-->
    <v-expand-transition>
      <div v-show="showChannels">
        <v-list-item v-for="channel in channels" :key="'channel-'+ channel.channelId" link @click="selectChannel(channel)">
          <v-icon color="white" small>mdi-face-agent</v-icon>

          <v-list-item-content>
            <v-list-item-title class="channel-name">{{ channel.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-expand-transition>
    <!--Channel expand collapse Transition End-->

    <!-- Add Channel Dialog Start-->
     <v-dialog v-model="showAddChannelDialog" max-width="500px">
      <v-card>
        <v-card-title class="justify-center">
          <span class="headline ">Create Public Channel</span>
        </v-card-title>
        <v-card-text>
          <p>Channels are a way to communicate with your team. Organize your channels to relevant topic - Off-Topic</p>
          <v-text-field label="Name" v-model="newChannel.name" :rules="[rules.name]" placeholder="e.g Business-Plan"></v-text-field>
          <v-text-field label="Description" v-model="newChannel.description" placeholder="Optional" ></v-text-field>
          <h4>Make Private</h4>
          <div class="d-flex">
          <p>Private channel is only visible to members of the channel and can be joined by invitation only.</p>
          <v-switch v-model="newChannel.isPublic" inset color="#5765fb"></v-switch>
        </div>
        </v-card-text>
        <v-card-actions>
          <v-divider></v-divider>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="toggleAddChannelDialog">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="createChannel">Create</v-btn>
          </v-card-actions>
      </v-card>
     </v-dialog>
    <!-- Add Channel Dialog End-->

    
  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex';

export default {
  name: 'Channels',
  data() {
    return {
      showChannels: true,
      rules:{
        name: value => !!value || 'This Field is Required'
      }
    };
  },
  methods: {
    /**mapAction is the helper function to call the Actions from store where it defines
     * channel tells that from which module we use
     * and the actions we call from channel module we call in array [] i-e setSelectedChannel
     */
    ...mapActions('channel', ['setSelectedChannel', 'toggleAddChannelDialog', 
                              'setNewChannelName', 'setNewChannelDescription',
                              'setNewChannelPublic', 'createChannel', ]),  

    toggleChannels() {
      this.showChannels = !this.showChannels;
    },
    selectChannel(channel) {
      this.setSelectedChannel(channel);


    },
    
  },
  computed: {
    ...mapGetters('channel', ['channels', 'showAddChannelDialog','newChannel']),
    

    channelIcon() {
      return this.showChannels ? 'mdi-chevron-up' : 'mdi-chevron-down';
    }
  }
};
</script>

<style>
.channel-name {
  color: #fff;
  margin-left: 3px;
}
</style>
