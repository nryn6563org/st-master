<template>
  <div id="wrap">
    <MainHeader />
    <Nuxt />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader'
import MainFooter from '~/components/MainFooter'
export default {
  name: 'DefaultLayout',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>