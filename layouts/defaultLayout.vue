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
  },
  data() {
    return {
      touchstartX: 0,
      touchendX: 0
    }
  },
  mounted() {
    this.setupDoubleTapZoom()
  },
  methods: {
    setupDoubleTapZoom() {
      const handleTouchStart = (event) => {
        this.touchstartX = event.changedTouches[0].screenX
      }

      const handleTouchEnd = (event) => {
        this.touchendX = event.changedTouches[0].screenX
        this.handleGesture(event)
      }

      this.$el.addEventListener('touchstart', handleTouchStart, false)
      this.$el.addEventListener('touchend', handleTouchEnd, false)
    },
    handleGesture(event) {
      if (event && event.type === 'touchend' && event.cancelable) {
        if (Math.abs(this.touchendX - this.touchstartX) < 10) {
          // This is a tap, not a swipe or pinch
          // Handle your tap logic here

          // For example, prevent default behavior for double tap
          event.preventDefault()
        }
      }
    }
  }
}
</script>