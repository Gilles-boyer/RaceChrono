<template>
    <v-container>
        <AppBar title="ACCUEIL" :to="{ name: 'home' }" />
        <RefreshButton @clickMethod="getSessionLive()" />
        <PilotInfo :session="session" />
        <PilotList :pilots="pilots" />
    </v-container>
</template>

<script>
import AppBar from '../components/AppBar.vue';
import RefreshButton from '../components/RefreshButton.vue';
import PilotInfo from '../components/Live/PilotInfo.vue';
import PilotList from '../components/Live/PilotList.vue';
import apiChrono from "../service/chrono.js";

export default {
    name: "result-live",
    components: {
        AppBar,
        RefreshButton,
        PilotInfo,
        PilotList
    },
    data: () => ({
        pilots: [],
        session: ""
    }),
    mounted() {
        var self = this;
        this.getSessionLive()
        this.interval = setInterval(function () {
            self.getSessionLive();
        }, 30000)
    },
    beforeDestroy() {
        clearInterval(this.interval);
    },
    methods: {
        getSessionLive() {
            this.session = "";
            this.pilots = [];
            apiChrono.getSessionLive()
                .then(res => {
                    //define number session
                    this.session = res.data[0].NumSession;

                    //load data number session
                    apiChrono.getResultSessionLive(this.session)
                        .then(res => {
                            this.pilots = res.data;
                        })
                }).catch(err => {
                    this.$router.push({ name: "home" })
                    alert("erreur serveur, merci d'essayer dans quelques secondes")
                })
        }
    }
}
</script>
