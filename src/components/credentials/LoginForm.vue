<template>
    <v-container>
        <h2 class="mt-1 ml-16" >Login</h2>
        <p class="mt-4 ml-16">Enter your credentials to proceed</p>
        <v-form @submit.prevent="submitForm" class="mt-4 ml-16">
          <v-text-field v-model="formData.email" label="Email*" type="email" :rules="[rules.email]"></v-text-field>
          <v-text-field v-model="formData.password" label="Password*" type="password" :rules="[rules.password]"></v-text-field>
          <v-row class="d-flex align-center ">
                <v-col cols="6">
                    <v-checkbox v-model="formData.checkbox" label="Remember Me"></v-checkbox>
                </v-col>
                <v-col cols="6" class="text-right">
                    <router-link to="/forgotPassword" class="text-decoration-none">Forgot Password?</router-link>
                </v-col>
            </v-row>
          <v-btn color="#9aa3fd" type="submit" block>Login</v-btn>
          <v-row class="mt-4">
            <v-col class="d-flex">
              <p class="ml-6">Don't have an Account</p>
              <router-link to="/signup" class="ml-2 mb-4 text-decoration-none">Sign Up</router-link>
            </v-col>
          </v-row>
        </v-form>
        <v-snackbar v-model="successSnackbar" :timeout="snackbarTimeout" top right color="green">
          {{ snackbarText }}
        </v-snackbar>

        <v-snackbar v-model="errorSnackbar" :timeout="snackbarTimeout" top right color="error">
          Invalid email & password
        </v-snackbar>
      </v-container>
    </template>
    
<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            formData: {
                email: '',
                password: '',
                checkbox: false,
            },
            rules:{
                email: value => !!(value || '').match(/@/) || 'Please Enter a valid email',
                password: value => !!value || 'Password is Required'
            },
            successSnackbar: false,
            errorSnackbar: false,
            snackbarText: 'Login Successful',
            snackbarTimeout: 2000,

        }
        
    },
    methods: {
      ...mapActions(['login']),
      async submitForm() {
    try {
      await this.login({ email: this.formData.email, password: this.formData.password });
      this.successSnackbar = true;
      this.snackbar = true;
      
      setTimeout(() =>{
      this.$router.push('/dashboard'); 
      }, this.snackbarTimeout);
    } catch (error) {
      console.error('Login failed:', error.message);
      this.errorSnackbar = true;
      
    }
  },
    }
    
}
</script>

<style>

</style>