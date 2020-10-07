<template>
  <div id="app">
    <app-header></app-header>
    <section-hero>
      <section-savings></section-savings>
    </section-hero>
    <section-get-app>
      <phone-text-form></phone-text-form>
      <app-store-links></app-store-links>
    </section-get-app>
    <section-as-seen></section-as-seen>
    <section-latest-review></section-latest-review>
    <section-using-app></section-using-app>
    <app-footer></app-footer>
    <popup-overlay></popup-overlay>
  </div>
</template>

<script>
import AppHeader from './layouts/AppHeader.vue'
import AppFooter from './layouts/AppFooter'
import SectionHero from './components/SectionHero'
import SectionSavings from './components/SectionSavings'
import SectionGetApp from './components/SectionGetApp'
import PhoneTextForm from './components/PhoneTextForm'
import AppStoreLinks from './components/AppStoreLinks'
import SectionAsSeen from './components/SectionAsSeen'
import SectionLatestReview from './components/SectionLatestReview'
import SectionUsingApp from './components/SectionUsingApp'
import PopupOverlay from "./components/popup/Overlay"


export default {
  name: 'App',
    components: {
      AppHeader,
      AppFooter,
      SectionHero,
      SectionSavings,
      SectionGetApp,
      PhoneTextForm,
      AppStoreLinks,
      SectionAsSeen,
      SectionLatestReview,
      SectionUsingApp,
      PopupOverlay
    }
}
</script>

<style lang="scss">
*, *::before, *::after {
    box-sizing: inherit;
}
html, body, p, ol, ul, li, dl, dt, dd, blockquote, figure, fieldset, legend, textarea, pre, iframe, hr, h1, h2, h3, h4, h5, h6, a {
    margin: 0;
    padding: 0;
    color: $color-dark-gray;
}
a{
  text-decoration: none;
}
</style>
