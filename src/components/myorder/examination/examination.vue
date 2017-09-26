<template>
<div class='examination'>
  <div class='packIF'>
    <el-row :gutter="24" class='marginAll'>
      <el-col :span="5" class='paddingAll'>
        <div class="grid-content bg-purple on">全部 </div>
      </el-col>
      <el-col :span="5" class='paddingAll'>
        <div class="grid-content bg-purple">待付款 </div>
      </el-col>
      <el-col :span="5" class='paddingAll'>
        <div class="grid-content bg-purple">待体检 </div>
      </el-col>
      <el-col :span="5" class='paddingAll'>
        <div class="grid-content bg-purple">已完成 </div>
      </el-col>
      <el-col :span="5" class='paddingAll'>
        <div class="grid-content bg-purple">退款 </div>
      </el-col>
    </el-row>
  </div>
  <examinationList></examinationList>
  </div>
</template>

<script>
import  examinationList from './examinationList'
  export default {
    name: 'examination',
     components: {
      examinationList
    }
  }
</script>

<style>
  .el-col-5 {
    width: 19.83333%;
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
    height: 41px;
    line-height: 3;
    background: #fff;
    border-bottom: 1px #f0f1f1 solid;
    color: #202121;
  }
  /* 选中颜色 */
  .on {
    color: #009ee2;
  }
</style>
