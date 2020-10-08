<template>
    <div class="popup-container">
        <div class="popup" :class="{ active: isPopupActive }">
            <div class="container">
                <div class="header">
                    <div class="image">
                        <img src="../../assets/simple-logo.svg" alt="BRX">
                    </div>
                    <div class="title">
                        <h2>Text Sent!</h2>
                    </div>
                </div>
                <div class="body">
                    <div class="description">
                        <p>Click the link that was sent to your mobile device to download the FREE BuzzRx app!</p>
                    </div>
                </div>
                <div class="footer">
                    <common-button @clicked="$emit('disabledOverlay')" button_text="OK" button_text_color="#262626" button_color="#FFC700"></common-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CommonButton from "../buttons/index"
export default {
    components: {
        CommonButton
    },
    data(){
        return {
            isPopupActive: true
        }
  }
}
</script>

<style lang="scss">
    .popup-container {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        .popup {
            padding: 20px;
            background: #ffffff;
            transition: all .15s ease-out;
            z-index: 5;
            width: 295px;
            height: 295px;
            @media screen and (min-width: $bp-m) {
                width: 512px;
                height: 320px
            }
            .container{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 20px;
                @media screen and (min-width: $bp-m) {
                    padding-top: 37px;
                }
                .header{
                    .image{
                        padding-bottom: 20px;
                    }
                    .title{
                        padding-bottom: 20px;
                        h2{
                            font: 25px/25px $font-family-lato;
                            font-weight: bold;
                            @media screen and (min-width: $bp-m) {
                                font-size: 30px;
                                line-height: 34px;
                            }
                        }
                    }
                }
                .body{
                    padding-bottom: 30px;
                    .description{
                        padding: 0 20px;
                        p{
                            font: 17px/25px $font-family-lato;
                            @media screen and (min-width: $bp-m) {
                                font-size: 18px;
                                line-height: 25px;
                            }
                        }
                    }
                }
            }
        }
    }

</style>