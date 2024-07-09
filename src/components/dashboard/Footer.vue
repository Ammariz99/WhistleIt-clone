<template>
    <v-footer
        app
        color="transparent"
        height="120"
        inset
        
      >
        
        <v-sheet color="#eeeff7"  width="1100px" class=" align-center justify-center">
        <v-text-field
          v-model="message"
          background-color="white"
          dense
          tile
          solo
          append-icon="mdi-send-outline"
          @click:append="sendMessage"
          label="Type your query here"
         ></v-text-field>
        <div class="wrapper d-flex ">
            <div>
                <v-icon class="mx-1 ">mdi-format-bold</v-icon>
                <v-icon class="mx-1">mdi-format-italic</v-icon>
                <v-icon class="mx-1">mdi-format-strikethrough</v-icon>
                <v-icon class="mx-1">mdi-format-underline</v-icon>
                <v-icon class="mx-1">mdi-xml</v-icon>
                <v-icon class="mx-1">mdi-format-list-bulleted</v-icon>
                <v-icon class="mx-1">mdi-format-list-checkbox</v-icon>
            </div>
            <v-spacer></v-spacer>
            <div>
                <v-icon class="mx-1 ">mdi-emoticon</v-icon>
                <v-icon class="mx-1">mdi-clipboard-account-outline</v-icon>
                <v-icon class="mx-1">mdi-paperclip</v-icon>
                <v-icon class="mx-1">mdi-video-account</v-icon>
                <v-icon class="mx-1">mdi-microphone</v-icon>
                </div>
        </div> 
        </v-sheet>
      </v-footer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'Footer',
    data(){
      return{
        message: '',
      }
    },
    methods: {
      /** mapAction is the helper function which is used when we get actions data from vuex store
       * sendMsg is the module which we use
       * addMessage is the action in vuex store which we use here
       * it means addMessage action is available as a method for this component
       */
      ...mapActions('sendMsg', ['addMessage']),
      

      /**sendMessage is the function it works when user send message  */
      
      sendMessage() {
        /**
         * it checks this.meesage.trim just get the text and remove the spaces
         * selectedMessage is user is selected
         * if both condition are met then it call the addMessage action from vuex store
         */
         if (this.message.trim() && this.selectedMessage) {
        this.addMessage({ userId: this.selectedMessage.id, message: this.message });
        this.message = '';
        }
          }
    },
    
    computed: {
      /** mapGetter is the helper function which we use getter data from vuex store
       * message is the module
       * selectedMessage is the getter which is defined in getters in vuex message module
       */
       ...mapGetters('message', ['selectedMessage'])


    }
}
</script>

<style scoped>

</style>