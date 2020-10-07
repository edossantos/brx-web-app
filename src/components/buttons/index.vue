<template>
  <div class="submit-button">
     <a @click="$emit('clicked')" v-bind:style="getButtonColor()" :class="getButtonClass()">{{button_text}}</a>
  </div>
</template>

<script>
export default {
    props: {
        button_text: {
            default: "GET THE APP",
            type: String
        },
        button_color: String,
        button_text_color: String

    },
    methods: {
        getButtonClass(){
            if(this.$parent.button_color || this.button_color){
                return 'opt-color'
            }
        },
        getButtonColor(){
            if(this.$parent.button_color){
                return {
                    '--btn-color': this.$parent.button_color,
                    '--btn-text-color': this.$parent.button_text_color
                }
            }
            if(this.button_color && this.button_text_color){
                return {
                    '--btn-color': this.button_color,
                    '--btn-text-color': this.button_text_color
                }
            }
        }
    }
}
</script>

<style lang="scss">
    .submit-button{
        a{
            background-color: $color-purple;
            color: $color-white;
            border: 0;
            border-radius: 28px;
            padding: 12px 40px;
            text-transform: uppercase;
            font: 16px/19px $font-family-lato;
            cursor: pointer;
            &.opt-color{
                background-color: var(--btn-color);
                color: var(--btn-text-color);
            }
        }
        &.disabled{
            opacity: 0.4;
            a{
                cursor: not-allowed;
            }
        }
    }
</style>