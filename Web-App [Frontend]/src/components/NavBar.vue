<template >
  <!-- <nav> -->
    <!-- <AppBar class="pa-0" :username="username" :useremail="useremail" :userinit="userinitial"/> -->
    <v-navigation-drawer
        v-model="mainSidebarDrawer"
        permanent
        expand-on-hover
        @transitionend="collapseSubItems"
    >
      <v-list   dense
                nav rounded>
        <template v-for="(n, i) in nav">
          <v-list-item v-if="n.to" :key="`${i}-a`" :to="n.to" link :id="n.id">
            <v-list-item-icon>
              <v-icon small>{{ n.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ n.label }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-group
              v-if="n.subItems"
              :key="`${i}-b`"
              :prepend-icon="`${n.icon} fa-em`"
              v-model="n.active"
              append-icon="fas fa-chevron-down fa-sm"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ n.label }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
                v-for="(s, y) in n.subItems"
                :key="y"
                :to="s.to"
                link
                class="pl-8"
                :id="s.id"
            >
              <v-list-item-icon>
                <v-icon small>{{ s.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ s.label }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>

  <!-- </nav> -->
</template>

<script>

//import AppBar from "@/components/AppBar";

export default {
  name: 'NavBar',
  components: {
  //  AppBar,
  },
  props:['username', 'useremail', 'userinitial'],
  data() {
    return {
      nav: [
        {to:'/',label:'Dashboard',icon:'mdi-home',id:'dashboard-link',active:true},
        {to:'/profile',label:'User',icon:'mdi-account-circle',id:'dashboard-link',active:true},
      ],
      mainSidebarDrawer: true,
      mini: true,
    }
  },
  methods: {
    collapseSubItems() {
      this.nav.map((item)=>item.active=false)
    },
  },

}
</script>
<style >
.v-navigation-drawer {
  box-shadow: 1px 1px 6px 0px rgb(0 0 0 / 25%);
  position: fixed;
  top: 0px !important;
  z-index: 1;
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {

  color: rgb(0 36 61) !important;
}

.theme--light.v-icon {
  color: rgba(0, 0, 0, 0.54) !important;
  font-size: 24px !important;
}
.v-application .primary--text {
  color: #42b0d5 !important;
  caret-color: #42b0d5 !important;
}
.pa-0{
  padding:0;
}

a#product-link{
  position: absolute;
  bottom:70px;
  pointer-events: none;
}

</style>
