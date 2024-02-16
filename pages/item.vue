<template>
  <div id="container" class="page">
    <header id="pageHeader">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
        >
          <path
            d="M13.6569 16.7072C14.1776 17.2626 15.0218 17.2626 15.5425 16.7072C16.0632 16.1518 16.0632 15.2513 15.5425 14.6959L9.88564 8.66189L15.5425 2.62793C16.0632 2.07251 16.0632 1.17201 15.5425 0.616601C15.0218 0.0611885 14.1776 0.0611885 13.6569 0.616601L8.00003 6.65056L2.34316 0.616572C1.82246 0.0611589 0.978241 0.0611593 0.457542 0.616572C-0.0631568 1.17198 -0.0631573 2.07248 0.457542 2.6279L6.11441 8.66189L0.457541 14.6959C-0.0631584 15.2513 -0.063158 16.1518 0.457541 16.7072C0.97824 17.2626 1.82246 17.2626 2.34316 16.7072L8.00003 10.6732L13.6569 16.7072Z"
            fill="#1E202C"
          />
        </svg>
      </button>
    </header>
    <section id="itemSignal">
      <div class="obj">
        <strong>셀트리온제약</strong>
        <span>005970</span>
      </div>
      <!-- 종목명 -->
      <div class="card">
        <div class="signalCard">
          <div class="signal sig01">매수</div>
          <!-- 시그널 -->

          <div class="signal-info">
            <div>
              <span>매도시그널</span>
              <span class="prc"></span>
            </div>
            <!-- 매수&매도 시그널 -->
            <div>
              <span>발생</span>
              <span class="date"></span>
            </div>
            <!-- 발생일 -->
            <div>
              <span>수익률</span>
              <span class="per"></span>
            </div>
            <!-- 수익률 -->
          </div>
          <!--  -->
        </div>
        <!-- 종목신호 -->

        <div class="mySignalInfo">
          <div>
            <div class="date">보유기간 <em>14</em> 일</div>
            <!-- 보유기간 -->
            <div class="per">
              수익률 <span><em>+2.34</em>%</span>
            </div>
            <!-- 수익률 -->
          </div>
        </div>
        <!-- 나의 종목신호 정보 -->
      </div>
      <button>
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
    <!-- 종목시그널 -->
    <section id="itemInfo"></section>
    <!-- 종목정보 -->
  </div>
</template>

<script>
export default {
  layout: 'pageLayout'
}
</script>
<style scoped>
@import url("~/assets/css/page.css");
</style>
