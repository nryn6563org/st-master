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
    <!-- 종목상단 -->

    <ItemSignal
      :signal="'매수'"
      :hold="false"
      :holdDate="'0'"
      :sellSig="true"
      :sellPrice="'1,124,000'"
      :buySig="false"
      :buyPrice="'0'"
      :occ="true"
      :occuDate="'2023-01-20 12:30'"
      :rate="true"
      :percent="'+2.34'"
      :was="false"
      :waitDate="'0'"
      :myHoldDate="'14'"
      :myPercent="'+2.34'"
    ></ItemSignal>
    <!-- 종목시그널 -->

    <section id="itemInfo">
      <div class="sub_title">
        <span class="bullet">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle cx="10" cy="10" r="5" fill="#FFCE4F" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.1562 0.625C10.5877 0.625 10.9375 0.974778 10.9375 1.40625V2.34375C10.9375 2.77522 10.5877 3.125 10.1562 3.125C9.72478 3.125 9.375 2.77522 9.375 2.34375V1.40625C9.375 0.974778 9.72478 0.625 10.1562 0.625ZM10 14.0625C12.2437 14.0625 14.0625 12.2437 14.0625 10C14.0625 7.75634 12.2437 5.9375 10 5.9375C7.75634 5.9375 5.9375 7.75634 5.9375 10C5.9375 12.2437 7.75634 14.0625 10 14.0625ZM10 15.625C13.1066 15.625 15.625 13.1066 15.625 10C15.625 6.8934 13.1066 4.375 10 4.375C6.8934 4.375 4.375 6.8934 4.375 10C4.375 13.1066 6.8934 15.625 10 15.625ZM10.9375 17.6562C10.9375 17.2248 10.5877 16.875 10.1562 16.875C9.72478 16.875 9.375 17.2248 9.375 17.6562V18.5938C9.375 19.0252 9.72478 19.375 10.1562 19.375C10.5877 19.375 10.9375 19.0252 10.9375 18.5938V17.6562ZM16.5565 3.9233C16.8616 4.2284 16.8616 4.72306 16.5565 5.02816L15.8936 5.69107C15.5885 5.99617 15.0939 5.99617 14.7888 5.69107C14.4837 5.38597 14.4837 4.89131 14.7888 4.58622L15.4517 3.9233C15.7568 3.61821 16.2514 3.61821 16.5565 3.9233ZM5.44516 16.0323C5.75026 15.7272 5.75026 15.2325 5.44516 14.9274C5.14006 14.6223 4.6454 14.6223 4.3403 14.9274L3.67739 15.5903C3.37229 15.8954 3.37229 16.3901 3.67739 16.6952C3.98249 17.0003 4.47715 17.0003 4.78225 16.6952L5.44516 16.0323ZM19.375 10.7812C19.375 11.2127 19.0252 11.5625 18.5938 11.5625H17.6562C17.2248 11.5625 16.875 11.2127 16.875 10.7812C16.875 10.3498 17.2248 10 17.6562 10H18.5938C19.0252 10 19.375 10.3498 19.375 10.7812ZM2.34375 11.5625C2.77522 11.5625 3.125 11.2127 3.125 10.7812C3.125 10.3498 2.77522 10 2.34375 10H1.40625C0.974777 10 0.625 10.3498 0.625 10.7812C0.625 11.2127 0.974777 11.5625 1.40625 11.5625H2.34375ZM16.2153 16.6952C15.9102 17.0003 15.4155 17.0003 15.1104 16.6952L14.4475 16.0323C14.1424 15.7272 14.1424 15.2325 14.4475 14.9274C14.7526 14.6223 15.2473 14.6223 15.5524 14.9274L16.2153 15.5903C16.5204 15.8954 16.5204 16.3901 16.2153 16.6952ZM3.86045 5.69104C4.16555 5.99614 4.66021 5.99614 4.9653 5.69104C5.2704 5.38595 5.2704 4.89129 4.9653 4.58619L4.30239 3.92328C3.99729 3.61818 3.50263 3.61818 3.19754 3.92328C2.89244 4.22837 2.89244 4.72303 3.19754 5.02813L3.86045 5.69104Z"
              fill="#1E202C"
            />
          </svg>
        </span>
        <!-- bullet -->

        <span class="txt">셀트리온 제약의 매매성과는?</span>
        <!-- txt -->
      </div>
      <!-- title -->

      <SalesPerformance
        :accuracy="80"
        :highRate="123"
        :accumulate="223.6"
        :salesNumber="23"
        :holdingNumber="23"
      ></SalesPerformance>
    </section>
    <!-- 종목정보 -->

    <section id="signalChart">
      <div class="sub_title">
        <span class="bullet">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <rect x="1" y="1" width="16" height="11" fill="#FFE600" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.74531 7.74099e-07H14.2547C14.7291 -1.53192e-05 15.1384 -2.92659e-05 15.4755 0.0275141C15.8313 0.056585 16.1852 0.120769 16.5258 0.294284C17.0338 0.553143 17.4469 0.96619 17.7057 1.47423C17.8792 1.81477 17.9434 2.16867 17.9725 2.52448C18 2.86159 18 3.27087 18 3.74529V9.75471C18 10.2291 18 10.6384 17.9725 10.9755C17.9434 11.3313 17.8792 11.6852 17.7057 12.0258C17.4469 12.5338 17.0338 12.9469 16.5258 13.2057C16.1852 13.3792 15.8313 13.4434 15.4755 13.4725C15.1384 13.5 14.7291 13.5 14.2547 13.5H9.9V16.2H14.4C14.8971 16.2 15.3 16.6029 15.3 17.1C15.3 17.5971 14.8971 18 14.4 18H3.6C3.10295 18 2.7 17.5971 2.7 17.1C2.7 16.6029 3.10295 16.2 3.6 16.2H8.1V13.5H3.74533C3.27089 13.5 2.8616 13.5 2.52448 13.4725C2.16867 13.4434 1.81477 13.3792 1.47423 13.2057C0.96619 12.9469 0.553142 12.5338 0.294284 12.0258C0.120769 11.6852 0.056585 11.3313 0.0275142 10.9755C-2.92659e-05 10.6384 -1.53192e-05 10.2291 7.74099e-07 9.75469V3.74531C-1.53192e-05 3.27088 -2.92659e-05 2.86159 0.0275141 2.52448C0.056585 2.16867 0.120769 1.81477 0.294284 1.47423C0.553142 0.96619 0.96619 0.553142 1.47423 0.294284C1.81477 0.120769 2.16867 0.056585 2.52448 0.0275141C2.86159 -2.92659e-05 3.27088 -1.53192e-05 3.74531 7.74099e-07ZM14.22 11.7C14.7389 11.7 15.0739 11.6993 15.3289 11.6785C15.5734 11.6585 15.6641 11.6246 15.7086 11.6019C15.8779 11.5156 16.0156 11.3779 16.1019 11.2086C16.1246 11.1641 16.1585 11.0734 16.1785 10.8289C16.1993 10.5739 16.2 10.2389 16.2 9.72V7.60923H10.4563L9.33894 9.8439C8.82494 10.8719 7.34336 10.8284 6.89062 9.77196L5.22729 5.89086L4.48248 7.00807C4.23211 7.38364 3.81059 7.60923 3.35922 7.60923H1.8V9.72C1.8 10.2389 1.8007 10.5739 1.82154 10.8289C1.84151 11.0734 1.87542 11.1641 1.8981 11.2086C1.98438 11.3779 2.12206 11.5156 2.29141 11.6019C2.33591 11.6246 2.42656 11.6585 2.67105 11.6785C2.92606 11.6993 3.2611 11.7 3.78 11.7H14.22ZM1.8 5.80923H3.11838L4.1904 4.2012C4.78508 3.30918 6.13221 3.43286 6.55452 4.41825L8.16288 8.1711L8.97069 6.55549C9.19937 6.09813 9.66682 5.80923 10.1782 5.80923H16.2V3.78C16.2 3.2611 16.1993 2.92606 16.1785 2.67105C16.1585 2.42656 16.1246 2.33591 16.1019 2.29141C16.0156 2.12206 15.8779 1.98438 15.7086 1.8981C15.6641 1.87542 15.5734 1.84151 15.3289 1.82154C15.0739 1.8007 14.7389 1.8 14.22 1.8H3.78C3.2611 1.8 2.92606 1.8007 2.67105 1.82154C2.42656 1.84151 2.33591 1.87542 2.29141 1.8981C2.12206 1.98438 1.98438 2.12206 1.8981 2.29141C1.87542 2.33591 1.84151 2.42656 1.82154 2.67105C1.8007 2.92606 1.8 3.2611 1.8 3.78V5.80923Z"
              fill="#0C0C20"
            />
          </svg>
        </span>
        <!-- bullet -->

        <span class="txt">최근 1년 시그널 차트</span>
        <!-- txt -->
      </div>
      <!-- title -->

      <div class="chart">
        <img src="~/assets/img/demoChart.png" alt="데모차트" width="100%" />
      </div>

      <div class="infoTable">
        <table width="100%">
          <colgroup>
            <col width="72" />
            <col width="92" />
            <col width="87" />
            <col width="*" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">시그널</th>
              <th scope="col">발생일시</th>
              <th scope="col">가격</th>
              <th scope="col">매도 수익률</th>
            </tr>
          </thead>
          <tbody>
            <InfoTable
              v-for="(td, index) in tds"
              :key="index"
              :signalState="td.signalState"
              :date="td.date"
              :symbol="td.symbol"
              :price="td.price"
              :per="td.per"
            ></InfoTable>
          </tbody>
        </table>
      </div>
      <!-- 테이블 -->

      <div class="more">
        <button>
          더 보기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 11.6371 1.43713 13.1722 2.20104 14.4948L1.5 18H5.8728C7.10904 18.6391 8.51237 19 10 19Z"
              fill="#FFE600"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 2C5.58172 2 2 5.58172 2 10C2 11.0303 2.19425 12.0128 2.54722 12.9146C2.74889 13.4298 2.85148 14.0276 2.74759 14.6445L2.21945 17.7806L5.35552 17.2524C5.97242 17.1485 6.57019 17.2511 7.08543 17.4528C7.98723 17.8057 8.96973 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C8.71629 20 7.48679 19.7576 6.35647 19.3152C6.10799 19.2179 5.87953 19.1923 5.68767 19.2246L1.85883 19.8694C0.841767 20.0407 -0.040728 19.1582 0.130552 18.1412L0.775358 14.3123C0.80767 14.1205 0.782057 13.892 0.684798 13.6435C0.242386 12.5132 0 11.2837 0 10ZM10 5C10.5523 5 11 5.44772 11 6V9H14C14.5523 9 15 9.44771 15 10C15 10.5523 14.5523 11 14 11H11V14C11 14.5523 10.5523 15 10 15C9.44771 15 9 14.5523 9 14V11H6C5.44772 11 5 10.5523 5 10C5 9.44771 5.44772 9 6 9H9V6C9 5.44772 9.44771 5 10 5Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <!-- 더보기 -->
    </section>
  </div>
