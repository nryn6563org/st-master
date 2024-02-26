<template>
  <div id="wrap">
    <Nuxt />
    <MainFooter />
  </div>
</template>

<script>
import MainFooter from '~/components/MainFooter'
export default {
  name: 'SubLayout',
  components: {
    MainFooter
  }
}
</script>
