<template>
  <div>
    <!--Channel Heading Start-->
    <div class="heading">
      <div class="heading-content">
        <v-btn text rounded color="#e8e7ec" small @click="toggleChannels">
          <v-icon>{{ channelIcon }}</v-icon>
          Channels
        </v-btn>
        <v-btn icon color="#e8e7ec" class="ml-16">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </div>
    <!--Channel Heading End-->

    <!--Channel expand collapse Transition Start-->
    <v-expand-transition>
      <div v-show="showChannels">
        <v-list-item v-for="channel in channels" :key="'channel-'+ channel.id" link @click="selectChannel(channel.name)">
          <v-list-item-content>
            <v-list-item-title class="channel-name">{{ channel.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-expand-transition>
    <!--Channel expand collapse Transition End-->
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Channels',
  data() {
    return {
      showChannels: false,
      channels: [
        { id: 1, name: 'Access Control Support'},
        { id: 2, name: 'Announcements' },
        { id: 3, name: 'Network & It Support' },
        { id: 4, name: 'WhistleIt' },
        { id: 5, name: 'Hr' }
      ]
    };
  },
  methods: {
    ...mapActions('channel', ['setSelectedChannel']),   
    toggleChannels() {
      this.showChannels = !this.showChannels;
    },
    selectChannel(channelName,) {
      this.setSelectedChannel(channelName);

    }
  },
  computed: {
    channelIcon() {
      return this.showChannels ? 'mdi-chevron-up' : 'mdi-chevron-down';
    }
  }
};
</script>

<style>
.channel-name {
  color: #fff;
}
</style>
