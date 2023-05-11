<template>
  <v-app>
    <v-row>
      <v-col cols="12" :class="homeViewClass">
        <v-main>
          <router-view />
        </v-main>
      </v-col>
    </v-row>
    <NavBar v-if="$route.name === 'HomeView' || $route.name === 'UserProfile' " class="hero-image" />
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar
  },
  computed: {
    homeViewClass() {
      return {
        'mr-top': this.$route.name === 'HomeView',
        'mr-left': this.$route.name === 'HomeView',
        'mr-right': this.$route.name === 'HomeView'
      }
    }
  }
}
</script>

<style>
.hero-image {
  top: 0%;
}

#app-header.v-toolbar {
  position: fixed;
  z-index: 11;
  height: 55px !important;
}

#app-header.v-toolbar .v-toolbar__content {
  height: 55px !important;
}
</style>
