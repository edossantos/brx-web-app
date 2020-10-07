<template>
  <nav class="nav">
      <div class="nav-container">
            <div class="nav-content">
                <div class="nav-logo">
                    <div class="logo">
                        <img src="../assets/BuzzRx-Logo.svg" alt="">
                    </div>
                    <div class="mobile-menu">
                        <a @click="openMobileMenu()"><img src="../assets/mobile-menu.svg" alt=""></a>
                    </div>
                </div>
                <div class="nav-menu" :class="{ open: getHeaderMenuStatus }">
                    <ul>
                        <nav-link link="/how-it-works">HOW IT WORKS</nav-link>
                        <nav-link link="/how-it-works">GET A CARD</nav-link>
                        <drop-down text="GIVE BACK" link="/give-back">
                            <nav-link link="/give-it-back-example-1">EXAMPLE 1</nav-link>
                            <nav-link link="/give-it-back-example-2">EXAMPLE 2</nav-link>
                        </drop-down>
                        <drop-down text="MORE" link="/more">
                            <nav-link link="/more-example-1">EXAMPLE 1</nav-link>
                            <nav-link link="/more-example-2">EXAMPLE 2</nav-link>
                        </drop-down>
                    </ul>
                </div>
            </div>
      </div>
  </nav>
</template>

<script>
import NavLink from "./Nav/NavLink"
import DropDown from "./Nav/DropDown"

export default {
    components: {
        NavLink,
        DropDown
    },
    computed: {
        getHeaderMenuStatus(){
            return this.$store.getters.headerMenuStatus
        }
    },
    methods: {
        openMobileMenu(){
            this.$store.dispatch('updateHeaderMenuStatus')
        }
    }
}
</script>

<style lang="scss">
    .nav{
        top: 0px;
        left: 0px;
        width: 100%;
        height: 70px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        opacity: 1;
        position: relative;
        .nav-container{
            max-width: $global-content-max-width;
            margin: 0 auto;
            .nav-content{
                background: $color-header-white;
                height: 100%;
                @media screen and (min-width: $bp-m + 1) {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding: 14px;
                }
                .nav-logo{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    @media screen and (max-width: $bp-m) {
                        padding: 14px;
                    }
                    .mobile-menu{
                        display: none;
                        @media screen and (max-width: $bp-m) {
                            display: block;
                        }
                    }
                }
                .nav-menu{
                    align-self: center;
                    @media screen and (max-width: $bp-m) {
                        display: none;
                        &.open{
                            display: block;
                        }
                    }
                    ul{
                        @media screen and (max-width: $bp-m) {
                            display: flex;
                            flex-direction: column;
                        }
                        .menu-item{
                            display: inline-block;
                            font-family: $font-family-lato;
                            padding: 0 20px;
                            @media screen and (max-width: $bp-m) {
                                border-bottom: 1px solid $color-light-gray;
                                &:last-of-type{
                                    border: 0;
                                }
                            }
                            a{
                                height: 38px;
                                line-height: 38px;
                            }
                        }
                    }
                }
                .mobile-menu{
                    display: flex;
                    align-items: center;
                    a{
                        img{
                            width: 35px;
                            height: 35px;
                        }
                    }
                }
            }
        }
    }
</style>