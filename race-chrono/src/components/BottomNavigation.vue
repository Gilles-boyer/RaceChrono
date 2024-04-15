<template>
    <v-bottom-navigation :value="$route.name" grow class="colorDegrade">
        <v-btn color="white" icon :to="{ name: 'home' }">
            <span>Acceuil</span>
            <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn color="white" icon :to="{ name: 'result-live' }">
            <span>Live</span>
            <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn color="white" icon :to="{ name: 'menu-result' }">
            <span>Résultat</span>
            <v-icon>mdi-podium</v-icon>
        </v-btn>

        <v-btn color="white" icon href="https://cfg.re/#contactCfg">
            <span>Message</span>
            <v-icon>mdi-email</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    name: 'BottomNavigation',
};
</script>

<style scoped>
.colorDegrade {
    background: rgb(195, 0, 0);
    background: -moz-linear-gradient(0deg, rgba(195, 0, 0, 1) 0%, rgba(255, 255, 255, 1) 100%);
    background: -webkit-linear-gradient(0deg, rgba(195, 0, 0, 1) 0%, rgba(255, 255, 255, 1) 100%);
    background: linear-gradient(0deg, rgba(195, 0, 0, 1) 0%, rgba(255, 255, 255, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c30000", endColorstr="#ffffff", GradientType=1);
}
</style>
