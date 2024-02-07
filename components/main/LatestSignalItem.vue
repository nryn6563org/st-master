<template>
  <section id="latestSignalItem">
    <div class="sub_title">
      <span class="bullet">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 17.3438C13.2792 17.3438 15.9375 14.6854 15.9375 11.4062C15.9375 8.12706 13.2792 5.46875 10 5.46875C6.72081 5.46875 4.0625 8.12706 4.0625 11.4062C4.0625 14.6854 6.72081 17.3438 10 17.3438ZM10 18.9062C14.1421 18.9062 17.5 15.5484 17.5 11.4062C17.5 7.26411 14.1421 3.90625 10 3.90625C5.85786 3.90625 2.5 7.26411 2.5 11.4062C2.5 15.5484 5.85786 18.9062 10 18.9062Z"
            fill="#1E202C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.21875 11.5625V7.65625C9.21875 7.22478 9.56853 6.875 10 6.875C10.4315 6.875 10.7812 7.22478 10.7812 7.65625V11.5625C10.7812 11.994 10.4315 12.3438 10 12.3438C9.56853 12.3438 9.21875 11.994 9.21875 11.5625Z"
            fill="#FFCE4F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.6562 2.03125C12.6562 2.46272 12.3065 2.8125 11.875 2.8125L8.125 2.8125C7.69353 2.8125 7.34375 2.46272 7.34375 2.03125C7.34375 1.59978 7.69353 1.25 8.125 1.25L11.875 1.25C12.3065 1.25 12.6562 1.59978 12.6562 2.03125Z"
            fill="#FFCE4F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.8024 3.97882L17.4274 4.60382C17.7325 4.90892 17.7325 5.40358 17.4274 5.70867C17.1223 6.01377 16.6277 6.01377 16.3226 5.70867L15.6976 5.08367C15.3925 4.77858 15.3925 4.28392 15.6976 3.97882C16.0027 3.67372 16.4973 3.67372 16.8024 3.97882Z"
            fill="#1E202C"
          />
        </svg>
      </span>
      <span class="txt">최근 시그널 발생 종목은?</span>
    </div>
    <!-- title -->

    <div class="signal-tab-w">
      <div class="signal-tab">
        <button :class="{active : activeTab === 'sell'}" class="btn btn-half" @click="changeTab('sell')">최근 매도 시그널</button>
        <button :class="{active : activeTab === 'buy'}" class="btn btn-half" @click="changeTab('buy')">최근 매수 시그널</button>
      </div>
      <!-- 탭 -->
      
      <div class="signal-tab-content">
        <SignalContent id="tab01" v-show="activeTab === 'sell'"></SignalContent>
        <!-- 매도 시그널 -->
        <SignalContent id="tab02" v-show="activeTab === 'buy'"></SignalContent>
        <!-- 매수 시그널 -->
        
        <div class="caution">
          <span class="bullet">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.16666 10.8333L9.16665 7.49996C9.16665 7.03972 9.53975 6.66663 9.99999 6.66663C10.4602 6.66663 10.8333 7.03972 10.8333 7.49996L10.8333 10.8333C10.8333 11.2935 10.4602 11.6666 9.99999 11.6666C9.53975 11.6666 9.16666 11.2935 9.16666 10.8333Z"
                fill="#1E202C"
              />
              <path
                d="M9.99999 15C10.4602 15 10.8333 14.6269 10.8333 14.1666C10.8333 13.7064 10.4602 13.3333 9.99999 13.3333C9.53975 13.3333 9.16666 13.7064 9.16666 14.1666C9.16666 14.6269 9.53975 15 9.99999 15Z"
                fill="#1E202C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.99999 1.66663C10.6313 1.66663 11.2084 2.0233 11.4907 2.58794L18.1574 15.9213C18.4157 16.4379 18.3881 17.0515 18.0844 17.5428C17.7807 18.0342 17.2443 18.3333 16.6667 18.3333H3.33333C2.7557 18.3333 2.21925 18.0342 1.91557 17.5428C1.6119 17.0515 1.58429 16.4379 1.84261 15.9213L8.50928 2.58794C8.7916 2.0233 9.36871 1.66663 9.99999 1.66663ZM3.33333 16.6666H16.6667L9.99999 3.33329L3.33333 16.6666Z"
                fill="#FFCE4F"
              />
            </svg>
          </span>
          <span class="text">
            최근 시그널 발생 종목을 알려드리는 것으로 해당 종목은 추천종목은
            아닙니다.
          </span>
        </div>
        <!-- 경고안내 -->
      </div>
      <!-- signal-tab-content -->
    </div>
    <!-- 시그널 -->
  </section>
</template>

<script>
import SignalContent from '~/components/main/SignalContent'

export default{
  components: {
    SignalContent
  },
  data(){
    return{
      activeTab : 'sell'
    }
  },
  methods:{
    changeTab(tab) {
      this.activeTab = tab
    }
  }
}
</script>

<style scoped>
@import "~/assets/css/main/latestSignalItem.css";
</style>
