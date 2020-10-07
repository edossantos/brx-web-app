<template>
  <div class="section-using-app">
    <div class="container">
        <div class="header">
            <h2>using the buzzrx app</h2>
        </div>
        <div class="using-app-steps">
            <using-app-step 
                title="1. SEARCH BY DRUG NAME" 
                description="Type in your prescription drug name and select your dosage.">
                <img src="../assets/screen-1@2x.png" />
            </using-app-step>
            <using-app-step 
                title="2. CHOOSE THE BEST PRICE" 
                description="Select the best price at a participating pharmacy near you.">
                <img src="../assets/screen-2@2x.png" />
            </using-app-step>
            <using-app-step 
                title="3. SHOW YOUR COUPON" 
                description="Show the coupon to your pharmacist directly from the app.">
                <img src="../assets/screen-3@2x.png" />
            </using-app-step>
            <using-app-step 
                title="4. SAVE YOUR FAVORITES" 
                description="Save the prescription discount coupons to your favorites">
                <img src="../assets/screen-4@2x.png" />
            </using-app-step>
        </div>
    </div>
  </div>
</template>

<script>
import UsingAppStep from "./UsingAppStep"
export default {
  components: {
      UsingAppStep
  }
}
</script>

<style lang="scss">
.section-using-app{
    >.container{
        max-width: 1200px;
        margin: 0 auto;
        padding-top: 53px;
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
        .using-app-steps{
            display: flex;
            @media screen and (max-width: $bp-s) {
                flex-direction: column;
            }
            @media screen and (max-width: $bp-m) {
                flex-wrap: wrap;
            }
        }
    }
}
</style>
