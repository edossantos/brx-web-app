<template>
  <div class="menu-item drop-down">
      <a :href="link">
         <span>{{text}}</span> 
         <i></i>
      </a>
      <div class="drop-down-box" style="display: none;">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        link: {
            type: String
        },
        text: {
            type: String
        }
    }
}
</script>

<style lang="scss">
.menu-item{
    &.drop-down{
        position: relative;
        a{
            
            i{
                border: solid $color-purple;
                border-width: 0 2px 2px 0;
                display: inline-block;
                padding: 3px;
                transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
                position: absolute;
                top: 35%;
                right: 3px;
                @media screen and (max-width: $bp-m) {
                    top: 28%;
                    right: 25px;
                    padding: 5px;
                }
            }
        }
    }
}
</style>