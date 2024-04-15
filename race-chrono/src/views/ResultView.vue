<template>
    <v-container>
        <AppBar title="MENU" :to="{ name: 'menu-result' }" />
        <RefreshButton @click="initResult()" />
        <ResultInfo :title="title" />
        <ResultList :pilots="pilots" />
    </v-container>
</template>

<script>
import AppBar from '../components/AppBar.vue';
import RefreshButton from '../components/RefreshButton.vue';
import ResultList from '../components/Resultat/ResultList.vue';
import ResultInfo from '@/components/Resultat/ResultInfo.vue';
import apiChrono from "../service/chrono.js";

export default {
    name: "result",
    components: {
        AppBar,
        RefreshButton,
        ResultList,
        ResultInfo
    },
    data() {
        return {
            title: "",
            pilots: [],
        }
    },
    mounted() {
        this.initResult();
    },
    methods: {
        initResult() {
            if (this.$route.params.race == "general") {
                apiChrono.getClassementGeneral()
                    .then(res => {
                        this.pilots = []
                        this.title = "Classement Général"
                        this.pilots = res.data;
                    }).catch(err => {
                        this.$router.push({ name: "home" })
                        alert("erreur serveur, merci d'essayer dans quelques secondes")
                    })
            } else if (this.estUnNombreEntier(this.$route.params.race) & this.$route.params.race > 0) {
                apiChrono.getResultSessionLive(this.$route.params.race)
                    .then(res => {
                        this.pilots = []
                        this.title = "Classement Session N° " + this.$route.params.race;
                        this.pilots = res.data;
                    }).catch(err => {
                        this.$router.push({ name: "home" })
                        alert("erreur serveur, merci d'essayer dans quelques secondes")
                    })
            }
        },
        estUnNombreEntier(valeur) {
            return String(valeur) === String(parseInt(valeur, 10));
        }
    }
}
</script>
