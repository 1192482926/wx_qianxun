<template>
  <div class='register'>
    <haderAll msg='新用户注册'></haderAll>
    <div class='registerInput'>
      <label :class="falgArr ? 'red' :''">
            <i class='icon iconfont icon-yonghudenglu'></i>
            <input type='text' placeholder='请输入用户名' maxlength='10' v-model='loginName' @focus='inoutFocus($event)'>
            <i class='icon iconfont inconPosition' :class="flag ?  'icon-duigou1' : 'icon-cuowutishi' " ></i>
            <!-- <i class='icon iconfont icon-cuowutishi'></i> -->
        </label>
      <label :class="falgArr ? 'red' :''">
          <i class='icon iconfont icon-shouji'></i>
          <input type='text' placeholder='请输入手机号码' maxlength='11' v-model='phone'  @focus='inoutFocus($event)'>
          <!-- <i class='icon iconfont icon-duigou1'></i> -->
          <i class='icon iconfont  inconPosition'  :class=" flagPhone ?  'icon-duigou1' : 'icon-cuowutishi' "></i>
      </label>
      <label :class="falgArr ? 'red' :''">
        <i class='icon iconfont icon-mima'></i>
        <input type='password' placeholder='请输入密码' maxlength='16' ref='password' @focus='inoutFocus($event)' v-model='pass'>
        <i class='icon iconfont icon-denglu-buxianshimima' @click='Whether' :class="show ? 'icon-denglu-xianshimima' : 'icon-denglu-buxianshimima' "></i>
        <!-- <i class='icon iconfont icon-duigou1'></i> -->
        <i class='icon iconfont  inconPosition'  :class=" flagPass ?  'icon-duigou1' : 'icon-cuowutishi' "></i>
    </label>
      <label>
        <i class='icon iconfont icon-yanzhengmima'></i>
        <input type='text' placeholder='请输入验证码' maxlength='6'  @focus='inoutFocus($event)' v-model='code'>
   <!-- <a class='getCode' @click='getCode'>获取验证码</a> -->
  <getCodeZ :start='start' :phone='this.phone'   @countDown ='start=false' @click.native='sendCode'></getCodeZ>
                              <!-- <i class='icon iconfont icon-duigou1'></i> -->
                              <i class='icon iconfont  inconPosition'  :class=" flagcode ?  'icon-duigou1' : 'icon-cuowutishi' "></i>
                          </label>


      <el-row class='loginButton'>
        <el-button type="primary" class='loginS' @click='registerL'>注册</el-button>
        <router-link :to="{path:'/login'}">
          <el-button class="registerLogin loginS">已有账号，立即登录</el-button>
        </router-link>
        </el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
  import '../../conifg/rem'
  import md5 from 'js-md5'
  import {
    BooleanLogin,
    VerificationCode,
    register
  } from '../../conifg/getData'
  import haderAll from '../headerAll/headerAll'
  import getCodeZ from './getCode'
  export default {
    name: 'register',
    data() {
      return {
        input3: '',
        show: false, //隐藏和显示图标的状态
        loginName: '', //账户名
        flag: false, //成功或失败的状态
        phone: '', //手机号
        flagPhone: false,
        code: '', //验证码
        flagcode: false,
        pass: '',
        flagPass: false,
        codeFalg: false, //用老判断是否获取验证码
        falgArr: false, //用来判断如果input没有填完的话，就用label显示红线标识，
        timer: null,
        count: 60,
        start: false

      }
    },
    watch: {
      loginName() { //账号
        this.loginName = this.loginName.replace(/[^a-zA-Z\u4E00-\u9FA5]/g, '');
        if (this.loginName.length >= 2 && this.loginName.length <= 10) {
          this.flag = true;
          this.codeFalg = true;
        } else {
          this.flag = false;
          this.codeFalg = false;
        }
      },

      phone(val) { //手机号
        this.phone = this.phone.replace(/[^0-9]/g, '');
        if (this.phone.length >= 11 && this.phone.length <= 11) {
          this.codeFalg = true;
          BooleanLogin(val).then(res => {
            if (res.code == '000000') {
              this.flagPhone = true;
            } else {
              this.$message('已经注册了');
              this.flagPhone = false;
            }
          })
        } else {
          this.flagPhone = false;
          this.codeFalg = false;
        }
      }, //验证码
      code() {
        this.code = this.code.replace(/[^0-9]/g, '');
        if (this.code.length >= 6 && this.code.length <= 6) {
          this.flagcode = true;
          VerificationCode(this.code).then(res => {
            this.$message(res.message);
          })
        } else {
          this.flagcode = false;
        }
      }, //密码
      pass() {
        this.pass = this.pass.replace(/[^a-zA-Z1-9]/g, '');
        if (this.pass.length >= 6 && this.pass.length <= 16) {
          this.flagPass = true;
          this.codeFalg = true;
        } else {
          this.flagPass = false;
          this.codeFalg = false;
        }
      }
    },
    methods: {
      //注册
      registerL() {
        if (this.phone.length > 0 || this.pass.length > 0 || this.code.length > 0) {
          this.falgArr = false;
          register(this.phone, md5(this.pass), this.code).then(res => {
            console.log(res);
            if (res.code == '000000') {
              this.$router.push('/login');
            }
          })
        } else {
          this.$message('请填写资料');
          this.falgArr = true;
          return false;
        }
      },
      //获取验证码
      sendCode(value) {
        if (this.phone.length > 0 || this.pass.length > 0  ) {
          //前面发送ajax请求成功之后调用this.start = true开始短信倒计时
          this.start = true
          this.falgArr = false;
        } else {
          this.$message('请填写资料');
          this.falgArr = true;
          return false;
        }
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
      }, //聚焦的时候就出现有颜色的边框
      inoutFocus(event) {
        var oUl = document.getElementsByTagName("label");
        var i = 0;
        for (i = 0; i < oUl.length; i++) {
          oUl[i].style.borderBottom = "1px #ccc  solid";
        }
        event.target.parentNode.style.borderBottom = "1px #17aae7 solid";
        event.target.parentNode.style.transitionTimingFunction = 'width 2s';
      }
    },
    components: {
      haderAll,
      getCodeZ
    }
  }
