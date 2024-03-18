<template>
  <div id="container">
    <div id="myItemSignalGuide">
      <div class="sub_title">
        <span class="bullet">
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
              d="M15 14.1667H16.6667C17.5871 14.1667 18.3333 13.4205 18.3333 12.5V4.16667C18.3333 3.24619 17.5871 2.5 16.6667 2.5H3.33334C2.41286 2.5 1.66667 3.24619 1.66667 4.16667V12.5C1.66667 13.4205 2.41286 14.1667 3.33334 14.1667H10V15.8333C10 17.435 12.039 18.1147 13 16.8333L15 14.1667ZM11.6667 12.5V15.8333L14.1667 12.5H16.6667V4.16667H3.33334V12.5H11.6667Z"
              fill="#0C0C20"
            />
            <path
              d="M5.83334 5.83333C5.3731 5.83333 5.00001 6.20643 5.00001 6.66667C5.00001 7.1269 5.3731 7.5 5.83334 7.5H14.1667C14.6269 7.5 15 7.1269 15 6.66667C15 6.20643 14.6269 5.83333 14.1667 5.83333H10H5.83334Z"
              fill="#FF9900"
            />
            <path
              d="M5.00001 10C5.00001 9.53976 5.3731 9.16667 5.83334 9.16667H9.16667C9.62691 9.16667 10 9.53976 10 10C10 10.4602 9.62691 10.8333 9.16667 10.8333H5.83334C5.3731 10.8333 5.00001 10.4602 5.00001 10Z"
              fill="#FF9900"
            />
          </svg>
        </span>
        <span class="txt"> 나의 종목 시그널 </span>
      </div>
      <!-- sub_title -->

      <div class="vi_txt">
        <strong>
          주식에서 수익을 내는 방법은? <br />
          <span> <em>싸게</em> 사고, <em>비싸게</em> 팔기!! </span>
        </strong>
        <span>
          종목을 추가하면 <em>매수/매도 <br>시그널</em>을 받으실 수 있습니다.
        </span>
      </div>
      <!-- 가이드 텍스트 -->

      <div class="btn-box">
        <button class="btn">
          나의 종목 추가하기
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.390524 0.390524C0.911223 -0.130175 1.75544 -0.130175 2.27614 0.390524L9.60948 7.72386C10.1302 8.24456 10.1302 9.08878 9.60948 9.60948L2.27614 16.9428C1.75544 17.4635 0.911223 17.4635 0.390524 16.9428C-0.130175 16.4221 -0.130175 15.5779 0.390524 15.0572L6.78105 8.66667L0.390524 2.27614C-0.130175 1.75544 -0.130175 0.911223 0.390524 0.390524Z" fill="white" />
          </svg>
        </button>
      </div>
    </div>
    <LatestSignalItem></LatestSignalItem>
    <MorePeopleItem></MorePeopleItem>
  </div>
</template>

<script>
import LatestSignalItem from '~/components/main/LatestSignalItem'
import MorePeopleItem from '~/components/main/MorePeopleItem'
export default {
  components: {
    LatestSignalItem,
    MorePeopleItem
  },
  layout: 'defaultLayout'
}
</script>
<style>
@import "~/assets/css/sub/itemSignal.css";
</style>
