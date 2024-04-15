<template>
    <v-btn @click="$emit('clickMethod')">
        <v-icon color="#700000">mdi-refresh</v-icon>
    </v-btn>
</template>

<script>
export default {
    name: 'RefreshButton'
};
</script>