</script>

<style lang='scss' scoped>
  .register {
    width: 100%;
    height: 100%;
  }

  .registerInput {
    width: 100%;
    height: auto;
    padding: 15px 0 0 0;
  }

  .registerInput label {
    width: 80%;
    display: block;
    border-bottom: 1px rgba(215, 215, 215, 1) solid;
    padding: 20px 0 12px 0;
    margin: 0 auto;
  }

  .registerInput input {
    padding: 5px 10px 0 10px;
    border: none;
    outline: none;
    font-size: 14px;
  }

  .icon-duigou1 {
    color: rgba(125, 186, 29, 1);
  }

  .icon-cuowutishi {
    color: red;
  }

  .loginButton {
    margin: 40px 0 0 0;
  }

  #app .loginS {
    margin: 10px auto;
    width: 80%;
    border-radius: 45px 45px 45px 45px;
    height: 45px;
    display: block;
  }

  .registerLogin {
    background-color: rgba(255, 255, 255, 1);
    border: solid 1px rgba(215, 215, 215, 1);
  }

  .registerLogin :hover,
  .registerLogin .focus,
  .registerLogin .active,
  .registerLogin .visited {
    color: none;
    border-color: none;
  }

  .el-button+.el-button {
    margin-left: auto;
  }

  .icon-denglu-xianshimima,
  .icon-denglu-buxianshimima {
    margin-left: -9px;
  }


  /* 判断的图标  */

  #app .inconPosition {
    position: absolute;
    right: 0;
  }

  label {
    position: relative;
  }


  /* label */

  #app .red {
    border-bottom: 1px red solid!important;
  }


  /* iphone4 */

  @media (device-height:480px) and (-webkit-min-device-pixel-ratio:2) {
    .headerAll {
      padding: 20px 0 0 0;
      /* border:1px red solid; */
    }
    .registerInput label {
      padding: 12px 0 12px 0;
    }
    .loginButton {
      margin: 25px 0 0 0;
    }
    .getCode {
      width: 78px;
      position: absolute;
      right: 32px;
      top: 16px;
    }
    .registerInput {
      padding: 0px;
    }
    .loginButton {
      margin: 20px 0 0 0;
    }
  }

  @media (device-height:568px) and (-webkit-min-device-pixel-ratio:2) {
    .registerInput {
      padding: 0px;
    }
    .loginButton {
      margin: 20px 0 0 0;
    }
    .getCode {
      width: 78px;
      position: absolute;
      right: 30px;
      top: 26px;
    }
  }
</style>
