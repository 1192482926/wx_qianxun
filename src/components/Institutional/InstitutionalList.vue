<template>
  <div class='institutionIF'>
    <el-row :gutter="20"  class='marginAll'>
      <el-col :span="12">
        <div class="grid-content bg-purple">所属区域 <i class='icon iconfont icon-icondown'></i></div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">医院性质<i class='icon iconfont icon-icondown'></i></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'InstitutionalList'
}
</script>
<style>
.institutionIF{
   position: absolute;
    top:0;
    left: 0;
    right:0;
}
.el-row{
  text-align:text;
}

</style>
