<template>
  <div class="inputArea">
    <input
      id="defaultInput"
      type="text"
      placeholder="종목코드/종목명 (초성,중간어 지원)"
    />
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <circle cx="13.5" cy="12.5" r="8.5" fill="#FFE600" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.277 21.1626C17.7453 22.116 15.937 22.6667 14 22.6667C8.47715 22.6667 4 18.1895 4 12.6667C4 7.14384 8.47715 2.66669 14 2.66669C19.5228 2.66669 24 7.14384 24 12.6667C24 15.2876 22.9917 17.6731 21.3419 19.4563L28.9428 27.0572C29.4635 27.5779 29.4635 28.4221 28.9428 28.9428C28.4221 29.4635 27.5779 29.4635 27.0572 28.9428L19.277 21.1626ZM21.3333 12.6667C21.3333 16.7168 18.0501 20 14 20C9.94991 20 6.66667 16.7168 6.66667 12.6667C6.66667 8.6166 9.94991 5.33335 14 5.33335C18.0501 5.33335 21.3333 8.6166 21.3333 12.6667Z"
          fill="#1E202C"
        />
      </svg>
    </button>
  </div>
  <!-- 입력영역 -->
</template>
<script>
import autocomplete from 'autocompleter'

export default {
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      const stockItems = [
        { name: '삼성전자1', number: '010000' },
        { name: '삼성전자2', number: '000000' },
        { name: '삼성전자3', number: '000000' },
        { name: '삼성전자4', number: '000300' },
        { name: '삼성전자5', number: '000000' },
        { name: '삼성전자6', number: '000000' },
        { name: '삼성전자7', number: '005000' },
        { name: '삼성전자8', number: '000000' },
        { name: '삼성전자9', number: '000000' },
        { name: '삼성전자0', number: '000000' }
      ]

      const items = stockItems.map(function (item) {
        return { label: item.name, number: item.number }
      })

      // const allowedChars = /^[a-zA-Z\s]+$/

      let selectedData = null

      autocomplete({
        input: document.getElementById('defaultInput'),
        minLength: 1,
        onSelect: function (item, inputfield) {
          selectedData = item
          inputfield.value = `${item.label}`
          // 선택된 항목과 연결된 번호에 액세스할 수 있습니다.
          console.log('선택된 항목:', item.label, '번호:', item.number)
        },
        fetch: function (text, callback) {
          text = text.toLowerCase().trim()
          callback(items.filter(function (candidate) {
            return (
              candidate.label.toLowerCase().includes(text) || candidate.number.toLowerCase().includes(text)
            )
          }))
        },
        render: function (item, value) {
          const itemElement = document.createElement('div')
          const regexLabel = new RegExp(value, 'gi')
          const regexNumber = new RegExp(value, 'gi')

          // 아이템 라벨에 대한 정규식 매칭을 통해 강조 표시
          const nameLabel = document.createElement('div')
          nameLabel.innerHTML = item.label.replace(regexLabel, match => `<strong>${match}</strong>`)

          // 아이템 번호에 대한 정규식 매칭을 통해 강조 표시
          const numberLabel = document.createElement('div')
          numberLabel.innerHTML = `${item.number.replace(regexNumber, match => `<strong>${match}</strong>`)}`

          // 생성한 span들을 아이템 엘리먼트에 추가
          itemElement.appendChild(nameLabel)
          itemElement.appendChild(numberLabel)

          return itemElement
        },
        emptyMsg: '일치하는 항목이 없습니다',
        customize: function (input, inputRect, container, maxHeight) {
          if (maxHeight < 100) {
            container.style.top = ''
            container.style.bottom = (window.innerHeight - inputRect.bottom + input.offsetHeight) + 'px'
            container.style.maxHeight = '140px'
          }
        }
      })

      document.querySelector('input').focus()
      console.log('Selected item:', selectedData)
    }
  }
}
</script>
