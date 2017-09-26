
<template>
  <div class="login">
    <div class='loginHeader'>
      <div class='loginHeaderTetile'>
        <img :src='img'>
      </div>
      <div class='title'>
        欢迎登录芊浔商城
      </div>
      <div class='loginContent'>
        <label :class="falgArr ? 'red' :''">
              <i class='icon iconfont icon-shouji'></i>
              <input type='text' placeholder='请输入用户名' maxlength='10' @focus='inoutFocus($event)'>
              <i class='icon iconfont inconPosition' :class="flag ?  'icon-duigou1' : 'icon-cuowutishi' " ></i>
              <!-- <i class='icon iconfont icon-cuowutishi'></i> -->
          </label>
        <label :class="falgArr ? 'red' :''">
                      <i class='icon iconfont icon-mima'></i>
                      <input type='password' placeholder='请输入密码' maxlength='16' ref='password' @focus='inoutFocus($event)' v-model='pass'>
                      <i class='icon iconfont icon-denglu-buxianshimima' @click='Whether' :class="show ? 'icon-denglu-xianshimima' : 'icon-denglu-buxianshimima' "></i>
                      <!-- <i class='icon iconfont icon-duigou1'></i> -->
                      <i class='icon iconfont  inconPosition'  :class=" flagPass ?  'icon-duigou1' : 'icon-cuowutishi' "></i>
                  </label>
        <el-row class='loginButton'>
          <el-button type="primary" class='loginB'>登录</el-button>
          <router-link :to="{path:'/register'}">
            <el-button class="loginRegister loginB">已有账号，立即登录</el-button>
          </router-link>
          </el-button>
        </el-row>
<!-- 忘记密码 -->
    <router-link :to="{path:'/'}">
        <span class="password" >
          忘记密码？
        </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import loginLogo from '../../assets/loginLogo.png'
  export default {
    name: 'login',
    data() {
      return {
        img: loginLogo,
        falgArr: false, //用来判断如果input没有填完的话，就用label显示红线标识
        flag: false, //成功或失败的状态
        pass: '',
        show: false, //隐藏和显示图标的状态
        flagPass: false,
      };
    },
    methods: {
      inoutFocus(event) {
        var oUl = document.getElementsByTagName("label");
        var i = 0;
        for (i = 0; i < oUl.length; i++) {
          oUl[i].style.borderBottom = "1px #ccc  solid";
        }
        event.target.parentNode.style.borderBottom = "1px #17aae7 solid";
        event.target.parentNode.style.transitionTimingFunction = 'width 2s';
      },
      Whether() { //显示或者隐藏密码
        let inputWhether = this.$refs.password.type;
        if (inputWhether == 'password') {
          this.$refs.password.type = 'text';
          this.show = true;
          console.log(inputWhether);
        } else {
          this.$refs.password.type = 'password';
          this.show = false;
        }
      }
    }
  };
</script>

<style>
  .loginHeader {
    width: 100%;
    height: 100%;
    padding: 70px 0 0 0;
  }
  .loginHeaderTetile {
    margin: 0 auto;
    width: 80px;
    height: 80px;
    background-image: linear-gradient(53deg, rgba(6, 132, 255, 1) 0%, rgba(49, 231, 235, 1) 100%), linear-gradient( rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
    background-blend-mode: normal, normal;
    box-shadow: 0px 0px 75.2px 4.8px rgba(30, 186, 244, 0.4);
    border-radius: 30px 30px 30px 30px;
  }
  .title {
    height: 80px;
    text-align: center;
    font-family: PingFang-SC-Medium;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 80px;
    letter-spacing: 0px;
    color: #202121;
  }
  .loginContent {
    width: 100%;
    height: auto;
    padding: 50px 0 0 0;
  }
  .loginContent label {
    width: 80%;
    display: block;
    border-bottom: 1px rgba(215, 215, 215, 1) solid;
    padding: 20px 0 12px 0;
    margin: 0 auto;
  }
  .loginContent input {
    padding: 5px 10px 0 10px;
    border: none;
    outline: none;
    font-size: 14px;
  }
  /* label */
  #app .red {
    border-bottom: 1px red solid!important;
  }
  #app .inconPosition {
    position: absolute;
    right: 0;
  }
  label {
    position: relative;
  }
  /* 登录 */
  .loginButton {
    margin: 30px 0 0 0;
    width: 100%;
  }
  .loginB {
    margin: 0 auto;
    width: 80%;
    border-radius: 45px 45px 45px 45px;
    height: 45px;
    display: block;
  }
  /* 新用户注册 */
  .loginRegister {
    margin: 0 auto;
    width: 80%;
    border-radius: 45px 45px 45px 45px;
    height: 45px;
    /* display: block; */
  }
  /* 忘记密码 */
  .password{
     width: 100%;
    height: 62px;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 92px;
    letter-spacing: 0px;
    color: #202121;
    text-align: center;
    display: flow-root;
  }
</style>
