<template>
  <div class="myorder">
    <!-- 头部 -->
    <div class="background">
    <el-row   >
      <el-col :span="4" class="search-box displayTable">
        <p class="teableCell">
          <i class="icon iconfont icon-fanhui" style="font-size: 20px;"></i>
        </p>
      </el-col>
      <el-col :span="16" class="health-name displayTable">
        <el-tabs v-model="activeName" @tab-click="handleClick" class='el-tabs-chongzhi'>
          <el-tab-pane label="体检订单" name="first">
            <examination></examination>
          </el-tab-pane>
          <el-tab-pane label="产品订单" name="second">
            <product></product>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <!-- 内容 -->
    </div>
  </div>
</template>

<script>
  import examination from './examination/examination'
    import product from './product/product'
  export default {
    name: 'myorder',
    data() {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
      examination,product
    }
  }
</script>

<style>
body{
  width:100%;
  height:100%;
  background:#f0f1f1;
}
/* myorder */
.myorder{

width:100%;
height:auto;
}
.el-row{
  height:100%;
}
.search-box{
  height:100%;
}
.background{
  background:#fff;
  height:43px;
    border-bottom:1px #f0f1f1 solid;
}
  i {
    font-style: normal;
  }
  img {
    box-sizing: border-box;
  }
  .el-row {
    margin-bottom: 0;
  }
  /* 设置默认值  */
  .Globals {}
  .health-top {}
  .health-top .health-name {}
  .health-top .search-box,
  .health-top .health-name,
  .health-top .viewtype-switch {}
  /*垂直居中*/
  .displayTable {
    display: table;
  }
  .displayTable .teableCell {
    display: table-cell;
    vertical-align: middle;
  }
  /*样式一*/
  .healthProduct-box {
    position: relative;
    padding: 1% 4%;
    height: auto;
    margin-bottom: 100px;
  }
  /*内容*/
  .healthProduct-box .hp-box-list {
    width: 49%;
    float: left;
    overflow: hidden;
    padding-top: 2%;
  }
  .healthProduct-box .hp-box-list:nth-last-of-type(2n-1) {
    margin-left: 2%;
  }
  .healthProduct-box .hp-box-list:nth-last-of-type(2n) {
    margin-left: 0;
  }
  /* 先这样写 */
  .el-tab-pane {
    position: absolute;
    width: 100%;
    border: 1px #f0f1f1 solid;
    left: 0;
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
    transition: transform .3s cubic-bezier(.645,.045,.355,1);
    list-style: none;
}
  /* 重置element样式 */
  .el-tabs__item {
    padding: 4px 29px!important;
    height: 42px;
    box-sizing: border-box;
    line-height: 2;
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
   .el-tabs-chongzhi .el-tabs__header {
   border-bottom:none!important;
   margin:0;
  }
  .el-tabs__active-bar{
        position: absolute;
    bottom: 0;
    left: 41px;
    background-color: #1bb3f5;
}
</style>
