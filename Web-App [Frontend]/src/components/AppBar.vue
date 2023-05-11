<template>
  <!-- <v-app-bar  :elevation="elevation()" :color="color()" id="app-header"> -->
            <!-- <v-img
            v-if="$route.path == '/'"
            alt="Vuetify Logo"
            class=" shrink"
            :src="require('../../src/assets/maersk.svg')"
            transition="scale-transition"  
            width="10%"
            /> -->

            <!-- <v-img
            v-else
            alt="Vuetify Logo"
            class=" shrink"
            :src="require('../../src/assets/maersk.svg')"
            transition="scale-transition"  
            width="8%"/> -->
        
        <!-- <v-spacer></v-spacer>
      <v-row justify="end">
        <v-menu class="profile"
          bottom
          min-width="270px"
          rounded
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-btn
            
              icon
              x-large
              v-on="on"
            >
              <v-avatar
                class = "white"
                size="40"
              >
                <span class=" initials text-h6">{{ userinit }}</span>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <v-avatar
                   size="40"
                  class = "maersk-primary-color"
                >
                  <span class="white--text text-h6">{{ userinit }}</span>
                </v-avatar>
                <h3 class="mt-1"><strong>{{ username }}</strong></h3>
                <p class="text-caption mt-1">
                  {{ useremail }}
                </p>
                <v-divider class="my-3"></v-divider>
                <v-btn depressed
                       rounded
                       text
                       @click="signOut">
                  Sign Out
                </v-btn>
              </div>
            </v-list-item-content>
          </v-card>
        </v-menu>
      </v-row>
  </v-app-bar>

  
  </template> -->
  <!-- <script>
      export default {
          name: 'AppBar',
          props:['username', 'useremail', 'userinit'],
          data: () => ({
      }),
        methods: {
          signOut: function () {
            this.$root.$emit('appBarSignOut')
          },
          color(){
           
            return "white"
            
          },
          elevation(){
           return 4
            
          }
        }
      }
  </script>
  <style scoped>
  
.initials{
  color:#42B0D5;
}
  
      .text-head {
          font-size: 22px;
          font-weight: 600;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
      }
      .usericon {
          vertical-align: middle;
      }
      .profile{
              min-width: 270px;
              top: 57px;
              left: 990px;
              transform-origin: left top;
              z-index: 13;
      }
      
  </style> -->



<!-- <template>
  <v-app-bar  color="white" id="app-header">
        <div class=" d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-4"
            :src="require('../../src/assets/maersk.svg')"
            transition="scale-transition"  
            width="135"/>
        </div>
        <v-spacer></v-spacer>
      <v-row justify="end">
        <v-menu class="profile"
          bottom
          min-width="270px"
          rounded
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              x-large
              v-on="on"
            >
              <v-avatar
                class = "maersk-primary-color"
                size="40"
              >
                <span class="white--text text-h6">{{ userinit }}</span>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <v-avatar
                   size="40"
                  class = "maersk-primary-color"
                >
                  <span class="white--text text-h6">{{ userinit }}</span>
                </v-avatar>
                <h3 class="mt-1"><strong>{{ username }}</strong></h3>
                <p class="text-caption mt-1">
                  {{ useremail }}
                </p>
                <v-divider class="my-3"></v-divider>
                <v-btn depressed
                       rounded
                       text
                       @click="signOut">
                  Sign Out
                </v-btn>
              </div>
            </v-list-item-content>
          </v-card>
        </v-menu>
      </v-row>
  </v-app-bar>
  </template>
  <script>
      export default {
          name: 'AppBar',
          props:['username', 'useremail', 'userinit'],
          data: () => ({
      }),
        methods: {
          signOut: function () {
            this.$root.$emit('appBarSignOut')
          }
        }
      }
  </script>
  <style scoped>
      .text-head {
          font-size: 22px;
          font-weight: 600;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
      }
      .usericon {
          vertical-align: middle;
      }
      .profile{
              min-width: 270px;
              top: 57px;
              left: 990px;
              transform-origin: left top;
              z-index: 13;
      }
      
  </style> -->