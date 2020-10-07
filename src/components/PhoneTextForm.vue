<template>
  <div class="phone-text-form-container">
      <form action="" class="phone-text-form" ref="form">
          <header>
              <h2 v-bind:style="getHeaderColor()">Text me the FREE app!</h2>
          </header>
          <fieldset>
            <div class="form-control">
                <input v-model="value" type="text" name="text" id="phone-number" data-attr="float-label" placeholder="Enter Phone Number" @input="acceptUsNumber" required>
                <i class="phone-icon"></i>			
			</div>
          </fieldset>
          <div class="submit-button">
              <common-button @clicked="submitForm()"></common-button>
          </div>
      </form>
  </div>
</template>

<script>
import CommonButton from "./buttons/index"
export default {
    components: {
        CommonButton
    },
    props: {
        title_text_color: String,
        button_color: String,
        button_text_color: String
    },
    data(){
        return{
            value: ''
        }
    },
    methods: {
        submitForm(){
            this.$refs.form.addEventListener('submit', event => {
                event.preventDefault();
            }, this.updateOverlayStatus())
        },
        updateOverlayStatus(){
            this.$store.dispatch('updateOverlayStatus', true)
        },
        getHeaderColor(){
            return {
               '--header-text-color': this.title_text_color
            }
        },
        acceptUsNumber() {
            let x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            this.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        }
    }
}
</script>

<style lang="scss">
    .phone-text-form-container{
        .phone-text-form{
            display: flex;
            flex-direction: column;
            align-items: center;
            header{
                h2{
                    font: 18px/30px $font-family-lato;
                    font-weight: bold;
                    color: var(--header-text-color);
                }
            }
            fieldset{
                border: 0;
                min-width: 282px;
                padding-bottom: 20px;
                .form-control{
                    position: relative;
                    input{
                        width: 100%;
                        border: 1px solid $color-medium-gray;
                        border-radius: 5px;
                        margin: 8px 0 15px 0;
                        outline: none;
                        padding: 8px;
                        box-sizing: border-box;
                        transition: 0.3s;
                        padding-left: 35px;
                        font: 18px/22px $font-family-lato;
                        color: $color-medium-gray;
                        background-color: $color-white;
                        &::placeholder{
                          color: $color-medium-gray;
                        }
                        &:focus{
                            border-color: $color-purple;
                        }
                    }
                    .phone-icon{
                        position: absolute;
                        left: 12px;
                        top: 30%;
                        padding: 9px 8px;
                        color: $color-medium-gray;
                        transition: 0.3s;
                        background-image: url("../assets/text.svg");
                        width: 11px;
                        height: 18px;
                        display: inline-block;
                        background-repeat: no-repeat;
                        margin-right: 20px; 
                    }
                }
            }
        }
    }
</style>