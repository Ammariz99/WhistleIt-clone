<template>
    <v-app id="inspire">
      <!--Navbar Start-->
      <Navbar/>
      <!--Navbar End-->

  
      <v-navigation-drawer v-model="drawer" app width="300" color="#2f2c54">


        <!--Primary Sidebar Imported Start-->
              <PrimarySidebar/>
        <!--Primary Sidebar Imported Start-->

  
        
        <!--Secondary Sidebar Start-->
        <SecondarySidebar/>
        <!--Secondary Sidebar End-->

      </v-navigation-drawer>
  
      
  
      <v-main>
        <!--  -->
        <h1>this is main content</h1>
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
            drawer: null,
        }
      },
    }
  </script>

  <style scoped>

</style>