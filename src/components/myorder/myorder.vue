<template>
  <div class="myorder">
    <!-- 头部 -->
    <div class="background">
    <!-- <el-row>
      <el-col :span="4" class="search-box displayTable">
        <p class="teableCell">
          <i class="icon iconfont icon-fanhui" style="font-size: 20px;" @click='$router.go(-1)'></i>
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
    </el-row> -->
       <!-- 头部 -->
    <el-row class="packageL-top">
      <el-col :span="4" class="search-box displayTable" style='position: fixed;left: 0;height:50px;z-index:99'>
        <p class="teableCell">
         <i class="icon iconfont icon-fanhui" style="font-size: 20px;padding:0 10px;" @click='$router.go(-1)'></i>
        </p>
      </el-col>
      <el-col :span="24" class="health-name displayTable" style='position: fixed;'>
        <el-tabs v-model="activeName" @tab-click="handleClick" class='el-tabs-chongzhi' >
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

<style scoped>
.myorder{
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


</style>
