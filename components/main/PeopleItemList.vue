<template>
  <div class="list">
    <div class="info">
      <strong>{{ name }}</strong>
      <span>{{ number }}</span>
    </div>
    <!--  -->
    <div class="per">
      <div v-if="per">
        <span class="txt">보유중인 수익률</span>
        <div :class="{ red: symbol === '+', blue: symbol === '-' }" class="num">
          <span
            >{{ symbol }}<em>{{ percent }}</em></span
          >%
        </div>
      </div>
    </div>
    <!--  -->
    <div class="stash">
      <span>
        {{ date }}일째<br />
        {{ stash }}
      </span>
    </div>
    <!--  -->
    <div :class="signalClass" class="signal">
      <span>{{ getSignalText() }}</span>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    number: String,
    per: Boolean,
    symbol: String,
    percent: String,
    date: String,
    stash: String,
    signalClass: String,
  },
  methods: {
    getSignalText() {
      return this.signalClass === 'sig01'
        ? '매수'
        : this.signalClass === 'sig02'
        ? '매도'
        : this.signalText
    },
  },
};
</script>
