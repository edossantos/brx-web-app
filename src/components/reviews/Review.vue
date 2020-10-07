<template>
  <div class="single-review">
      <div class="single-review-container">
          <div class="header">
              <div class="first-letter-hex">
                  {{getFirstLetterOfAuthorsName()}}
              </div>
           </div> 
           <div class="body">
               <div class="author-name">
                  <span>{{data.author}}</span>  
              </div>
              <div class="review-rating">
                  <review-star-rating :rating="data.rating"></review-star-rating>
              </div>
              <div class="review-date">
                  <span>{{data.date}}</span>
              </div>
              <div class="review-content">
                  <p>{{data.review}}</p>
              </div>
           </div>  
      </div>
  </div>
</template>

<script>
import ReviewStarRating from './ReviewStarRating'
export default {
    props: {
        data: Object
    },
    components: {
        ReviewStarRating
    },
    methods: {
        getFirstLetterOfAuthorsName(){
            return this.data.author.charAt(0)
        }
    }
}
</script>

<style lang="scss">
    .single-review{
        max-width: 282px;
        background-color: $color-white;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 25px;
        margin-bottom: 24px;
        @media screen and (max-width: $bp-s) {
            margin-left: auto;
            margin-right: auto;
        }
        
        .single-review-container{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 23px;
            padding-bottom: 33px;
            .header{
                position: relative;
                margin: 0 auto;
                padding-bottom: 18px;
                .first-letter-hex{
                    background-image: url("../../assets/hex.svg");
                    background-repeat: no-repeat;
                    width: 50px;
                    height: 43px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font: 26px/30px $font-family-lato;
                    color: $color-white;
                }
            }
            .body{
                display: flex;
                flex-direction: column;
                align-items: center;
                .author-name{
                    padding-bottom: 20px;
                    span{
                        font: 18px/30px $font-family-lato;
                    }
                }
                .review-date{
                        padding-bottom: 20px;
                    span{
                        font: 14px/25px $font-family-lato;
                        color: $color-date-gray;
                    }
                }
                .review-content{
                    padding: 0 26px;
                    p{
                        text-align: center;
                        font: 16px/20px $font-family-lato;
                        color: $color-dark-gray;
                    }
                }
            }
        }
    }
</style>