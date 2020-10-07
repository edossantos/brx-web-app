<template>
  <div class="using-app-step">
    <div class="header">
        {{title}}
    </div>
    <div class="description">
        {{description}}
    </div>
    <div class="app-screenshot">
        <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
      title: String,
      description: String
  }
}
</script>

<style lang="scss">
.using-app-step{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
    @media screen and (max-width: $bp-s) {
        padding: 0 10px 30px 10px;
    }
    @media screen and (min-width: $bp-s) and (max-width: $bp-m) {
        width: 47%;
        padding-bottom: 30px
    }
    .header{
        font: 16px/20px $font-family-lato;
        font-weight: bold;
        color: $color-dark-gray;
        padding-bottom: 13px;
    }
    .description{
        font: 16px/20px $font-family-lato;
        color: $color-dark-gray;
        text-align: center;
    }
    .app-screenshot{
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>
