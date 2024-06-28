<template>
  <div>
    <v-list class="pl-14 " color="#2f2c54" shaped>
        <p class="recent-heading"> 
            <v-icon color="#626285" small>mdi-message-outline</v-icon>
            Recents
        </p>

        <!--===============Channel Component Start=============-->
        <Channels/>
        <!--===============Channel Component End=============-->

        <!--===============Direct Message Component Start============-->
        <Messages/>

        <!--===============Direct Message Component End============-->

          
        </v-list>
      </div>
</template>

<script>
import Channels from './Channels.vue'
import Messages from './Messages.vue'
export default {
    name: 'SecondarySidebar',
    components:{
      Channels,
      Messages,
    },
}
</script>

<style scoped>
.recent-heading{
  color: #626285;
  margin-left: 30px;
  margin-top: 7px;
  font-size: 1rem;
}
</style>
