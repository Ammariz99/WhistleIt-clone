<template>
  <v-app id="inspire">
    <!--Navbar Start-->
    <Navbar/>
    <!--Navbar End-->


    <v-navigation-drawer :value="drawer" app width="300" color="#2f2c54">


      <!--Primary Sidebar Imported Start-->
            <PrimarySidebar/>
      <!--Primary Sidebar Imported Start-->


      
      <!--Secondary Sidebar Start-->
      <SecondarySidebar/>
      <!--Secondary Sidebar End-->

    </v-navigation-drawer>


    <v-main class="ma-1 pa-1">
      <v-card class="mb-4">
        <v-card-text class="text-left">
          <v-icon large>mdi-forum-outline</v-icon>
          <span class="font-weight-bold">
            This conversation is just between the members
          </span>
          <br>
          <span class="ml-10">Here you can send messages and share files with <span class="blue-text">@{{ selectedChannel.name }}</span></span>
        </v-card-text>
      </v-card>
<v-row>
  <v-col cols="12">
    <!--display the message for the selected user start-->
    <div v-if="selectedChannel && userMessages[selectedChannel.id]">
    <div v-for="(msg, index) in userMessages[selectedChannel.id]" :key="index">
      <div class="d-flex align-items-center " >
        <v-avatar
          color="#7531c4"
          size="40"
          class="mt-4"
        >
        </v-avatar>
        <span class="font-weight-bold ml-1 mt-5">{{ selectedChannel.name }}</span>
        <v-spacer></v-spacer>
      
        <v-menu bottom right>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn :bind="attrs" v-on="on"  small>
                    <v-icon>mdi-emoticon</v-icon>
                    <v-icon>mdi-content-copy</v-icon>
                    <v-icon>mdi-pin</v-icon>
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="startEditingMessage(selectedChannel.id, index, msg)">
                    <v-list-item-title><v-icon >mdi-pencil</v-icon>Edit </v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="handleDeleteMessage(selectedChannel.id, index)">
                    <v-list-item-title><v-icon>mdi-delete-outline</v-icon>Delete</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
   
      </div>
      <div class="paragraph ml-11" v-html="msg"></div>
      
    </div>
  </div>
    <!--display the message for the selected user end-->

    <!-- Edit Message Modal start-->
     <v-dialog v-model="editDialog" max-width="500px">
      <v-card>
        <v-card-title class="d-flex justify-center">
          <span class="headline">Edit Message</span>
        </v-card-title>
        <v-card-text>
              <v-text-field v-model="editedMessage"></v-text-field>
            <div class="wrapper d-flex">
              <div>
              <v-icon class="mx-1 ">mdi-format-bold</v-icon>
              <v-icon class="mx-1">mdi-format-italic</v-icon>
              <v-icon class="mx-1">mdi-format-strikethrough</v-icon>
              <v-icon class="mx-1">mdi-format-underline</v-icon>
              <v-icon class="mx-1">mdi-xml</v-icon>
              <v-icon class="mx-1">mdi-format-list-bulleted</v-icon>
              <v-icon class="mx-1">mdi-format-list-checkbox</v-icon>
            </div>
            </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="editDialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="saveEditedMessage">Save</v-btn>
        </v-card-actions>
      </v-card>
     </v-dialog>
    <!-- Edit Message Modal end-->

    <!--Delete Message Modal Start-->
    <v-dialog v-model="deleteDialog" max-width="500px">
      <v-card>
        <v-card-title class="d-flex justify-center">Confirm Delete</v-card-title>
        <v-card-text>Are you sure you want to delete this message?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="deleteDialog = false">Cancel</v-btn>
          <v-btn color="red" text @click="deleteMessageConfirmed">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--Delete Message Modal End-->



  </v-col>
</v-row>
</v-main>
    <!--Footer Start-->
    <Footer/>
    <!--Footer End-->

  </v-app>
</template>

