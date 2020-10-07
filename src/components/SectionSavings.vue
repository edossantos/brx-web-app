<template>
  <div class="section-savings">
      <div class="saving">
          <i class="check-icon"></i>
          <span>On-the-go Savings</span>
      </div>
      <div class="saving">
          <i class="check-icon"></i>
          <span>Price Alerts</span>
      </div>
      <div class="saving">
          <i class="check-icon"></i>
          <span>Save Your Prescriptions</span>
      </div>
      <div class="saving">
          <i class="check-icon"></i>
          <span>Set Refill Reminders</span>
      </div>
      <div class="saving">
          <i class="check-icon"></i>
          <span>Locate Pharmacies</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .section-savings{
        .saving{
            .check-icon{
                background-image: url("../assets/check.svg");
                width: 24px;
                height: 21px;
                display: inline-block;
                background-repeat: no-repeat;
                margin-right: 20px;
            }
            span{
                font: 18px/32px $font-family-lato;
            }
        }
    }
</style>