<template>
  <div class="section-get-app">
      <div class="container">
          <div class="container-inner">
              <div class="content">
                    <div class="left-content">
                        <div class="get-app-phone">
                            <img src="../assets/phone@2x.png" alt="Download App!" />
                        </div>
                    </div>
                    <div class="right-content">
                        <slot />
                    </div>   
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .section-get-app{
        padding-bottom: 58px;
        .container{
            max-width: 590px;
            margin: 0 auto;
            .container-inner{
                .content{
                    display: flex;
                    flex-wrap: wrap;
                    @media screen and (max-width: $bp-m) {
                        justify-content: center;
                    }
                    .left-content{
                        @media screen and (max-width: $bp-m) {
                            display: none;
                        }
                        width: 50%;
                        .get-app-phone{
                            margin-top: -75%;
                            padding: 0 31px 0 31px;
                            img{
                                width: 100%;
                            }
                        }
                    }
                    .right-content{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        width: 50%;
                        @media screen and (max-width: $bp-m) {
                            width: auto;
                        }
                        .phone-text-form-container{
                            padding-bottom: 20px;
                            @media screen and (max-width: $bp-m) {
                                padding-bottom: 30px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>