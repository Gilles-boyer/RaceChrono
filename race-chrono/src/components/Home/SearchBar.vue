<template>
    <v-col cols="12">
        <v-card color="#D62839" class="rounded-xl">
            <v-text-field :rules="dossardNumberRules" v-model="dossardNumber" @keyup.enter="submit()"
                elevation="0" class="mx-3 py-6" append-icon="mdi-magnify" label="N° Dossard" solo rounded hide-details
                required></v-text-field>
        </v-card>
    </v-col>
</template>

<script>
export default {
    name: 'SearchBar',
    data: () => ({
        dossardNumberRules: [
            v => !!v || 'Le numéro de dossard est requis',
            v => /^\d+$/.test(v) || 'Le numéro de dossard doit être un nombre entier sans virgule'
        ],
        dossardNumber:""
    }),
    methods: {
        submit() {
            if (this.$_isInteger(this.dossardNumber) & this.dossardNumber > 0) {
                var link = "/pilote/" + this.dossardNumber;
                return this.$router.push(link)
            }
            alert("Merci de saisir un numéro valide");
        },
        $_isInteger(value) {
            return String(value) === String(parseInt(value, 10));
        }
    }
};
</script>