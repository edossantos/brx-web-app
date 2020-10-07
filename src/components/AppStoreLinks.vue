<template>
  <div class="app-store-links">
    <div class="app-store-link">
      <a href=""><img src="../assets/app-store-badge.svg" alt=""></a>
    </div>
    <div class="app-store-link">
      <a href=""><img src="../assets/google-play-badge.svg" alt=""></a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .app-store-links{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .app-store-link{
      a{
        img{

        }
      }
    }
  }
</style>