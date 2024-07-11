<template>
    <v-footer
        app
        color="transparent"
        height="120"
        inset
        
      >
        
        <v-sheet color="#eeeff7"  width="1100px" class=" align-center justify-center">
        <div class="input-container">
          <label for="editor" class="input-label">Type your query here</label>
          <!-- 
          editor-content is the component that binds to the editor instance 
          :editor="editor" passes the editor instance to the editor-content component
          id="editor" sets the id of the element to "editor"
          class="editor-input" applies the "editor-input" CSS class to the element
          -->
          <editor-content :editor="editor" id="editor" class="editor-input" />
          <v-icon class="send-icon" @click="sendMessage">mdi-send-outline</v-icon>
        </div>
        <div class="wrapper d-flex ">
          <div>
          <v-icon class="mx-1" @click="toggleBold">mdi-format-bold</v-icon>
          <v-icon class="mx-1" @click="toggleItalic">mdi-format-italic</v-icon>
          <v-icon class="mx-1" @click="toggleStrikethrough">mdi-format-strikethrough</v-icon>
          <v-icon class="mx-1" @click="toggleUnderline">mdi-format-underline</v-icon>
          <v-icon class="mx-1" @click="toggleCode">mdi-xml</v-icon>
          <v-icon class="mx-1" @click="toggleBulletList">mdi-format-list-bulleted</v-icon>
          <v-icon class="mx-1" @click="toggleCheckboxList">mdi-format-list-checkbox</v-icon>
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
import { Editor, EditorContent } from '@tiptap/vue-2';
import StarterKit from '@tiptap/starter-kit';

export default {
    name: 'Footer',
    components: {
      EditorContent,
    },
    data() {
    return {
      /**
        * editor is an instance of Editor
        * it is initialized with extensions (StarterKit) and empty content
      */
      editor: new Editor({
        extensions: [StarterKit],
        content: '',
      }),
    };
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
         * it checks this.message.trim just get the text and remove the spaces
         * selectedMessage is user is selected
         * if both conditions are met then it calls the addMessage action from vuex store
         * this.editor.getHTML() retrieves the HTML content from the editor
         * this.editor.commands.clearContent() clears the content of the editor
        */
         const message = this.editor.getHTML();
      if (message.trim() && this.selectedMessage) {
        this.addMessage({ userId: this.selectedMessage.id, message });
        this.editor.commands.clearContent();
      }
    },
    toggleBold() {
      this.editor.chain().focus().toggleBold().run();
    },
    toggleItalic() {
      this.editor.chain().focus().toggleItalic().run();
    },
    toggleStrikethrough() {
      this.editor.chain().focus().toggleStrike().run();
    },
    toggleUnderline() {
      this.editor.chain().focus().toggleUnderline().run();
    },
    toggleCode() {
      this.editor.chain().focus().toggleCode().run();
    },
    toggleBulletList() {
      this.editor.chain().focus().toggleBulletList().run();
    },
    toggleCheckboxList() {
      this.editor.chain().focus().toggleTaskList().run();
    },
    },
    
    computed: {
      /** mapGetter is the helper function which we use getter data from vuex store
       * message is the module
       * selectedMessage is the getter which is defined in getters in vuex message module
       */
       ...mapGetters('message', ['selectedMessage'])


    },
    beforeDestroy() {
    this.editor.destroy();
  },
}
</script>
<style scoped>
.input-container {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
}
.input-label {
  position: absolute;
  top: -20px;
  left: 0;
  font-size: 14px;
  color: #757575;
}
.editor-input {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  flex-grow: 1;
  min-height: 36px;
}
.send-icon {
  margin-left: 8px;
  cursor: pointer;
}
</style>