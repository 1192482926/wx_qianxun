<template>
  <div class='product'>
    <div class='packIFTab'>
      <el-row :gutter="20" class='marginAll textAlign'>
        <el-col :span="6" class='paddingAll'>
          <div class="grid-content bg-purple on">全部 </div>
        </el-col>
        <el-col :span="6" class='paddingAll'>
          <div class="grid-content bg-purple">待付款 </div>
        </el-col>
        <el-col :span="6" class='paddingAll'>
          <div class="grid-content bg-purple">已完成 </div>
        </el-col>
        <el-col :span="6" class='paddingAll'>
          <div class="grid-content bg-purple">退款 </div>
        </el-col>
      </el-row>
    </div>
    <productList></productList>
  </div>
</template>

<script>
import productList from './productList'
  export default {
    name: 'product',
    components:{
      productList
    }
  }
</script>

<style>
  /* product */
  .product {
    width: 100%;
    height: 100%;
  }
  .textAlign {
    margin-bottom: 20px;
    text-align: center;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .el-tabs__content {
    overflow: inherit;
    position: relative;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  /* packIF */
  .packIFTab {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
        height: 41px;
    line-height: 3;
    background: #fff;
    border-bottom: 1px #f0f1f1 solid;
    color: #202121;
  }
</style>
