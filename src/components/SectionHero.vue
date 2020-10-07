<template>
  <section class="hero-full-width">
      <div class="container">
        <div class="container-inner">
            <div class="header-container">
                <div class="title">
                    <h2>Download the App</h2> 
                </div>
                <div class="description">
                    <p>Save up to 80% on your prescriptions instantly!</p>
                </div>
            </div>
            <div class="body">
                <div class="body-container">
                    <slot />
                </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
    props: {
        header_text: {
            type: String
        },
        description: {
            type: String
        }
    }
}
</script>

<style lang="scss">
    .hero-full-width{
        background-size: cover;
        background-position: 50% 50%;
        background-image: url("../assets/hex-pattern.svg");
        background-color: $color-yellow;
        min-height: 375px;
        @media screen and (max-width: $bp-m) {
            margin-bottom: 20px;
        }
        .container{
            max-width: 1200px;
            margin: 0 auto;
            .container-inner{
                padding: 33px;
                @media screen and (max-width: $bp-m) {
                    padding: 24px;
                }
                .header-container{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 50px;
                    .title{
                        margin-bottom: 10px;
                        h2{
                            font: 54px/40px $font-family-lato;
                            font-weight: lighter;
                            color: $color-dark-gray;
                            @media screen and (max-width: $bp-m) {
                                font: 34px/40px $font-family-lato;
                            }
                        }
                    }
                    .description{
                        @media screen and (max-width: $bp-m) {
                            text-align: center;
                        }
                        p{
                            font: 24px/40px $font-family-lato;
                            font-weight: bold;
                            color: $color-purple;
                        }
                    }
                }
                .body{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    margin: 0 auto;
                    max-width: 511px;
                    @media screen and (max-width: $bp-m) {
                        align-items: center;
                    }
                }
            }
        }
    }
</style>