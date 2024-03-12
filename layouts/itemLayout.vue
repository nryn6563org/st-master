<template>
  <div id="wrap">
    <SubHeader />
    <Nuxt />
  </div>
</template>

<script>
import SubHeader from '~/components/SubHeader'
export default {
  name: 'ItemLayout',
  components: {
    SubHeader
  }
}
</script>
