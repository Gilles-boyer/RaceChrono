<template>
    <div class="text-center">
        <v-avatar tile class="mx-auto" size="100">
            <v-icon color="#700000" class="mx-auto " size="100">
                mdi-account-circle
            </v-icon>
        </v-avatar>
        <h2 class="text-center">{{ pilote.name }}</h2>
        <v-simple-table class="text-center">
            <template v-slot:default>
                <tbody>
                    <tr>
                        <td>Meilleur Temps</td>
                        <td>{{ pilote.bestTime }}</td>
                    </tr>
                    <tr>
                        <td>A la session</td>
                        <td>{{ pilote.aLaSession }}</td>
                    </tr>
                    <tr>
                        <td>Au tour</td>
                        <td>{{ pilote.auTour }}</td>
                    </tr>
                    <tr>
                        <td>Nombre de tours</td>
                        <td>{{ pilote.nbTours }}</td>
                    </tr>
                    <tr>
                        <td>Classement général</td>
                        <td>{{ pilote.classementGénéral }}</td>
                    </tr>
                    <tr>
                        <td>Voiture</td>
                        <td>{{ pilote.voiture }}</td>
                    </tr>
                    <tr>
                        <td>Catégorie</td>
                        <td>{{ pilote.categorie }}</td>
                    </tr>
                    <tr>
                        <td>Dossard</td>
                        <td>{{ pilote.dossard }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
export default {
    name: 'PilotDetail',
    props: ['pilote']
};
</script>
