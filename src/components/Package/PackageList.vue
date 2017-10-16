
<template>
  <div class="packageList-pack">
    <!-- 头部 -->
    <el-row class="packageL-top">
      <el-col :span="4" class="search-box displayTable" style='position:fixed;left: 12px;height:50px;'>
        <p class="teableCell">
          <i class="icon iconfont icon-sousuo-" style="font-size: 36px;"></i>
        </p>
      </el-col>
      <el-col :span="24" class="health-name displayTable" style="position:

    fixed;width: 100%;text-align:center;height:50px;">
        <el-col :span="12" class="health-name displayTable" style='line-height: 50px;'>
          <router-link to='/packL'>
            体检套餐
          </router-link>
        </el-col>
        <el-col :span="12" class="health-name displayTable" style='line-height: 50px;'>
          <router-link to='/'>
            体检机构
          </router-link>
        </el-col>
        <!-- <el-tabs v-model="activeName" @tab-click="handleClick" class='el-tabs-

    chongzhi'>
            <router-link >
                <el-tab-pane label="体检套餐"

    name="first">
                  <List></List>
                </el-tab-pane>


    </router-link>
                <el-tab-pane label="体检机构" name="second">


    <InstitutionalList></InstitutionalList>
                </el-tab-pane>
              </el-tabs>

    -->
      </el-col>
      <el-col :span="4" class="viewtype-switch displayTable" style='position: fixed;right: 0;'>
        <p class="teableCell" style='width:10px;

    float: left;' @click="$store.commit('chengeStatus')">
          <i class="icon

    iconfont iconSize " style="font-size: 26px;" :classIcon-status='flagIcon' :class="[flagIcon ? 'icon-list' : 'icon-apps']"></i>
        </p>
      </el-col>
    </el-row>
    <!-- 内容 -->
    <Foot></Foot>
  </div>
</template>

<script>
  import Foot
  from '../footer/footer.vue'
  import store from '../store/store'
  import List from
  './packsList'
  import InstitutionalList from '../Institutional/InstitutionalList'
  export default {
    name: 'packageList',
    data() {
      return {
        activeName:
          'first',
        flagIcon: false,
      }
    },
    store,
    methods: {
      print
      (value) {
        console.log(value)
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
      Foot,
      List,
      InstitutionalList
    }
  }
</script>

<style scoped lang='scss'>
  .packageList-pack {
    border: 1px #f0f1f1 solid;
    width: 100%;
    height: 50px;
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
  /* 头部 */
  .packageL-top {
    height: 100%;
    width: 100%;
    font-size: 14px;
  }
  /*垂直居中*/
  .displayTable {
    display: table;
  }
  .displayTable .teableCell {
    display: table-cell;
    vertical-align: middle;
    line-height: 50px;
    margin-left: 18px;
  }
  /*样式一*/
  .healthProduct-box {
    position: relative;
    padding: 1% 4%;
    height: auto;
    margin-bottom: 100px;
  }
  /*内容*/
  .healthProduct-box .hp-box- list {
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
  .active {
    border-bottom: 4px solid rgba(27, 179, 245, 1);
  }
</style>
