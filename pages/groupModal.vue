<template>
  <div>
    <div class="groupModalBtn">
      <button class="btn btn-default" @click="openSModal('announcement')">
        시그널 안내
      </button>
      <button class="btn btn-default" @click="openSModal('itemAdd1')">
        나의 종목 등록1
      </button>
      <button class="btn btn-default" @click="openSModal('itemAdd2')">
        나의 종목 등록2
      </button>
      <button class="btn btn-default" @click="openSModal('itemSetting')">
        나의 종목 설정
      </button>
      <button class="btn btn-default" @click="openSModal('alarmSetting1')">
        시황 알림 설정1
      </button>
      <button class="btn btn-default" @click="openSModal('alarmSetting2')">
        시황 알림 설정2
      </button>
      <button class="btn btn-default" @click="openSModal('signalPfm1')">
        시그널 성과1
      </button>
      <button class="btn btn-default" @click="openSModal('signalPfm2')">
        시그널 성과2
      </button>
      <button class="btn btn-default" @click="openSModal('signalPfm3')">
        시그널 성과3
      </button>
      <button class="btn btn-default" @click="openSModal('signalPfm4')">
        시그널 성과4
      </button>
      <button class="btn btn-default" @click="openSModal('signalPfm5')">
        시그널 성과5
      </button>
    </div>

    <SlideModal
      class="alertModal"
      :modal-id="'announcement'"
      :view-modal="modals.announcement"
      :close-modal="() => closeSModal('announcement')"
    >
      <template #header>
        <strong>시그널 안내</strong>
      </template>
      <!-- header -->
      <template #body>
        <div class="alert_content">
          <Visual01></Visual01>
          <!-- bullet -->
          <div class="txt">
            <strong>
              “더 이상 발생된 <br /><em>시그널</em>이 없습니다.”
            </strong>
          </div>
          <!-- txt -->

          <div class="btnbox">
            <button class="btn btn-ylw" @click="closeSModal('announcement')">
              확 인
            </button>
          </div>
        </div>
      </template>
      <!-- body -->
    </SlideModal>
    <!-- 시그널 안내 -->

    <SlideModal
      class="alertModal"
      :modal-id="'itemAdd1'"
      :view-modal="modals.itemAdd1"
      :close-modal="() => closeSModal('itemAdd1')"
    >
      <template #header>
        <strong>나의 종목 등록</strong>
      </template>
      <!-- header -->
      <template #body>
        <div class="alert_content">
          <Visual02></Visual02>
          <!-- bullet -->

          <div class="txt">
            <strong> <em>"삼성전자"</em>를 <br /> </strong>
            <span>나의 종목에 등록하시겠습니까?</span>
          </div>
          <!-- txt -->

          <div class="btnbox">
            <button class="btn btn-ylw" @click="closeSModal('itemAdd1')">
              확 인
            </button>
          </div>
        </div>
      </template>
      <!-- body -->
    </SlideModal>
    <!-- 나의종목등록 -->

    <SlideModal
      class="alertModal"
      :modal-id="'itemAdd2'"
      :view-modal="modals.itemAdd2"
      :close-modal="() => closeSModal('itemAdd2')"
    >
      <template #header>
        <strong>나의 종목 등록</strong>
      </template>
      <!-- header -->
      <template #body>
        <div class="alert_content">
          <Visual03></Visual03>
          <!-- bullet -->

          <div class="txt">
            <strong> “나의 종목으로 <br /><em>등록</em>되었습니다” </strong>
          </div>
          <!-- txt -->

          <div class="btnbox">
            <button class="btn btn-ylw" @click="closeSModal('itemAdd2')">
              확 인
            </button>
          </div>
        </div>
      </template>
      <!-- body -->
    </SlideModal>
    <!-- 나의종목등록 -->

    <SlideModal
      class="alertModal"
      :modal-id="'itemSetting'"
      :view-modal="modals.itemSetting"
      :close-modal="() => closeSModal('itemSetting')"
    >
      <template #header>
        <strong>나의 종목 설정</strong>
      </template>
      <!-- header -->
      <template #body>
        <div class="alert_content">
          <Visual04></Visual04>
          <!-- bullet -->

          <div class="txt txt_s">
            <strong> 나의 종목 <em>설정이 완료</em>되었습니다. </strong>
            <span>
              설정하신 종목에서 새로운 종목 시그널이 <br />
              발생되면 문자로 즉시 알림을 드립니다.
            </span>
          </div>
          <!-- txt -->

          <div class="txtbox">
            이후 나의 종목 추가/삭제 시에는 가입 안내 문자를 <br />통해 알려드린
            주소(URL)를 통해 접속해 주세요.
          </div>
          <!-- txtbox -->
        </div>
      </template>
      <!-- body -->

      <template #footer>
        <div class="btn-group">
          <button class="btn btn-grb" @click="closeSModal('itemSetting')">
            닫기
          </button>
          <button class="btn btn-ylw">시황 알림 설정</button>
        </div>
      </template>
    </SlideModal>
    <!-- 나의종목설정 -->

    <SlideModal
      class="alertModal"
      :modal-id="'alarmSetting1'"
      :view-modal="modals.alarmSetting1"
      :close-modal="() => closeSModal('alarmSetting1')"
    >
      <template #header>
        <strong>시황 알림 설정</strong>
      </template>
      <!-- header -->
      <template #body>
        <div class="alert_content">
          <div class="txt txt_top txt_s">
            <strong>
              나의 종목은 <em>10종목까지</em> 등록이 <br />
              가능합니다.
            </strong>
          </div>
          <!-- txt -->

          <Visual05></Visual05>
          <!-- bullet -->

          <div class="txtbox">
            종목 추가 등록을 위해서는 기존의 종목을 <br />
            <em>삭제 후 다시 등록</em>해 주세요
          </div>
          <!--  -->

          <div class="btnbox">
            <button class="btn btn-ylw" @click="closeSModal('alarmSetting1')">
              확 인
            </button>
          </div>
          <!--  -->
        </div>
      </template>
      <!-- body -->
    </SlideModal>
    <!-- 시황알림설정 -->

    <SlideModal
      class="alertModal"
      :modal-id="'alarmSetting2'"
      :view-modal="modals.alarmSetting2"
      :close-modal="() => closeSModal('alarmSetting2')"
    >
      <template #header>
        <strong>시황 알림 설정</strong>
      </template>
      <!-- header -->
      <template #body>
        <div class="alert_content">
          <div class="txt txt_s txt_top">
            <strong> 시황 알림 <em>설정이 완료</em>되었습니다. </strong>
          </div>
          <!-- txt -->

          <Visual05></Visual05>
          <!-- bullet -->

          <div class="txtbox">
            매일 새로운 시황 정보를 문자로<br />발송해 드립니다.
          </div>
          <!--  -->

          <div class="btnbox">
            <button class="btn btn-ylw" @click="closeSModal('alarmSetting2')">
              확 인
            </button>
          </div>
          <!--  -->
        </div>
      </template>
      <!-- body -->
    </SlideModal>
    <!-- 시황알림설정 -->

    <SlideModal
      class="alertModal"
      :modal-id="'signalPfm1'"
      :view-modal="modals.signalPfm1"
      :close-modal="() => closeSModal('signalPfm1')"
    >
      <template #header>
        <strong>시그널 성과</strong>
      </template>
      <!-- header -->
      <template #body>
        <div class="alert_content">
          <div class="txt txt_top2 txt_s">
            <strong><em>적중률 성과</em></strong>
          </div>
          <!-- txt -->
          <Visual06></Visual06>
          <!-- bullet -->
          <div class="txt txt_m">
            <span>
              최근 5년간 적중률은 80%로 36번의<br />매매에서 29번 수익실현을
              하였습니다.
            </span>
          </div>
          <!-- txt -->

          <div class="txtbox txtbox_s">
            적중률은 기간 내 총 매매에서 수익을 낸 매매의 비율입니다. <br />
            적중률이 높을 수록 시그널이 좋은 성과를 낸 것으로 <br />
            다음 매매에서도 좋은 성과를 기대할 수 있습니다.
          </div>
          <!-- txtbox -->

          <div class="btnbox">
            <button class="btn btn-ylw" @click="closeSModal('signalPfm1')">
              닫 기
            </button>
          </div>
        </div>
      </template>
      <!-- body -->
    </SlideModal>
    <!-- 시그널성과 -->

    <SlideModal
      class="alertModal"
      :modal-id="'signalPfm2'"
      :view-modal="modals.signalPfm2"
      :close-modal="() => closeSModal('signalPfm3')"
    >
      <template #header>
        <strong>시그널 성과</strong>
      </template>
      <!-- header -->
      <template #body>
        <div class="alert_content">
          <div class="txt txt_top2 txt_s">
            <strong><em>최대수익률 성과</em></strong>
          </div>
          <!-- txt -->
          <Visual07></Visual07>
          <!-- bullet -->
          <div class="txt txt_m">
            <span>
              최근 5년간 적중률은 80%로 36번의 <br />매매에서 29번 수익실현을
              하였습니다.
            </span>
          </div>
          <!-- txt -->

          <div class="txtbox txtbox_s">
            최대수익률은 기간 내 매매에서 가장 높았던 <br />
            매도 수익률입니다. <br />
            최대수익률은 시그널의 가장 큰 성과가 몇 %였는지 확인해 <br />
            볼 수 있습니다.
          </div>
          <!-- txtbox -->

          <div class="btnbox">
            <button class="btn btn-ylw" @click="closeSModal('signalPfm2')">
              닫 기
            </button>
          </div>
        </div>
      </template>
      <!-- body -->
    </SlideModal>
    <!-- 시그널성과 -->

    <SlideModal
      class="alertModal"
      :modal-id="'signalPfm3'"
      :view-modal="modals.signalPfm3"
      :close-modal="() => closeSModal('signalPfm3')"
    >
      <template #header>
        <strong>시그널 성과</strong>
      </template>
      <!-- header -->
      <template #body>
        <div class="alert_content">
          <div class="txt txt_top2 txt_s">
            <strong><em>누적적중률 성과</em></strong>
          </div>
          <!-- txt -->
          <Visual08></Visual08>
          <!-- bullet -->
          <div class="txt txt_m">
            <span>
              최근 5년간 적중률은 80%로 36번의 <br />매매에서 29번 수익실현을
              하였습니다.
            </span>
          </div>
          <!-- txt -->

          <div class="txtbox txtbox_s">
            누적수익률은 기간 내 모든 매매의 수익률의 합입니다. <br />
            누적수익률은 매도수익률의 합으로 투자수익률이 <br />
            아니기 때문에 변동폭이 클 수 있습니다.
          </div>
          <!-- txtbox -->

          <div class="btnbox">
            <button class="btn btn-ylw" @click="closeSModal('signalPfm3')">
              닫 기
            </button>
          </div>
        </div>
      </template>
      <!-- body -->
    </SlideModal>
    <!-- 시그널성과 -->

    <SlideModal
      class="alertModal"
      :modal-id="'signalPfm4'"
      :view-modal="modals.signalPfm4"
      :close-modal="() => closeSModal('signalPfm4')"
    >
      <template #header>
        <strong>시그널 성과</strong>
      </template>
      <!-- header -->
      <template #body>
        <div class="alert_content">
          <div class="txt txt_top2 txt_s">
            <strong><em>매매횟수</em></strong>
          </div>
          <!-- txt -->
          <Visual09></Visual09>
          <!-- bullet -->
          <div class="txt txt_m">
            <span>
              최근 5년간 적중률은 80%로 36번의 <br />매매에서 29번 수익실현을
              하였습니다.
            </span>
          </div>
          <!-- txt -->

          <div class="txtbox txtbox_s">
            매매횟수는 기간 내 총 매매를 한 횟수입니다. <br />
            매도를 기준으로 하기 때문에 현재 보유중인 <br />
            경우에는 포함되지 않습니다. <br />
            매매횟수가 많을 수록 시그널이 많이 발생되는 종목입니다.
          </div>
          <!-- txtbox -->

          <div class="btnbox">
            <button class="btn btn-ylw" @click="closeSModal('signalPfm4')">
              닫 기
            </button>
          </div>
        </div>
      </template>
      <!-- body -->
    </SlideModal>
    <!-- 시그널성과 -->

    <SlideModal
      class="alertModal"
      :modal-id="'signalPfm5'"
      :view-modal="modals.signalPfm5"
      :close-modal="() => closeSModal('signalPfm5')"
    >
      <template #header>
        <strong>시그널 성과</strong>
      </template>
      <!-- header -->
      <template #body>
        <div class="alert_content">
          <div class="txt txt_top2 txt_s">
            <strong><em>보유기간</em></strong>
          </div>
          <!-- txt -->
          <Visual10></Visual10>
          <!-- bullet -->
          <div class="txt txt_m">
            <span>
              최근 5년간 적중률은 80%로 36번의 <br />매매에서 29번 수익실현을
              하였습니다.
            </span>
          </div>
          <!-- txt -->

          <div class="txtbox txtbox_s">
            보유기간은 1회 매매에 대해서 평균적으로 <br />
            보유하는 기간입니다. <br />
            보유기간이 짧다고 매매빈도가 많은 것은 아닙니다. <br />
            매매빈도는 매매횟수를 함께 참고하세요.
          </div>
          <!-- txtbox -->

          <div class="btnbox">
            <button class="btn btn-ylw" @click="closeSModal('signalPfm5')">
              닫 기
            </button>
          </div>
        </div>
      </template>
      <!-- body -->
    </SlideModal>
    <!-- 시그널성과 -->
  </div>
</template>
<script>
import SlideModal from '~/components/modal/SlideModal'
import Visual01 from '~/components/modal/group/VisualA'
import Visual02 from '~/components/modal/group/VisualB'
import Visual03 from '~/components/modal/group/VisualC'
import Visual04 from '~/components/modal/group/VisualD'
import Visual05 from '~/components/modal/group/VisualE'
import Visual06 from '~/components/modal/group/VisualF'
import Visual07 from '~/components/modal/group/VisualG'
import Visual08 from '~/components/modal/group/VisualH'
import Visual09 from '~/components/modal/group/VisualI'
import Visual10 from '~/components/modal/group/VisualJ'

export default {
  components: {
    SlideModal,
    Visual01,
    Visual02,
    Visual03,
    Visual04,
    Visual05,
    Visual06,
    Visual07,
    Visual08,
    Visual09,
    Visual10
  },
  data() {
    return {
      modals: {
        announcement: false
      }
    }
  },
  methods: {
    openSModal(modalId) {
      this.$set(this.modals, modalId, true)
    },
    closeSModal(modalId) {
      this.$set(this.modals, modalId, false)
    }
  }
}
</script>
<style>
@import url("~/assets/css/modal.css");
</style>
