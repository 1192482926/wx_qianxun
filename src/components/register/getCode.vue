<template>
  <a class='getCode'>{{time | change}}</a>
</template>

<script>
import {
  getCode
} from '../../conifg/getData'
  let flag = false
  export default {
    data() {
      return {
        time: '获取验证码',
      }
    },
    props: {
      start: {
        type: Boolean
      },
      phone: {
        type: ''
      }
    },
    watch: {
      start(value, oldvalue) {
        if (value == true) {
          this.countDown()
        }
      }
    },
    methods: {
      countDown() {
        getCode(this.phone).then(res => {
          this.$cookie.set('codeTime', new Date().toString(), {
            path: "/",
            expires: 1
          });
          this.time = 60;
          let time = setInterval(() => {
            this.time--
              if (this.time == 0) {
                this.$emit('countDown')
                this.time = '获取验证码'
                flag = true
                clearInterval(time)
              }
          }, 1000)
        })


      }
    },
    filters: {
      change(value) {
        if (!value) return ""
        if (!isNaN(value)) {
          if (flag == true) {
            return `重新发送${value}S`
          }
          return value + 'S'
        } else {
          return value
        }
      }
    }

  }
</script>

<style lang="scss">
  /* 获取验证码 */

  a {
    color: #0a85dd;
  }

  #app .getCode {
    width: 78px;
    height: 28px;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: inherit;
    letter-spacing: 0px;
    color: #0a85dd;
    position: absolute;
    right: 50px;
    top: 26px;
  }
</style>
