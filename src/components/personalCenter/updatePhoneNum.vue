<template>
  <div class="Globals">
    <!-- 头部 -->
    <div class="health-top">
      <el-row>
        <el-col :span="4" class="search-box displayTable">
          <p class="teableCell">
            <i class="icon iconfont icon-fanhui" style="font-size: 20px;" @click="$router.go(-1)"></i>
          </p>
        </el-col>
        <el-col :span="16" class="health-name displayTable">
          <span class="teableCell">更改手机号</span>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </div>
    <div class="updatePhoneNum-box">
      <div class="userInfo-list mTop">
        <input type="text" placeholder="新手机号" class="block" maxlength='11' v-model='newPhone' />
      </div>
      <div class="userInfo-list" style='position: relative;'>
        <input type="text" placeholder="验证码" maxlength='6' v-model='code' />
        <!-- <input type="button" value="获取验证码" /> -->
        <getCodeZ :start='start' :phone='this.newPhone' @countDown='start=false' @click.native='sendCode'></getCodeZ>
      </div>
      <div class="sure" @click='Sure'>确定</div>
    </div>
  </div>
</template>

<script>
  import {
    revisePhone,
    BooleanLogin,
    VerificationCode
  } from '../../conifg/getData'
  import getCodeZ from '../register/getCode'
  export default {
    data() {
      return {
        newPhone: '',
        code: '',
        start: false,
        oldPhone: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).phone : '',
        phoneFlag: false,
      }
    },
    watch: {
      newPhone(val) {
        this.newPhone = this.newPhone.replace(/[^0-9]/g, '');
        if (val.length >= 11) {
          if (val === this.oldPhone) {
            this.$message("修改的手机号与原手机号不能相同");
            return false;
          } else {
            BooleanLogin(val).then(res => {
              if (res.code != "000000") {
                this.$message('该手机号已注册');
                this.phoneFlag = true;
              }
            })
          }
        }
      },
      code(val) {
        this.code = this.code.replace(/[^0-9]/g, '');
        if (this.code.length >= 6 && this.code.length <= 6) {
          VerificationCode(this.code).then(res => {
            this.$message(res.message);
          })
        }
      }
    },
    methods: {
      Sure() {
        if (this.newPhone.length > 0) {
          revisePhone(this.newPhone, this.code).then(res => {
            console.log(res);
            if(res.code =='000000'){
            var phoneInfo = JSON.parse(sessionStorage.getItem("user"));
            phoneInfo.phone = that.inpNum;
            this.$router.go(-1);
            }
          })
        } else {
          this.$message('请填写资料');
        }

      },
      //获取验证码
      sendCode(value) {
        if (!this.phoneFlag) {
          if (this.newPhone.length > 0) {
            //前面发送ajax请求成功之后调用this.start = true开始短信倒计时
            this.start = true
            // this.falgArr = false;
          } else {
            this.$message('请填写资料');
            // this.falgArr = true;
            return false;
          }
        } else {
          this.$message('该手机号已注册');
          this.phoneFlag = false;
          this.start = false
        }

      },
    },
    components: {
      getCodeZ
    }
  }
</script>

<style scoped>
  .Globals {
    background: rgb(240, 241, 241);
  }


  /* 本页内容包  .updatePhoneNum-box */

  .updatePhoneNum-box {
    font-size: 14px;
  }

  .updatePhoneNum-box .mTop {
    margin-top: 10px;
  }

  .updatePhoneNum-box .userInfo-list {
    background: #FFFFFF;
    font-size: 16px;
    border-bottom: 1px solid #F0F1F1;
    padding: 15px 4%;
    font-size: 14px;
  }

  .updatePhoneNum-box .userInfo-list input[type=text] {
    height: 25px;
    border: none;
  }

  .updatePhoneNum-box .userInfo-list input[type=button] {
    height: 25px;
    float: right;
    padding: 0 10px;
    border: 1px solid #ccc;
    background: #FFFFFF;
    border-radius: 6px;
  }

  .updatePhoneNum-box .userInfo-list .block {
    width: 100%;
  }

  .updatePhoneNum-box .sure {
    margin: 40px auto;
    width: 200px;
    color: #FFFFFF;
    display: block;
    text-align: center;
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    background: #0B90FD;
    border-radius: 6px;
    background: -webkit-gradient(linear, left top, right top, from(#0B90FD), to(#58E5F5));
    background: linear-gradient(to right, #0B90FD, #58E5F5);
  }
</style>