<script>
import PrimarySidebar from '@/components/dashboard/PrimarySidebar.vue';
import SecondarySidebar from '@/components/dashboard/SecondarySidebar.vue';
import Navbar from '@/components/dashboard/Navbar.vue';
import Footer from '@/components/dashboard/Footer.vue'
import { mapActions,mapGetters, } from 'vuex';
  export default {
      name: 'AppDashboard',
      components: {
        PrimarySidebar,
        SecondarySidebar,
        Navbar,
        Footer
      },
    data(){
      return {
          drawerOpen: null,
          editDialog: false,
          editedMessage: '',
          editMessageDetails: null,
          deleteDialog: false,
          deleteMessageDetails: null,
      }
    },
    computed: {
      ...mapGetters('sendMsg', ['userMessages']),
      ...mapGetters('message', ['selectedMessage']),
      ...mapGetters('channel', ['selectedChannel']),
      ...mapGetters('hamburger', ['drawer'])
      
    },
    methods: {
      ...mapActions('sendMsg', ['deleteMessage', 'editMessage']),
      ...mapActions('hamburger', ['toggleDrawer']),
/**=============================Delete Message Functionality Start=========================== */
      /**This function handles the delete Message
       * @params {userId, messageIndex}
       */
      handleDeleteMessage(userId, messageIndex){
        /**
         * This line creates an object deleteMessageDetails containing userId and messageIndex. 
         * This object likely holds the information needed to identify which message is to be deleted.
         */
        this.deleteMessageDetails ={userId, messageIndex}
        /**
         * This line sets deleteDialog to true, 
         * It likely controls the visibility of a modal confirming the deletion of the message.
         */
        this.deleteDialog = true
      },

      /** Function to confirm the delete message before deleting*/
      deleteMessageConfirmed(){
        /** This condition checks if deleteMessageDetails is not null. */
        if(this.deleteMessageDetails){
          /**If deleteMessageDetails exists, 
           * it calls a action (deleteMessage) to delete the message based on the userId and messageIndex */
          this.deleteMessage(this.deleteMessageDetails)
          /**
           *  Closes the delete dialog  modal
           *  (deleteDialog is likely a boolean or control variable that determines if the dialog is open).
           */
          this.deleteMessageDetails =  null
        }
        this.deleteDialog = false
      },
/**=============================Delete Message Functionality End=========================== */

/**=============================Edit Message Functionality Start=========================== */


      /** Funtion for editing message
       * @params ( userId, messageIndex, message)
       * userId -> identify that which user's message to be edited
       * messageIndex -> index of the message to be edited
       * message -> current message which is to be edit
       */
      startEditingMessage(userId, messageIndex, message){
        /** 
         * This line assigns the current message content (message) to a component data property called editedMessage.
         * This likely means editedMessage is used to hold the message being edited so it can be displayed in an input field for editing.
         */
        this.editedMessage = message,
        /**
         * This line creates an object with userId and messageIndex and assigns it to a component data property called editMessageDetails.
         * This stores the details about which message is being edited (which user and which message index).
         */
        this.editMessageDetails = {userId, messageIndex}
        /**
         * This line sets a component data property editDialog to true.
         * This likely means editDialog controls the visibility of a modal where the message can be edited, and setting it to true opens the dialog.
         */
        this.editDialog = true
      },

      /** saveEditedMessage function saving the edited message */
      saveEditedMessage(){
        /** This condition checks if editMessageDetails is not null or undefined. */
        if(this.editMessageDetails){
          /** If editMessageDetails exists, it calls a action named editMessage. */
          this.editMessage({
            /** It passes an object with:
                  userId: The ID of the user whose message is being edited.
                  messageIndex: The index of the message in the user's message array that is being edited.
                  newMessage: The updated message content (editedMessage) that will replace the old message.
              */
            userId: this.editMessageDetails.userId,
            messageIndex: this.editMessageDetails.messageIndex,
            newMessage: this.editedMessage
          })
        }
        /** close the editDialog modal after editing it works only when modal is open */
        this.editDialog = false,
        /** this clears the edit message inout field to empty */
        this.editedMessage = '',
        /** clear the editMessageDetails to null */
        this.editMessageDetails = null
      }
    /**=============================Edit Message Functionality Start=========================== */
    }
    
  }
</script>

<style scoped>
.paragraph{
background-color: #eeeff7;
}
.blue-text{
color: #6470fb
}

</style>
