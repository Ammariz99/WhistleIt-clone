<template>
<v-container>
    <h2 class="mt-16 ml-16" >Create Account</h2>
    <p class="mt-4 ml-16">Fill the form below to create an account</p>
    <v-form @submit.prevent="submitForm" class="mt-4 ml-16">
      <v-text-field v-model="formData.name" label="Name*" :rules="[rules.name]" ></v-text-field>
      <v-text-field v-model="formData.companyName" label="Company Name*" :rules="[rules.companyName]"></v-text-field>
      <v-text-field v-model="formData.email" label="Email*" type="email" :rules="[rules.email]"></v-text-field>
      <v-text-field v-model="formData.password" label="Password" type="password" required></v-text-field>
      <v-text-field v-model="formData.confirmPassword" label="Confirm Password*" :rules="[rules.confirmPassword]" type="password" required></v-text-field>
      <v-checkbox v-model="formData.checkbox" label="I Accept to the Terms and Privacy Policy"></v-checkbox>
      <v-btn color="#9aa3fd" type="submit" block>Create Account</v-btn>
      <v-row class="mt-4">
        <v-col class="d-flex">
          <p class="ml-6">Already have an Account?</p>
          <router-link to="/login" class="ml-2 mb-4 text-decoration-none">Login</router-link>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>


<script>
import { mapActions } from 'vuex'
export default {
    name: 'SignupForm',
    data() {
    return {
      formData: {
        name: '',
        companyName: '',
        email: '',
        password: '',
        confirmPassword: '',
        checkbox: false,
      },
      rules:{
        name: value => !!value || 'Name is Required',
        companyName: value => !!value || 'Company Name Must be Required',
        email: value => !!(value || '').match(/@/) || 'Please Enter a valid email',
        confirmPassword: value => !!value || 'Required'
      },
    };
  },
  methods: {
    ...mapActions(['signup']),
    async submitForm() {
      if (this.formData.password !== this.formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      const user = {
        fullName: this.formData.name,
        companyName: this.formData.companyName,
        email: this.formData.email,
        password: this.formData.password,
        confirmPassword: this.formData.confirmPassword,
      };
      // console.log(user);
      
        this.signup(user);
        this.$router.push('/login'); // Redirect to login on successful signup
       
        // alert(error.message); // Display error message
      
    },
  
  }
}
</script>