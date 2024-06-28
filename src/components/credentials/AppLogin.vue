<template>
    <v-container fluid class="ma-4 pa-4 ">
      <v-row>
        <!--give whistleIt logo coloumn 1 from 12 columns grid system-->
        <v-col cols="3" lg="1">
            <v-img src="https://app.whistleit.io/img/whistle-logo.8554b9a3.svg"
             class=""></v-img>
        </v-col>
        <!--give whistleIt logo coloumn 1 from 12 columns grid system-->


        <!--give form  coloumn 4 from 12 columns grid system-->
        <v-col cols="12" lg="4" class="d-flex  justify-center align-center">
            <LoginForm/>
        </v-col>
        <!--give form  coloumn 4 from 12 columns grid system-->


        <!--give form  coloumn 7 from 12 columns grid system-->
        <v-col cols="7" class="hidden-sm-and-down">
            <v-img src="https://app.whistleit.io/img/whistle%20login%20animation%20bg%202.4961b4a1.svg" 
            class="" height="690px"></v-img>
        </v-col>
        <!--give form  coloumn 7 from 12 columns grid system-->
      </v-row>
    </v-container>
  </template>

<script>
import LoginForm from '@/components/credentials/LoginForm.vue'
export default {
    name: 'AppLogin',
    components:{
        LoginForm
    },
}
</script>

<style>

</style>