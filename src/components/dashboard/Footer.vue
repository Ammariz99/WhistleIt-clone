<template>
    <v-footer
        app
        color="transparent"
        height="95"
        inset
      >
        
        <v-sheet color="#eeeff7"  width="1100px" class=" align-center justify-center">
        <v-text-field
          background-color="white"
          dense
          flat
          hide-details
          rounded
          solo
          append-icon="mdi-send-outline"
          label="Type your query here"
        ></v-text-field>
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
export default {
    name: 'Footer'
}
</script>