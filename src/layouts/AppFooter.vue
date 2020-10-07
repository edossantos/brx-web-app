<template>
  <div class="app-footer">
     <div class="container">
         <div class="left-content">
             <div class="header">
                 <h2>Never Pay Full Price at the Pharmacy Again</h2>
             </div>
             <div class="description">
                 <p>Get the FREE BuzzRx app and save today!</p>
             </div>
             <div class="footer-app-store-link">
                 <app-store-links></app-store-links>
             </div>
         </div>
         <div class="right-content">
             <phone-text-form title_text_color="#ffffff" button_color="#FFC700" button_text_color="#262626"></phone-text-form>
         </div>
     </div>
  </div>
</template>

<script>
import AppStoreLinks from '../components/AppStoreLinks'
import PhoneTextForm from '../components/PhoneTextForm'
export default {
    components: {
        AppStoreLinks,
        PhoneTextForm
    }
}
</script>

<style lang="scss">
    .app-footer{
        background-color: $color-purple;
        .container{
            display: flex;
            max-width: 1200px;
            margin: 0 auto;
            padding-top: 45px;
            padding-bottom: 45px;
            @media screen and (max-width: $bp-s) {
                flex-wrap: wrap;
            }
            .left-content{
                width: 100%;
                @media screen and (min-width: $bp-s + 1) {
                    width: 50%;
                }
                @media screen and (min-width: $bp-m + 1) {
                    width: 65%
                }
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                .header{
                    padding-bottom: 13px;
                    h2{
                        font: 28px/36px $font-family-maven-pro;
                        color: $color-yellow;
                        @media screen and (max-width: $bp-s) {
                            font-size: 18px;
                            line-height: 20px;
                        }
                        @media screen and (max-width: $bp-m) {
                            font-size: 18px;
                            line-height: 20px;
                        }
                    }
                }
                .description{
                    margin-bottom: 48px;
                    p{
                        font: 20px/24px $font-family-lato;
                        color: $color-white;
                        @media screen and (max-width: $bp-s) {
                            font-size: 16px;
                        }
                    }
                }
                .footer-app-store-link{
                    width: 280px;
                }
            }
            .right-content{
                width: 100%;
                @media screen and (min-width: $bp-s + 1) {
                    width: 50%;
                }
                @media screen and (min-width: $bp-m + 1) {
                    width: 35%
                }
                height: 100%;
                padding-top: 12px;
            }
        }
    }
</style>