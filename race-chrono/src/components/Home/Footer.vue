<template>
    <v-col cols="12" d-flex align-content-center>
        <v-row class="pa-0" align="center" justify="center">
            <v-col class="ma-0 pa-0" cols="12">
                <v-img src="https://cfg.re/wp-content/uploads/2022/11/logocfg-e1668851393437.png" class="my-2" contain
                    height="40" />
            </v-col>
            <v-col cols="12" class="ma-0 pa-0">{{ new Date().getFullYear() }} — <strong>CFG</strong></v-col>
        </v-row>
    </v-col>
</template>

<script>
export default {
    name: 'Footer'
};
</script>