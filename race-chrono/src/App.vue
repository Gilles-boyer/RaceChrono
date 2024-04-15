<template>
  <v-app>
    <v-main class="redBackgrounp">
      <router-view />
    </v-main>
    <v-footer app class="pa-0">
      <BottomNavigation />
    </v-footer>
  </v-app>
</template>

<script>
import BottomNavigation from './components/BottomNavigation.vue';

export default {
  name: 'App',
  components: {
    BottomNavigation
  },
};
</script>

<style>
.colorDegrade {
  background: rgb(195, 0, 0);
  background: -moz-linear-gradient(0deg, rgba(195, 0, 0, 1) 0%, rgba(255, 255, 255, 1) 100%);
  background: -webkit-linear-gradient(0deg, rgba(195, 0, 0, 1) 0%, rgba(255, 255, 255, 1) 100%);
  background: linear-gradient(0deg, rgba(195, 0, 0, 1) 0%, rgba(255, 255, 255, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c30000", endColorstr="#ffffff", GradientType=1);
}

.redBackgrounp {
  background: #F7F2F4;
}
</style>

