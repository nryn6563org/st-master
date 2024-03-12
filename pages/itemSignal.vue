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
          지금, 수익내는 매매시점이 궁금한 <br />
          종목을 등록해 보세요.
        </span>
      </div>
      <!-- 가이드 텍스트 -->

      <div class="btn-box">
        <button class="btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12.0601 16.5V11.5" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.5 14H9.5" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z" stroke="white" stroke-width="2" stroke-miterlimit="10" />
          </svg>
          나의 종목 추가하기
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