</template>

<script>
import ItemSignal from '~/components/item/ItemSignal'
import SalesPerformance from '~/components/item/SalesPerformance'
import InfoTable from '~/components/item/InfoTable'

export default {
  components: {
    ItemSignal,
    SalesPerformance,
    InfoTable
  },
  layout: 'pageLayout',
  data() {
    return {
      tds: [
        {
          signalState: '매도',
          date: '2023.01.20 12:30',
          price: '9,128,750',
          symbol: '+',
          per: '23.4'
        },
        {
          signalState: '매수',
          date: '2023.01.20 12:30',
          price: '28,750',
          symbol: '+',
          per: '53.4'
        },
        {
          signalState: '매수',
          date: '2023.01.20 12:30',
          price: '9,128,750',
          symbol: '-',
          per: '3.4'
        },
        {
          signalState: '매도',
          date: '2023.01.20 12:30',
          price: '128,750',
          symbol: '+',
          per: '53.4'
        },
        {
          signalState: '매수',
          date: '2023.01.20 12:30',
          price: '8,750',
          symbol: '-',
          per: '53.4'
        },
        {
          signalState: '매도',
          date: '2023.01.20 12:30',
          price: '9,128,750',
          symbol: '-',
          per: '13.4'
        },
        {
          signalState: '매도',
          date: '2023.01.20 12:30',
          price: '750',
          symbol: '+',
          per: '253.4'
        },
        {
          signalState: '매도',
          date: '2023.01.20 12:30',
          price: '9,128,750',
          symbol: '+',
          per: '253.4'
        },
        {
          signalState: '매수',
          date: '2023.01.20 12:30',
          price: '9,128,750',
          symbol: '-',
          per: '53.4'
        },
        {
          signalState: '매도',
          date: '2023.01.20 12:30',
          price: '9,128,750',
          symbol: '-',
          per: '53.4'
        }
      ]
    }
  }
}
</script>
<style scoped>
@import url("~/assets/css/page.css");
@import url('~/assets/css/item/sales.css');
@import url('~/assets/css/table.css');
</style>
