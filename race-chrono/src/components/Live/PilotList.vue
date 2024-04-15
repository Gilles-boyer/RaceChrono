<template>
    <v-list two-line class="mx-0">
        <v-list-item v-for="(pilot, index) in pilots" :key="index">
            <v-row class="px-0 " align-content="center" justify="center">
                <v-col cols="2" class="px-0 ">
                    <v-list-item-avatar :color="colorClassement(pilot.Classement)">
                        <span class="white--text mx-auto font-weight-bold">{{ pilot.Classement }}</span>
                    </v-list-item-avatar>
                </v-col>
                <v-col cols="5" class="px-0 pt-4">
                    <v-list-item-content>
                        <v-list-item-title class=" font-weight-bold">{{ pilot.NomPrénom }}</v-list-item-title>
                        <v-list-item-subtitle>{{ pilot.Voiture + "- N°" + pilot.Dossard }}</v-list-item-subtitle>
                        <v-list-item-subtitle>Record : {{ pilot.Record }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-col>
                <v-col cols="3" class="px-0" align-self="center">
                    <v-list-item-avatar color="black" tile style="width: 100%;">
                        <div class='column text-center'>
                            <span class="wpr text-center pa-0"><span style="color: green;"
                                    class='text-subtitle-2 text-center ma-0'>{{
                                        pilot.MeilleurTemps
                                    }} </span></span>
                            <span class="wpr text-center pa-0 "><span style="color: green;"
                                    class='text-caption text-center ma-0'>au tour {{
                                    pilot.Autour }}</span></span>
                        </div>
                    </v-list-item-avatar>
                </v-col>
                <v-col cols="2" class="px-0" align-self="center">
                    <v-list-item-content class="text-right">
                        <span class="text-caption">{{ pilot.Dif }}</span>
                    </v-list-item-content>
                </v-col>
            </v-row>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    name: 'PilotList',
    props: ['pilots'],

    methods: {
        colorClassement(Classement) {
            if (Classement == 1) {
                return "#DCB253"
            } else if (Classement == 2) {
                return "#868992"
            } else if (Classement == 3) {
                return "#614e1a"
            } else {
                return "#700000"
            }
        },
    },
};
</script>
