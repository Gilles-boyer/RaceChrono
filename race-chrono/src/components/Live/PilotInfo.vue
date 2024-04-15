<template>
    <div class="text-center">
        <v-avatar tile class="mx-auto" size="100">
            <v-icon color="#700000" class="mx-auto " size="100">
                mdi-podium
            </v-icon>
        </v-avatar>
        <!--Titre dynamique-->
        <h2>Resultat Live</h2>
        <h2>Session {{ session }}</h2>
    </div>
</template>

<script>
export default {
    name: 'PilotInfo',
    props: ['session']
};
</script>