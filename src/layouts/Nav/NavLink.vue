<template>
  <div class="menu-item">
      <a v-bind="linkProps(link)">
          <slot></slot>
      </a>
  </div>
</template>

<script>
export default {
    props: {
        link: {
            type: String
        }
    },
    methods: {
        linkProps(link){
            return {
                href: link,
                target: '_blank',
                rel: 'noopener'
            }
        }
    }
}
</script>

<style>

</style>