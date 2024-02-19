<template>
  <section id="itemSignal">
      <div class="obj">
        <strong>셀트리온제약</strong>
        <span>005970</span>
      </div>
      <!-- 종목명 -->
      <div class="card">
        <div class="signalCard">
          <div class="sig" :class="{ sig01 : signal === '매수', sig02 : signal === '매도'}">{{ signal }}</div>
          <!-- 시그널 -->

          <div class="signal-info">
            <div v-if="hold">
              <span>보유기간</span>
              <span class="wasDate"> <em>{{ holdDate }}</em>일쨰 </span>
            </div>
            <!-- 보유기간 -->

            <div v-if="sellSig">
              <span>매도시그널</span>
              <span class="prc"> <em>{{ sellPrice }}</em> 원 </span>
            </div>
            <!-- 매수 시그널 -->

            <div v-if="buySig">
              <span>매수</span>
              <span class="buy"> <em>{{ buyPrice }}</em> 원</span>
            </div>
            <!-- 수익률 -->

            <div v-if="occ">
              <span>발생</span>
              <span class="date"> {{ occuDate }} </span>
            </div>
            <!-- 발생일 -->

            <div v-if="rate">
              <span>수익률</span>
              <span class="per" :class="{ red : percent >= 0, blue: percent < 0 }"> <em>{{ percent }}</em> %</span>
            </div>
            <!-- 수익률 -->

            <div v-if="was">
              <span>관망기간</span>
              <span class="wasDate"> <em>{{ waitDate }}</em>일쨰 </span>
            </div>
            <!-- 관망기간 -->
          </div>
          <!--  -->
        </div>
        <!-- 종목신호 -->

        <div class="mySignalInfo">
          <div>
            <div class="myDate">보유기간 <em>{{ myHoldDate }}</em> 일</div>
            <!-- 보유기간 -->
            <div class="myPer">
              수익률 <span :class="{ red: myPercent >=0 , blue: myPercent < 0}"><em>{{ myPercent }}</em>%</span>
            </div>
            <!-- 수익률 -->
          </div>
        </div>
        <!-- 나의 종목신호 정보 -->
      </div>

      <button @click="goToPage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M2.8 3.88805C2.8 3.45859 3.1134 3.11044 3.5 3.11044H10.5C10.8866 3.11044 11.2 3.45859 11.2 3.88805C11.2 4.31751 10.8866 4.66566 10.5 4.66566H3.5C3.1134 4.66566 2.8 4.31751 2.8 3.88805Z"
            fill="#0C0C20"
          />
          <path
            d="M3.5 6.22088C3.1134 6.22088 2.8 6.56903 2.8 6.99849C2.8 7.42795 3.1134 7.7761 3.5 7.7761H6.3C6.6866 7.7761 7 7.42795 7 6.99849C7 6.56903 6.6866 6.22088 6.3 6.22088H3.5Z"
            fill="#0C0C20"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.2 10.8865H12.6C13.3732 10.8865 14 10.1902 14 9.33132V1.55522C14 0.696296 13.3732 0 12.6 0H1.4C0.626801 0 0 0.696296 0 1.55522V9.33132C0 10.1902 0.626801 10.8865 1.4 10.8865H7V12.4418C7 13.9363 8.71275 14.5706 9.52 13.3749L11.2 10.8865ZM8.4 9.33132V12.4418L10.5 9.33132H12.6V1.55522H1.4V9.33132H8.4Z"
            fill="#0C0C20"
          />
        </svg>
        나의 종목
      </button>
    </section>
</template>
<script>
export default {
  props: {
    signal: String,
    hold: Boolean,
    holdDate: String,
    sellSig: Boolean,
    sellPrice: String,
    buySig: Boolean,
    buyPrice: String,
    occ: Boolean,
    occuDate: String,
    rate: Boolean,
    percent: String,
    was: Boolean,
    waitDate: String,
    myHoldDate: String,
    myPercent: String
  },
  methods: {
    goToPage() {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
@import url('~/assets/css/item/card.css');
</style>