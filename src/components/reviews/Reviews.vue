<template>
   <div class="reviews">
       <div class="container">
           <masonry :cols="{default: 4, 768: 3, 640: 1}" :gutter="{default: '24px', 768: '24px'}">
               <review :data="reviews[reviewIndex-1]" v-for="reviewIndex in totalEnabledReviews" :key="reviews[reviewIndex-1].id"/>
           </masonry>
       </div>
   </div>
</template>

<script>
import Vue from 'vue'
import VueMasonry from 'vue-masonry-css'
Vue.use(VueMasonry);

import Review from './Review'
export default {
    components: {
        Review
    },
    computed: {
        reviews(){
            return this.$store.getters.reviews
        },
        totalEnabledReviews(){
            return this.$store.getters.getTotalEnabledReviews
        }
    },
    data(){
        return{
            loadMoreSize: 8
        }
    },
    methods: {
        loadMoreReview(){
            this.$store.dispatch('updateTotalEnabledReviews', this.loadMoreSize)
        }
    }
}
</script>
