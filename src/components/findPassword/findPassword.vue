<template>
<div class='Password'>
<haderAll msg='找回密码'></haderAll>
  <div class='findPassword'>
    <label :class="falgArr ? 'red' :''">
          <i class='icon iconfont icon-shouji'></i>
          <input type='text' placeholder='请输入用户名' maxlength='10' @focus='inoutFocus($event)'>
          <i class='icon iconfont inconPosition' :class="flag ?  'icon-duigou1' : 'icon-cuowutishi' " ></i>
          <!-- <i class='icon iconfont icon-cuowutishi'></i> -->
      </label>
       <label :class="falgArr ? 'red' :''">
          <i class='icon iconfont icon-yanzhengmima'></i>
          <input type='text' placeholder='请输入用户名' maxlength='10' @focus='inoutFocus($event)'>
          <i class='icon iconfont inconPosition' :class="flag ?  'icon-duigou1' : 'icon-cuowutishi' " ></i>
          <!-- <i class='icon iconfont icon-cuowutishi'></i> -->
      </label>
       <label :class="falgArr ? 'red' :''">
          <i class='icon iconfont icon-mima'></i>
          <input type='text' placeholder='请输入用户名' maxlength='10' @focus='inoutFocus($event)'>
          <i class='icon iconfont inconPosition' :class="flag ?  'icon-duigou1' : 'icon-cuowutishi' " ></i>
          <!-- <i class='icon iconfont icon-cuowutishi'></i> -->
      </label>
       <label :class="falgArr ? 'red' :''">
          <i class='icon iconfont icon-mima'></i>
          <input type='text' placeholder='请输入用户名' maxlength='10' @focus='inoutFocus($event)'>
          <i class='icon iconfont inconPosition' :class="flag ?  'icon-duigou1' : 'icon-cuowutishi' " ></i>
          <!-- <i class='icon iconfont icon-cuowutishi'></i> -->
      </label>
       <el-button type="primary" class='next'>下一步</el-button>
      </div>
</div>
</template>
<script>
import haderAll from '../headerAll/headerAll'
export default{
  name:'findPasswore',
  data(){
    return{
    falgArr: false, //用来判断如果input没有填完的话，就用label显示红线标识
     flag: false, //成功或失败的状态
    }
  },
  components:{
    haderAll
  },
  methods:{
     inoutFocus(event) {
      var oUl = document.getElementsByTagName("label");
      var i = 0;
      for (i = 0; i < oUl.length; i++) {
        oUl[i].style.borderBottom = "1px #ccc  solid";
      }
      event.target.parentNode.style.borderBottom = "1px #17aae7 solid";
      event.target.parentNode.style.transitionTimingFunction = 'width 2s';
    }
  }
}
</script>
<style>
.Password{
  padding-top: 40px;
  height: 100%;
}

.findPassword {
  width: 100%;
  height: auto;
  padding: 100px 0 0 0;
}

.findPassword label {
  width: 80%;
  display: block;
  border-bottom: 1px rgba(215, 215, 215, 1) solid;
  padding: 20px 0 12px 0;
  margin: 0 auto;
}

.findPassword input {
  padding: 5px 10px 0 10px;
  border: none;
  outline: none;
  font-size: 14px;
}
/* 图标显示是正确，代表输入正确 */
.icon-duigou1 {
  color: rgba(125, 186, 29, 1);
}
/* 图标显示是正确，代表输错误 */
.icon-cuowutishi {
  color: red;
}
/* button */
.loginButton {
  margin: 30px 0 0 0;
}
/* 下一步样式 */
#app .next {
  margin: 50px auto;
  width: 80%;
  border-radius: 45px 45px 45px 45px;
  height: 45px;
  display: block;
}

/* element 样式  我重置 */
.el-button+.el-button {
  margin-left: auto;
}

/* 判断的图标  */

#app .inconPosition {
  position: absolute;
  right: 0;
}

label {
  position: relative;
}


/* 获取验证码 */

.getCode {
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
  top: 29px;
}


/* label */
/* 这个应该是图标错误的颜色 */
#app .red {
  border-bottom: 1px red solid!important;
}
</style>
