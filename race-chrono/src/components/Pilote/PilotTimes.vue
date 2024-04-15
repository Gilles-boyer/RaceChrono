<template>
    <div>
        <div v-for="(session, index) in times" :key="index" v-if="session.times.length > 0">
            <div class="text-center mb-2">
                <v-chip class="mt-2 mx-auto" color="#700000" text-color="white">
                    {{ session.name }}
                </v-chip>
            </div>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">Tours</th>
                            <th class="text-left">Temps</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="time in session.times" :key="time.tour">
                            <td>{{ time.tour }}</td>
                            <td>{{ time.time }}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PilotTimes',
    props: ['times']
};
</script>

