<template>
  <div class="review-star-rating">
      <i v-for="i in max" :key="i" class="star" :class="isCurrentStar(i)"></i>
  </div>
</template>

<script>
export default {
    props: {
        rating: Number
    },
    data(){
        return {
            max: 5
        }
    },
    methods: {
        isCurrentStar(index){
            const diff = this.rating - index + 1;
            if(diff > 0){
                return 'active'
            }
            return ''
        }
    }
}
</script>

<style lang="scss">
    .review-star-rating{
        .star{
            background-image: url("../../assets/star.svg");
            width: 24px;
            height: 21px;
            display: inline-block;
            background-repeat: no-repeat;
            opacity: 0.2;
            &.active{
                opacity: 1;
            }
        }
    }
</style>