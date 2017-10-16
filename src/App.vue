<template>
  <div id="app" :style="$route.meta.me? 'height: 100%' : ''">
    <router-view></router-view>
  </div>
</template>

<script>
import x_common from '../src/assets/css/x_common.css'
import f_common from '../src/assets/css/f_common.css'
import elem_comm from '../src/assets/css/elemCss/elem_comm.css' 
export default {
  name: 'app'
}
</script>

<style>
#app .el-tabs__nav {
    margin-left: 22%;
}


/* active */

.el-tabs__item.is-active {
    color: #202121;
}

.el-tabs__active-bar {
    position: absolute;
    bottom: 0;
    left: 28px;
    width: 27px!important;
    height: 3px;
    background-color: #20a0ff;
    z-index: 1;
    transition: transform .3s cubic-bezier(.645, .045, .355, 1);
    list-style: none;
}


/* 先这样写 */

.el-tab-pane {
    position: absolute;
    width: 100%;

    left: 0;
}


/* 重置element样式 */

.el-tabs__item {
    /* padding: 4px 29px!important; */
    height: 42px;
    box-sizing: border-box;
    line-height: 2.8;
    display: inline-block;
    list-style: none;
    font-size: 16px;
    position: relative;
    color: #a7acaf;
}

.el-tabs__content {
    overflow: inherit!important;
    position: static!important;
}

.el-tabs__active-bar {
    position: absolute;
    bottom: 0;
    left: 41px;
    background-color: #1bb3f5;
}


/* 订单需要 */

.myorder .el-tab-pane {
    background: #f0f1f1;
    position: absolute;
    width: 100%;
   /*  border: 1px #f0f1f1 solid; */
    left: 0;
}
.el-tab-pane,.el-tabs__header{
border:none;
}
.myorder .el-tabs__header{
margin: 0 0 2px;
}

/***
套餐机构的tab头部
**/
 .el-tabs__nav{
  width:82%;
}
 .el-tabs__item{
  width:41%;
}
</style>

