<template>
  <div class='product'>
    <div class='packIF'>
      <el-row :gutter="20" class='marginAll'>
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
  .el-row {
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
  .packIF {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
</style>
