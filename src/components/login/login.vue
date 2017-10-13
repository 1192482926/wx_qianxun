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
                              <input type='text' placeholder='请输入11位手机号' maxlength='11' @focus='inoutFocus($event)'  v-model='phone'>
                              <i class='icon iconfont inconPosition' :class="flag ?  'icon-duigou1' : 'icon-cuowutishi' " ></i>
                              <!-- <i class='icon iconfont icon-cuowutishi'></i> -->
                          </label>
        <label :class="falgArr ? 'red' :''">
                                      <i class='icon iconfont icon-mima'></i>
                                      <input type='password' placeholder='请输入6-18位密码' maxlength='18' ref='password' @focus='inoutFocus($event)' v-model='pass'>
                                      <i class='icon iconfont icon-denglu-buxianshimima' @click='Whether' :class="show ? 'icon-denglu-xianshimima' : 'icon-denglu-buxianshimima' "></i>
                                      <!-- <i class='icon iconfont icon-duigou1'></i> -->
                                      <i class='icon iconfont  inconPosition'  :class=" flagPass ?  'icon-duigou1' : 'icon-cuowutishi' "></i>
                                  </label>
        <el-row class='loginButton login-P5'>
          <el-button type="primary" class='loginB' @click='login'>登录</el-button>
          </el-button>
        </el-row>
        <el-row class='registerButton'>
          <router-link :to="{path:'/register'}">
            <el-button class="loginRegister loginB">新用户注册</el-button>
          </router-link>
          </el-button>
        </el-row>
        <!-- 忘记密码 -->
        <router-link :to="{path:'/findPassword'}">
          <span class="password">
                          忘记密码？
                        </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import md5 from 'js-md5'
  import loginLogo from '../../assets/loginLogo.png'
  import {
    login,
    BooleanLogin
  } from '../../conifg/getData'
  export default {
    name: 'login',
    data() {
      return {
        img: loginLogo,
        falgArr: false, //用来判断如果input没有填完的话，就用label显示红线标识
        flag: false, //成功或失败的状态
        phone: '', //手机号码
        pass: '', //密码
        show: false, //隐藏和显示图标的状态
        flagPass: false,
      };
    },
    watch: {
      phone(val) {
         this.phone = this.phone.replace(/[^0-9]/g, '');
          if (val.length >= 11) {
            this.flag = true;
            BooleanLogin(val).then(res => {
              if (res.code == "000000") {
                this.$message('该手机号未注册');
              }
            })
          } else {
            this.flag = false;
          }

      },
      pass(val) {
        this.pass = this.pass.replace(/[^a-zA-Z1-9]/g, '');
          if (val.length >= 6) {
            this.flagPass = true;
          } else {
            this.flagPass = false;
          }
        }

    },
    mounted() {

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
      },
      login() { //登录

        if (this.phone.length > 0 || this.pass.length > 0) {
          this.falgArr = false;
          this.$cookie.set('phone', this.phone);
          this.$cookie.set('pass', this.pass);
          var ph = this.$cookie.get('phone');
          var pass = this.$cookie.get('pass');
          login(ph, md5(pass)).then(res => {
            if (res.code == "000000") {
              this.$message('登录成功');
              this.$router.push('/');
            }
            console.error(res);
          })
        } else {
          this.$message('请输入手机号码或者密码');
          this.falgArr = true;
          return false;
        }

      }
    }
  };
</script>

<style lang="scss" scoped>
  .login {
    width: 100%;
    height: 100%;
  }

  .loginHeader {
    width: 100%;
    height: 30%;
    padding: 77px 0 0 0;
  }

  .loginHeaderTetile {
    margin: 0 auto;
    width: 80px;
    height: 80px;
    background-image: linear-gradient(53deg, rgba(6, 132, 255, 1) 0%, rgba(49, 231, 235, 1) 100%), linear-gradient( rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
    background-blend-mode: normal, normal;
    box-shadow: 0px 0px 75.2px 4.8px rgba(30, 186, 244, 0.4);
    border-radius: 15px;
  }

  .title {
    height: 70px;
    text-align: center;
    font-family: PingFang-SC-Medium;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 70px;
    letter-spacing: 0px;
    color: #202121;
  }

  .loginContent {
    width: 100%;
    height: auto;
    padding: 5px 0 0 0;
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
    padding: 20px 0 0 0;
  }

  .login-P5 {
    margin-top: 25px;
    // border:1px red solid;
  }

  .registerButton {
    margin: 15px 0 0 0;
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

  .password {
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
    position: fixed;
    bottom: 76px;
  }

  @media (device-height:480px) and (-webkit-min-device-pixel-ratio:2) {
    /* 兼容iphone4/4s */
    .loginHeader[data-v-30454040] {
      width: 100%;
      height: 30%;
      padding: 29px 0 0 0;
    }
    .loginContent {
      width: 100%;
      height: auto;
      padding: 0 0;
    }
    .title {
      height: 60px;
      line-height: 60px;
    }
    .loginHeaderTetile {
      width: 70px;
      height: 70px;
      img {
        padding: 5px;
      }
    }
    .password {
      line-height: 60px;
      position: fixed;
      bottom: 0;
    }
    .loginButton,
    .registerButton {
      margin: 10px 0 0 0;
      width: 100%;
    }
  }

  @media (device-height:568px) and (-webkit-min-device-pixel-ratio:2) {
    /* 兼容iphone5 */
    .loginHeader {
      padding: 60px 0 0 0;
    }
    .loginContent {
      width: 100%;
      height: auto;
      // border:1px red solid;
    }
    .title {
      height: 60px;
      line-height: 60px;
    }
    .password {
      line-height: 60px;
      position: fixed;
      bottom: 0;
    }
    .registerButton {
      margin: 18px 0 0 0;
      width: 100%;
    }
  }

  @media (device-height:667px) and (-webkit-min-device-pixel-ratio:2) {
    /* 兼容iphone6 */
    .class {}
  }

  @media (device-height:736px) and (-webkit-min-device-pixel-ratio:2) {
    /* 兼容iphone6 Plus */
    .loginHeader {
      padding: 77px 0 0 0;
      // border:1px red solid
    }
    .loginContent {
      width: 100%;
      height: auto;
      padding: 5px 0 0 0;
    }
    .password {
      line-height: 60px;
    }
    .registerButton {
      margin: 18px 0 0 0;
      width: 100%;
    }
    .login-P5 {
      margin-top: 32px;
    }
    .password {
      line-height: 150px;
      height: 150px;
      // border:1px red solid;
    }
  }

  @media (min-width: 768px) {
    .password {
      position: fixed;
      bottom: 250px;
    }
  }

  // 登录时判断变量状态
  .icon-duigou1 {
    color: rgba(125, 186, 29, 1);
  }

  .icon-cuowutishi {
    color: red;
  }
</style>
