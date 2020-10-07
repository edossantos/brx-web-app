<template>
  <div class="section-latest-review">
      <div class="latest-review-container">
          <div class="header">
               <h2>Latest App Reviews</h2>
           </div>
          <reviews ref="reviews"/> 
          <div class="read-more">
            <common-button @clicked="loadMoreAction()"  :class="{disabled: !shouldDisableButton}" button_text="Read more review" />    
          </div>     
      </div>
  </div>
</template>

<script>
import CommonButton from "./buttons/index"
import Reviews from "./reviews/Reviews"
export default {
    components: {
        Reviews,
        CommonButton
    },
    computed: {
        shouldDisableButton(){
            return this.$store.getters.getLoadMoreButtonStatus;
        }
    },
    methods: {
        loadMoreAction(){
            this.$refs.reviews.loadMoreReview()
        }
    }
}
</script>

<style lang="scss">
    .section-latest-review{
        background-color: $color-light-yellow;
        .latest-review-container{
            max-width: 1200px;
            margin: 0 auto;
            padding-top: 53px;
            padding-bottom: 53px;
            @media screen and (max-width: $bp-m) {
                max-width: 700px;
            }
            
            >.header{
                display: flex;
                justify-content: center;
                margin-bottom: 53px;
                h2{
                    font: 20px/24px $font-family-maven-pro;
                    color: $color-dark-gray;
                    font-weight: bold;
                    border-bottom: 2px solid $color-purple;
                    padding: 6px 0;
                    text-transform: uppercase;
                }
            }
            .reviews{
                @media screen and (max-width: $bp-m) {
                    //padding: 0 30px;
                }
            }
            .read-more{
                display: flex;
                justify-content: center;
                padding-top: 20px;
            }
        }
    }
</style>