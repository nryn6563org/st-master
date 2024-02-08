<template>
  <section id="morePeopleItem">
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

      <span class="txt">지금, 많은 사람들이 궁금해하는 종목은?</span>
      <!-- txt -->
    </div>
    <!-- 타이틀 -->

    <div class="p-list-w">
      <Plist
        v-for="(item, index) in listItems"
        :key="index"
        :name="item.name"
        :number="item.number"
        :per="item.per"
        :symbol="item.symbol"
        :percent="item.percent"
        :date="item.date"
        :stash="item.stash"
        :signalClass="item.signalClass"
      ></Plist>
    </div>
    <!-- 종목리스트 -->
  </section>
</template>

<script>
import Plist from '~/components/main/PeopleItemList'

export default {
  components: {
    Plist
  },
  data() {
    return {
      listItems: [
        {
          name: '삼성바이오로직스',
          number: '000000',
          per: true,
          symbol: '+',
          percent: '2.34',
          date: '45',
          stash: '보유중',
          signalClass: 'sig01'
        },
        {
          name: '삼성전자',
          number: '000000',
          per: false,
          symbol: '+',
          percent: '2.34',
          date: '5',
          stash: '관망중',
          signalClass: 'sig02'
        },
        {
          name: 'SK하이닉스',
          number: '000000',
          per: true,
          symbol: '-',
          percent: '2.34',
          date: '5',
          stash: '보유중',
          signalClass: 'sig01'
        }, {
          name: '삼성바이오로직스',
          number: '000000',
          per: true,
          symbol: '+',
          percent: '2.34',
          date: '45',
          stash: '보유중',
          signalClass: 'sig02'
        },
        {
          name: '삼성전자',
          number: '000000',
          per: false,
          symbol: '+',
          percent: '2.34',
          date: '5',
          stash: '관망중',
          signalClass: 'sig01'
        },
        {
          name: 'SK하이닉스',
          number: '000000',
          per: true,
          symbol: '-',
          percent: '2.34',
          date: '5',
          stash: '보유중',
          signalClass: 'sig01'
        }, {
          name: '삼성바이오로직스',
          number: '000000',
          per: true,
          symbol: '+',
          percent: '2.34',
          date: '45',
          stash: '보유중',
          signalClass: 'sig02'
        },
        {
          name: '삼성전자',
          number: '000000',
          per: false,
          symbol: '+',
          percent: '2.34',
          date: '5',
          stash: '관망중',
          signalClass: 'sig02'
        },
        {
          name: 'SK하이닉스',
          number: '000000',
          per: true,
          symbol: '-',
          percent: '2.34',
          date: '5',
          stash: '보유중',
          signalClass: 'sig01'
        },
        {
          name: '삼성전자',
          number: '000000',
          per: false,
          symbold: '+',
          percent: '2.34',
          date: '1000',
          stash: '관망중',
          signalClass: 'sig01'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import '~/assets/css/main/morePeopleItem.css';
</style>
