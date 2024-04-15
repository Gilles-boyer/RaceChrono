<template>
    <v-container class="text-center">
        <AppBar title="MENU" :to="{ name: 'home' }" />
        <h2>Classement</h2>
        <ResultButton v-for="(session, index) in sessions" :key="index" :session="session" />
    </v-container>
</template>

<script>
import AppBar from '../components/AppBar.vue';
import RefreshButton from '../components/RefreshButton.vue';
import ResultButton from '../components/MenuResultat/ResultButton.vue';
import apiChrono from "../service/chrono.js";

export default {
    name: "menu-result",
    components: {
        AppBar,
        RefreshButton,
        ResultButton
    },
    data() {
        return {
            nbrSession: 12,
            sessions: [],
        }
    },
    mounted() {
        this.getSessionLive()
    },
    methods: {
        getSessionLive() {
            apiChrono.getSessionLive()
                .then(res => {
                    this.nbrSession = parseInt(res.data[0].NumSession);
                    this.createNbrSession()
                })
        },
        createNbrSession() {
            var link
            var title
            this.sessions = [];
            this.sessions.push({
                link: "/result/general",
                title: "Meilleur Tour"
            })
            this.sessions.push({
                link: "/result/category",
                title: "Meilleur Tour par Catégorie"
            })
            for (let index = 1; index <= this.nbrSession; index++) {
                link = "/result/" + index;
                title = "Session N°" + index;
                this.sessions.push({
                    link: link,
                    title: title
                })
            }
        }
    },
}
</script>
