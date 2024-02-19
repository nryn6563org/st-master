<template>
  <div class="infoList">
    <div>
      <div class="bullet">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <g filter="url(#filter0_d_5_1853)">
            <circle cx="20" cy="18" r="15" fill="#FFE600" />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 11.5837L22.6667 12.8867V15.3333H25.1133L26.4163 14H25C24.4477 14 24 13.5523 24 13V11.5837ZM23.6344 10.0767C24.2676 9.45784 25.3333 9.90647 25.3333 10.7918V12.6667H27.2082C28.0935 12.6667 28.5422 13.7324 27.9234 14.3656L25.9688 16.3656C25.7807 16.5581 25.5228 16.6667 25.2536 16.6667H22.3333C22.3147 16.6667 22.2961 16.6662 22.2777 16.6651L20.4714 18.4714C20.2111 18.7318 19.7889 18.7318 19.5286 18.4714C19.2682 18.2111 19.2682 17.7889 19.5286 17.5286L21.3349 15.7223C21.3338 15.7039 21.3333 15.6853 21.3333 15.6667V12.7464C21.3333 12.4772 21.4419 12.2194 21.6344 12.0312L23.6344 10.0767ZM20 11.3333C16.3181 11.3333 13.3333 14.3181 13.3333 18C13.3333 21.6819 16.3181 24.6667 20 24.6667C23.6819 24.6667 26.6667 21.6819 26.6667 18C26.6667 17.6318 26.9651 17.3333 27.3333 17.3333C27.7015 17.3333 28 17.6318 28 18C28 22.4183 24.4183 26 20 26C15.5817 26 12 22.4183 12 18C12 13.5817 15.5817 10 20 10C20.3682 10 20.6667 10.2985 20.6667 10.6667C20.6667 11.0349 20.3682 11.3333 20 11.3333ZM20 14C17.7909 14 16 15.7909 16 18C16 20.2091 17.7909 22 20 22C22.2091 22 24 20.2091 24 18C24 17.6318 24.2985 17.3333 24.6667 17.3333C25.0349 17.3333 25.3333 17.6318 25.3333 18C25.3333 20.9455 22.9455 23.3333 20 23.3333C17.0545 23.3333 14.6667 20.9455 14.6667 18C14.6667 15.0545 17.0545 12.6667 20 12.6667C20.3682 12.6667 20.6667 12.9651 20.6667 13.3333C20.6667 13.7015 20.3682 14 20 14Z"
            fill="#0C0C20"
          />
          <defs>
            <filter
              id="filter0_d_5_1853"
              x="0"
              y="0"
              width="40"
              height="40"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_5_1853"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_5_1853"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div class="cont">
        최근 1년 적중률은&nbsp;
        <span
          ><em>{{ accuracy }}</em
          >%</span
        >입니다.
      </div>
    </div>
    <!-- 종목정보-1년적중률 -->

    <div>
      <div class="bullet">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <g filter="url(#filter0_d_5_1859)">
            <circle cx="20" cy="18" r="15" fill="#FFE600" />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.6 12.4C21.6 11.0745 22.6745 10 24 10H25.6C26.9255 10 28 11.0745 28 12.4V20.4C28 21.7255 26.9255 22.8 25.6 22.8H14.4C13.0745 22.8 12 21.7255 12 20.4V19.6C12 18.2745 13.0745 17.2 14.4 17.2H16C16.2805 17.2 16.5498 17.2481 16.8 17.3366V16.4C16.8 15.0745 17.8745 14 19.2 14H20.8C21.0805 14 21.3498 14.0481 21.6 14.1366V12.4ZM23.2 21.2H25.6C26.0418 21.2 26.4 20.8418 26.4 20.4V12.4C26.4 11.9582 26.0418 11.6 25.6 11.6H24C23.5582 11.6 23.2 11.9582 23.2 12.4V21.2ZM21.6 21.2V16.4C21.6 15.9582 21.2418 15.6 20.8 15.6H19.2C18.7582 15.6 18.4 15.9582 18.4 16.4V21.2H21.6ZM16.8 21.2V19.6C16.8 19.1582 16.4418 18.8 16 18.8H14.4C13.9582 18.8 13.6 19.1582 13.6 19.6V20.4C13.6 20.8418 13.9582 21.2 14.4 21.2H16.8ZM12 25.2C12 24.7582 12.3582 24.4 12.8 24.4H27.2V26H12.8C12.3582 26 12 25.6418 12 25.2Z"
            fill="#0C0C20"
          />
          <defs>
            <filter
              id="filter0_d_5_1859"
              x="0"
              y="0"
              width="40"
              height="40"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_5_1859"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_5_1859"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div class="cont">
        전체 기간 중 가장 높은 수익률은&nbsp;
        <span
          >+<em>{{ highRate }}</em
          >%</span
        >입니다.
      </div>
    </div>
    <!-- 종목정보-가장높은수익률 -->

    <div>
      <div class="bullet">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <g filter="url(#filter0_d_5_1866)">
            <circle cx="20" cy="18" r="15" fill="#FFE600" />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.36 11.6C18.1747 10.6871 17.3676 10 16.4 10C15.4281 10 14.6181 10.6932 14.4376 11.6122C14.3703 11.6154 14.3058 11.6194 14.244 11.6245C13.9277 11.6503 13.6131 11.7073 13.3104 11.8616C12.8588 12.0917 12.4917 12.4588 12.2616 12.9104C12.1074 13.2131 12.0503 13.5277 12.0245 13.844C12 14.1436 12 14.5074 12 14.9292V22.6708C12 23.0926 12 23.4564 12.0245 23.756C12.0503 24.0723 12.1074 24.3869 12.2616 24.6896C12.4917 25.1412 12.8588 25.5083 13.3104 25.7384C13.6131 25.8927 13.9277 25.9497 14.244 25.9755C14.5436 26 14.9074 26 15.3291 26H17.6C18.0418 26 18.4 25.6418 18.4 25.2C18.4 24.7582 18.0418 24.4 17.6 24.4H15.36C14.8988 24.4 14.6009 24.3994 14.3743 24.3809C14.1569 24.3631 14.0764 24.333 14.0368 24.3128C13.8863 24.2361 13.7639 24.1137 13.6872 23.9632C13.667 23.9236 13.6369 23.8431 13.6191 23.6257C13.6006 23.3991 13.6 23.1012 13.6 22.64V14.96C13.6 14.4988 13.6006 14.2009 13.6191 13.9743C13.6369 13.7569 13.667 13.6764 13.6872 13.6368C13.7639 13.4863 13.8863 13.3639 14.0368 13.2872C14.0764 13.267 14.1569 13.2369 14.3743 13.2191C14.6009 13.2006 14.8988 13.2 15.36 13.2H24.64C25.1012 13.2 25.3991 13.2006 25.6257 13.2191C25.8431 13.2369 25.9236 13.267 25.9632 13.2872C26.1137 13.3639 26.2361 13.4863 26.3128 13.6368C26.333 13.6764 26.3631 13.7569 26.3809 13.9743C26.3994 14.2009 26.4 14.4988 26.4 14.96V17.2C26.4 17.6418 26.7582 18 27.2 18C27.6418 18 28 17.6418 28 17.2V14.9291C28 14.5074 28 14.1436 27.9755 13.844C27.9497 13.5277 27.8927 13.2131 27.7384 12.9104C27.5083 12.4588 27.1412 12.0917 26.6896 11.8616C26.3869 11.7073 26.0723 11.6503 25.756 11.6245C25.6942 11.6194 25.6297 11.6154 25.5624 11.6122C25.3819 10.6932 24.5719 10 23.6 10C22.6324 10 21.8253 10.6871 21.64 11.6H18.36ZM24 18.8C24.4418 18.8 24.8 19.1582 24.8 19.6V25.2C24.8 25.6418 24.4418 26 24 26C23.5582 26 23.2 25.6418 23.2 25.2V19.6C23.2 19.1582 23.5582 18.8 24 18.8ZM20.8 21.2C21.2418 21.2 21.6 21.5582 21.6 22V25.2C21.6 25.6418 21.2418 26 20.8 26C20.3582 26 20 25.6418 20 25.2V22C20 21.5582 20.3582 21.2 20.8 21.2ZM27.2 21.2C27.6418 21.2 28 21.5582 28 22V25.2C28 25.6418 27.6418 26 27.2 26C26.7582 26 26.4 25.6418 26.4 25.2V22C26.4 21.5582 26.7582 21.2 27.2 21.2Z"
            fill="#0C0C20"
          />
          <defs>
            <filter
              id="filter0_d_5_1866"
              x="0"
              y="0"
              width="40"
              height="40"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_5_1866"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_5_1866"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div class="cont">
        전체 기간 중 동안 누적 수익률은&nbsp;
        <span
          >+<em>{{ accumulate }}</em
          >%</span
        >입니다.
      </div>
    </div>
    <!-- 종목정보-누적수익률 -->
  </div>
</template>

<script>
export default {
  props: {
    accuracy: Number,
    highRate: Number,
    accumulate: Number
  }
}
</script>
<style scoped>
</style>
