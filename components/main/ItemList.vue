<!-- components/List.vue -->
<template>
  <div class="list">
    <div>
      <!-- 종목정보 -->
      <div v-if="bullet" class="bullet">Today</div>
      <div class="obj">{{ item }}</div>
      <div class="num">{{ number }}</div>
    </div>

    <div>
      <!-- 신호정보 -->
      <div class="signal-info">
        <div v-if="infoTxt" class="txt">{{ signalInfo }}</div>
        <!-- signalInfo = 보유 45일째  -->
        <div v-if="perTxt" class="txt">
          수익률
          <span class="per red"><em>{{ profitPercentage }}</em>%</span>
        </div>
        <div v-if="prTxt" class="price">
          <span><em>{{ price }}</em>원</span>
        </div>
      </div>

      <!-- 신호블릿 -->
      <div class="signal" :class="signalClass">
        <span>{{ getSignalText() }}</span>
      </div>
      <!-- signalClass = sig01 - 매수, sig02 - 매도 -->
    </div>
    <!-- 종목신호 -->
  </div>
</template>

<script>
export default {
  props: {
    bullet: Boolean,
    item: String,
    number: String,
    infoTxt: Boolean,
    signalInfo: String,
    perTxt: Boolean,
    profitPercentage: String,
    prTxt: Boolean,
    price: String,
    signalClass: String
  },
  methods: {
    getSignalText() {
      return this.signalClass === 'sig01' ? '매수' : this.signalClass === 'sig02' ? '매도' : this.signalText
    }
  }
}
</script>

<style scoped>
@import '~/assets/css/main/list.css';
</style>
