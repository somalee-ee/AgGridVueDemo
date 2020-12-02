<template>
    <v-app>
        <router-view />
    </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'application',
    components: {},
})
export default class Application extends Vue {
}
</script>
<style lang="scss">

.header {
    width: 100%;
    height: auto;
    box-shadow: 0 1px .625rem rgba(0,0,0,.1)!important;
}

.header-font {
    font-size: 1.2em;
    font-weight: 600;
}

.count {
    font-weight: 600;
    margin-left: 4px;
}
</style>
