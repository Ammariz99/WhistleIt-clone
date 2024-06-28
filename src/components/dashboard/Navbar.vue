<template>
  <v-app-bar app clipped-right flat height="72">
    <div v-if="selectedChannel" class="selected-channel">{{ selectedChannel }}</div>
    <div v-if="selectedMessage" class="selected-message">{{ selectedMessage }}</div>
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
import { mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  computed: {
    ...mapGetters('channel', ['selectedChannel']),  
    ...mapGetters('message',['selectedMessage'])
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
