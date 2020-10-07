<template>
  <div class="section-as-seen">
      <div class="container">
          <div class="container-inner">
                <div class="header">
                    <p>As seen on</p>
                </div>
                <div class="body">
                    <div class="channels">
                        <div class="channel">
                            <img src="../assets/nbc-logo.svg" alt="NBC">
                        </div>
                        <div class="channel">
                            <img src="../assets/cbs-logo.svg" alt="CBS">
                        </div>
                        <div class="channel">
                            <img src="../assets/abc-logo.svg" alt="ABC">
                        </div>
                        <div class="channel">
                            <img src="../assets/gma-logo.svg" alt="GMA">
                        </div>
                        <div class="channel">
                            <img src="../assets/msnbc-logo.svg" alt="MSNBC">
                        </div>
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
    .section-as-seen{
        padding-bottom: 58px;
        .container{
            max-width: 1200px;
            margin: 0 auto;
            .container-inner{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                .header{
                    p{
                        font: 14px/30px $font-family-lato;
                        color: $color-dark-gray;
                    }
                }
                .body{
                    .channels{
                        display: flex;
                        flex-direction: row;
                        justify-content: space-evenly;
                        width: 460px;
                        @media screen and (max-width: $bp-s) {
                            width: 100%;
                            flex-wrap: wrap;
                            justify-content: flex-start;
                        }
                        .channel{
                            display: flex;
                            @media screen and (max-width: $bp-s) {
                                width: 50%;
                                flex-wrap: wrap;
                                justify-content: center;
                            }
                            img{
                                vertical-align: middle;
                                margin-bottom: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>