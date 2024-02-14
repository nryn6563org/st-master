<template>
  <Modal
      class="itemSearch"
      :modal-id="'beforeSignal'"
      :show-modal="modals.beforeSignal"
      :close-modal="() => closeModal('beforeSignal')"
    >
      <template #header>
        <div class="title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle cx="9" cy="8" r="5" fill="#FF9900" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0481 13.2266C11.0908 13.8224 9.9606 14.1666 8.75 14.1666C5.29822 14.1666 2.5 11.3684 2.5 7.91663C2.5 4.46485 5.29822 1.66663 8.75 1.66663C12.2018 1.66663 15 4.46485 15 7.91663C15 9.55471 14.3698 11.0456 13.3387 12.1601L18.0893 16.9107C18.4147 17.2361 18.4147 17.7638 18.0893 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L12.0481 13.2266ZM13.3333 7.91663C13.3333 10.4479 11.2813 12.5 8.75 12.5C6.21869 12.5 4.16667 10.4479 4.16667 7.91663C4.16667 5.38532 6.21869 3.33329 8.75 3.33329C11.2813 3.33329 13.3333 5.38532 13.3333 7.91663Z"
              fill="#1E202C"
            />
          </svg>
          이전 시그널 내역
        </div>
        <button @click="closeModal('beforeSignal')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
          >
            <path
              d="M13.6569 16.7071C14.1776 17.2625 15.0218 17.2625 15.5425 16.7071C16.0632 16.1517 16.0632 15.2512 15.5425 14.6958L9.88564 8.66183L15.5425 2.62787C16.0632 2.07245 16.0632 1.17195 15.5425 0.61654C15.0218 0.0611274 14.1776 0.0611274 13.6569 0.61654L8.00003 6.6505L2.34316 0.616511C1.82246 0.0610979 0.978241 0.0610982 0.457542 0.616511C-0.0631568 1.17192 -0.0631573 2.07242 0.457542 2.62784L6.11441 8.66183L0.457541 14.6958C-0.0631584 15.2512 -0.063158 16.1517 0.457541 16.7071C0.97824 17.2626 1.82246 17.2626 2.34316 16.7071L8.00003 10.6732L13.6569 16.7071Z"
              fill="#1E202C"
            />
          </svg>
        </button>
      </template>
      <!-- header -->

      <template #body>
      </template>
      <!-- body -->

      <template #footer> </template>
      <!-- footer -->
    </Modal>
    <!-- modal -->
</template>
<script>
import Modal from '~/components/modal/ModalWrap'

export default {
  components: {
    Modal
  },
  data() {
    return {
      modals: {
        beforeSignal: false
      }
    }
  },
  mounted() {
  },
  methods: {
    openModal(modalId) {
      this.modals[modalId] = true
    },
    closeModal(modalId) {
      this.modals[modalId] = false
    }
  }
}
</script>
<style scoped>
@import "~/assets/css/modal.css";
</style>
