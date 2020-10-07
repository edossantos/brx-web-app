<template>
  <div class="overlay-container">
        <div class="overlay" :class="{ active: showHideOverlay }">
            <popup @disabledOverlay="disableOverlay()" />
        </div>
  </div>
</template>

<script>
import Popup from "./index"
export default {
    name: "Overlay",
    components: {
        Popup
    },
    computed: {
        showHideOverlay(){
            return this.$store.getters.overlayStatus;
        }
    },
    methods: {
        disableOverlay(){
            this.$store.dispatch('updateOverlayStatus', false)
        }
    }
}
</script>

<style lang="scss">
.overlay-container{
    position: relative;
    .overlay{
        position: fixed;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        display: none;
        z-index: 2;
        pointer-events: auto;
        background: rgba(0, 0, 0, 0.4);
        text-align: center;
        &.active{
            display: block;
        }
        &::before{
            content: '';
            display: inline-block;
            height: 100%;
            vertical-align: middle;
        }
    }
}
</style>