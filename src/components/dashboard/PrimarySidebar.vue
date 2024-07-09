<template>
    <!--first component left sidebar start-->
    <v-navigation-drawer v-model="drawer" absolute color="#423d68" mini-variant>
      <h3 class="workspace-title">Workspace</h3>
          <v-avatar class="d-block text-center mx-auto mt-4" color="grey darken-1" tile size="36">
            <img src="https://app.whistleit.io/api/viewFile/8727871658903416752809613.png" alt="">
          </v-avatar>
            
          <v-divider class="mx-3 my-5" color="white"></v-divider>
            <h3 class="teams-title">Teams</h3>
          <v-avatar 
            v-for="n in 1" 
            :key="'team-' + n"
            class="d-block text-center mx-auto mb-9"
            color="grey lighten-1"
            size="36"
            tile
          >
            <img src="https://app.whistleit.io/uploads/profile_pictures/1617172659.png" alt="">
          </v-avatar>

          <v-divider class="mx-2 my-16 "></v-divider>
          <v-divider class="mx-2 my-16 "></v-divider>
          <v-divider class="mx-2 my-16 "></v-divider>
          <v-divider class="mx-2 my-16 "></v-divider>
          <v-divider class="mx-2 my-16 "></v-divider>
          <v-divider class="mx-2 my-16 "></v-divider>
          <v-divider class="mx-2 my-16 "></v-divider>

          
          <v-divider class="mx-2 my-4 " color="white"></v-divider>


          <v-avatar
            v-for="n in 1"
            :key="'bottom-'+ n"
            class="d-block text-center mx-auto mb-9"
            color="grey lighten-1"
            size="40"
            tile
          ><img src="https://app.whistleit.io/api/viewFile/4412037881718274935494581125.png" alt=""> 
          <v-badge
        bordered
        bottom
        color="green accent-6"
        dot
        offset-x="10"
        offset-y="10"
      ></v-badge>
        </v-avatar>
        </v-navigation-drawer>
      <!--first component left sidebar end-->

</template>

<script>
export default {
    name: 'PrimarySidebar',
    data(){
        return {
            drawer: null,
        }
      },

}
</script>

<style scoped>
.workspace-title{
    text-align: center;
    font-size: 10px;
    color:white;
    margin-top: 15px;
}

.teams-title{
    text-align: center;
    font-size: 12px;
    color:white;
    margin-bottom: 10px;
}
</style>