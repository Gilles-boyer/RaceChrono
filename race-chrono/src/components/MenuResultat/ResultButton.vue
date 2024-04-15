<template>
    <v-btn x-large class="my-4 white--text" color="#700000" :to="session.link" block>{{ session.title }}</v-btn>
</template>

<script>
export default {
    name: 'ResultButton',
    props: ['session']
};
</script>