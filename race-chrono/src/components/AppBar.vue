<template>
    <v-app-bar app elevation="0">
        <v-toolbar-title class="text-subtitle-2"> <v-icon>mdi-chevron-left</v-icon> {{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon :to="to"><v-img :src="require('../assets/logo.png')" class="my-2" contain
                height="30" /></v-app-bar-nav-icon>
    </v-app-bar>
</template>

<script>
export default {
    name: 'AppBar',
    props: ['title', 'to']
};
</script>