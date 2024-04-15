<template>
  <v-container class="fill-h">
    <v-row class="text-center fill-h" align-content="stretch">
      <Logo />
      <SearchBar />
      <Footer />
    </v-row>
  </v-container>
</template>

<script>
import Logo from '../components/Home/Logo.vue';
import SearchBar from '../components/Home/SearchBar.vue';
import Footer from '../components/Home/Footer.vue';

export default {
  name: 'home',
  components: {
    Logo,
    SearchBar,
    Footer
  },

}
</script>

<style>
.fill-h {
  height: 100%;
}
</style>
