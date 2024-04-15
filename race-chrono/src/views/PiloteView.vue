<template>
    <v-container>
        <AppBar title="ACCUEIL" :to="{ name: 'home' }" />
        <RefreshButton @click="searchDataPilote()" />
        <PilotDetail :pilote="pilote" />
        <PilotTimes :times="pilote.Times"  />
    </v-container>
</template>

<script>
import AppBar from '../components/AppBar.vue';
import RefreshButton from '../components/RefreshButton.vue';
import PilotDetail from '../components/Pilote/PilotDetail.vue';
import PilotTimes from '../components/Pilote/PilotTimes.vue';
import apiChrono from "../service/chrono.js";
import modelPilote from "../service/pilote.json";

export default {
    name: "pilote",
    components: {
        AppBar,
        RefreshButton,
        PilotDetail,
        PilotTimes
    },
    data() {
        return {
            pilote: {},

        }
    },
    mounted() {
        this.searchDataPilote()
    },
    beforeDestroy() { 
        this.pilote = {};
    },
    methods: {
        searchDataPilote() {
            this.pilote = structuredClone(modelPilote.pilote);
            apiChrono.getPilotes()
                .then(res => {
                    var data;
                    data = res.data.filter((pilote) => {
                        return pilote.Dossard == this.$route.params.dossard
                    })
                    this.filterDataPilote(data);
                })
                .catch(err => {
                    this.$router.push({ name: "home" })
                    alert("erreur serveur, merci d'essayer dans quelques secondes")
                })
        },
        filterDataPilote(data) {
            this.pilote.name = data[0].PrénomNom
            this.pilote.bestTime = data[0].BestTime
            this.pilote.aLaSession = data[0].SessionMin
            this.pilote.auTour = data[0].auTour
            this.pilote.nbTours = data[0].NbTours
            this.pilote.classementGénéral = data[0].Classement
            this.pilote.voiture = data[0].Voiture
            this.pilote.categorie = data[0].Category
            this.pilote.dossard = data[0].Dossard

            var test = ""

            for (let index = 0; index < 35; index++) {
                for (let i = 0; i < 20; i++) {
                    test = "Session" + i;
                    if (data[index][test]) {
                        this.pilote.Times[(i - 1)].times.push({
                            tour: index + 1,
                            time: data[index][test]
                        })
                    }
                }
            }
        }
    }
}
</script>
