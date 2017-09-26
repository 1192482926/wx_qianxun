<template>
  <div class="Globals">
    <!-- 头部 -->
    <el-row class="health-top">
      <el-col :span="4" class="search-box displayTable">
        <p class="teableCell">
          <i class="icon iconfont icon-sousuo-" style="font-size: 36px;"></i>
        </p>
      </el-col>
      <el-col :span="16" class="health-name displayTable">
        <el-tabs v-model="activeName" @tab-click="handleClick" class='el-tabs-chongzhi'>
          <el-tab-pane label="体检套餐" name="first">
            <List></List>
          </el-tab-pane>
          <el-tab-pane label="体检机构" name="second">

            <InstitutionalList></InstitutionalList>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="4" class="viewtype-switch displayTable">
        <p class="teableCell" v-on:click="Switch">
          <i class="icon iconfont iconSize " :class="[classObject.isActive ? classObject.iconList : classObject.iconApps]" style="font-size: 26px;"></i>
        </p>
      </el-col>
    </el-row>
    <!-- 内容 -->




    <Foot></Foot>
  </div>
</template>

<script>
  import Foot from '../footer/footer.vue'
import List from './packsList'
import InstitutionalList from '../Institutional/InstitutionalList'
  export default {
    name: 'packageList',
    data() {
      return {
        activeName: 'first',
        classObject: {
          isActive: true,
          iconList: 'icon-list',
          iconApps: 'icon-apps',
          hpList: 'hp-box-list',
          hpNormal: 'hp-box-list-normal'
        }
      }
    },
    methods: {
      Switch: function() {
        this.classObject.isActive = this.classObject.isActive ? false : true;
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
      Foot,List,InstitutionalList
    }
  }
</script>

<style scoped>
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


.el-tab-pane{
    position: absolute;
    width: 100%;
    /* border: 1px red solid; */
    left: 0;
  }


</style>
