<template>
    <div class="home">
        This is home page{{ index }}.
    </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component
export default class Home extends Vue {
    @State('tabIndex') index
}
</script>