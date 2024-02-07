<template>
  <div id="wrap">
    <SubHeader />
    <Nuxt />
    <MainFooter />
  </div>
</template>

<script>
import SubHeader from '~/components/SubHeader'
import MainFooter from '~/components/MainFooter'
export default {
  name: 'subLayout',
  components: {
    SubHeader,
    MainFooter
  }
}
</script>
