<template>
    <v-container>
        <h2 class="mt-1 ml-16" >Login</h2>
        <p class="mt-4 ml-16">Enter your credentials to proceed</p>
        <v-form @submit.prevent="submitForm" class="mt-4 ml-16">
          <v-text-field v-model="formData.email" label="Email*" type="email" :rules="[rules.email]" required></v-text-field>
          <v-text-field v-model="formData.password" label="Password*" type="password" :rules="[rules.password]" required></v-text-field>
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
            }
        }
        
    },
    methods: {
      ...mapActions(['login']),
      async submitForm() {
    try {
      await this.login({ email: this.formData.email, password: this.formData.password });
      // If login is successful, proceed to redirect
      
      this.$router.push('/dashboard'); // Redirect to dashboard
    } catch (error) {
      console.error('Login failed:', error.message);
      // Handle login failure, e.g., show error message
    }
  },
    }
    
}
</script>

<style>

</style>