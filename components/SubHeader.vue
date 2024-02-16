<template>
  <header id="sub_header">
    <button class="back" @click="backToPage">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M14 6L8.70708 11.2929C8.31655 11.6834 8.31655 12.3166 8.70708 12.7071L14 18"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </button>
    <!-- 뒤로가기 -->

    <div class="page-title">
      <span>{{ title }}</span>
      <!-- 타이틀 -->

      <router-link :to="customButtonLink">
        <button>
          <span v-html="customButtonText.svg"></span>
          <span>{{ customButtonText.text }}</span>
        </button>
      </router-link>
      <!-- 버튼 -->
    </div>
    <!-- 페이지 타이틀 -->
  </header>
  <!-- header -->
</template>
<script>
export default {
  computed: {
    title() {
      return this.$store.state.pageTitle
    },
    customButtonText() {
      return this.$store.state.customButtonText
    },
    customButtonLink() {
      return this.$store.state.customButtonLink
    }
  },
  methods: {
    backToPage() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
@import "~/assets/css/header.css";
</style>