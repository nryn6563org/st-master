<template>
  <tr>
    <td colspan="4">
      <div>
        <div class="signal">
          <span
            class="sig"
            :class="{
              sig01: signalState === '매수',
              sig02: signalState === '매도',
            }"
            >{{ signalState }}</span
          >
        </div>
        <div class="date">
          {{ date }}
        </div>
        <div class="price">
          {{ price }}원
        </div>
        <div class="per" :class="{ red: symbol === '+', blue: symbol === '-' }">
          {{ symbol }} <em>{{ per }}</em>%
        </div>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    signalState: String,
    date: String,
    symbol: String,
    price: String,
    per: String
  }
}
</script>
<style></style>
