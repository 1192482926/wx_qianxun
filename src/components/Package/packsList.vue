<template>
  <div class='pack-if'>
    <el-row :gutter="20" class='packTabsB marginAll'>
      <el-col :span="6" class='paddingAll' @click.native="typeS('类别',1)">
        <div class="grid-content bg-purple" :class="!type? '' :'on' "> <span v-text="ntabName ? ntabName : '类别' "></span> <i class='icon iconfont icon-icondown' :class="!type? 'icon-iconup' :'icon-icondown'  "></i></div>
      </el-col>
      <el-col :span="6" class='paddingAll' @click.native="typeS('地区',2)">
        <div class="grid-content bg-purple" :class="!regionStatus? '' :'on' "> <span v-text="region ? region : '地区' "></span><i class='icon iconfont icon-icondown'></i></div>
      </el-col>
      <el-col :span="6" class='paddingAll' @click.native="typeS('性别',3)">
        <div class="grid-content bg-purple" :class="!sexStatus? '' :'on' "><span v-text="sex ? sex : '性别' "></span> <i class='icon iconfont icon-icondown'></i></div>
      </el-col>
      <el-col :span="6" class='paddingAll' @click.native="typeS('价格',4)">
        <div class="grid-content bg-purple" :class="!priceStatus? '' :'on' "><span v-text="price ? price : '价格' "></span> <i class='icon iconfont icon-icondown'></i></div>
      </el-col>
    </el-row>
    <!-- 项目 -->
    <el-row :gutter="20" class='marginAll paddingBuyTop ' v-show='type' style='height: 500px; overflow-y: scroll;padding: 0 0 40px 0;'>
      <!-- 不限 -->
      <el-col :span="24" @click.native="Choose('不限')">
        <span class='buxian'>
                      不限
                      <i class='icon iconfont icon-duigou1 duigou' ></i>
                    </span>
      </el-col>
      <!-- 不限 -->
      <!--项目 -->
      <el-col :span="24" @click.native="Choose(item.name)" v-for='(item,index) in packagsType' :key='index' :class=" type ? 'show' :'hidden' " style='padding:20px 0 0 10px;border-bottom:1px #e2e4e5 solid;border-radius: 0'>
        <div class='data'>
          {{item.name}}
          <i class='icon iconfont  duigou'></i>
          <!-- <i class='icon iconfont icon-duigou1  duigou' ></i> -->
        </div>
      </el-col>
      <!-- 不限 -->
    </el-row>
    <!-- 项目 -->
    <!-- 地区  -->
    <el-row :gutter="20" class='marginAll paddingBuyTop ' v-show='regionStatus' style='height: 500px; overflow-y: scroll;padding: 0 0 40px 0;'>
      <!-- 不限 -->
      <el-col :span="24" @click.native="ChooseRegion('不限')">
        <span class='buxian'>
                      不限
                      <i class='icon iconfont icon-duigou1 duigou' ></i>
                    </span>
      </el-col>
      <!-- 不限 -->
      <!--地区-->
      <el-col :span="24" @click.native="ChooseRegion(item.name)" v-for='(item,index) in regionType' :key='index' style='padding:20px 0 0 10px;border-bottom:1px #e2e4e5 solid;border-radius: 0'>
        <div class='data'>
          {{item.name}}
          <i class='icon iconfont  duigou'></i>
          <i class='icon iconfont icon-duigou1  duigou'></i>
        </div>
      </el-col>
    </el-row>
    <!-- 地区 -->
    <!-- 性别  -->
    <el-row :gutter="20" class='marginAll paddingBuyTop ' v-show='sexStatus' style='height: 500px; overflow-y: scroll;padding: 0 0 40px 0;'>
      <!-- 不限 -->
      <el-col :span="24" @click.native="ChooseSex('不限')">
        <span class='buxian'>
                      不限
                      <i class='icon iconfont icon-duigou1 duigou' ></i>
                    </span>
      </el-col>
      <!-- 不限 -->
      <!--性别-->
      <el-col :span="24" @click.native="ChooseSex(item.name)" v-for='(item,index) in sexType' v-show='!regionStatus' :key='index' style='padding:20px 0 0 10px;border-bottom:1px #e2e4e5 solid;border-radius: 0'>
        <div class='data'>
          {{item.name}}
          <i class='icon iconfont  duigou'></i>
          <!-- <i class='icon iconfont icon-duigou1  duigou'></i> -->
        </div>
      </el-col>
    </el-row>
    <!-- 性别 -->
    <!-- 价格  -->
    <el-row :gutter="20" class='marginAll paddingBuyTop ' v-show='priceStatus' style='height: 500px; overflow-y: scroll;padding: 0 0 40px 0;'>
      <!-- 不限 -->
      <el-col :span="24" @click.native="ChoosePrice('不限')">
        <span class='buxian'>
                      不限
                      <!-- <i class='icon iconfont  duigou' :class="'不限' == '不限'? 'icon-duigou1' :'' "></i> -->
                    </span>
      </el-col>
      <!-- 不限 -->
      <!--价格-->
      <el-col :span="24" @click.native="ChoosePrice(item.name,index)" v-for='(item,index) in priceType' v-show='!regionStatus' :key='index' style='padding:20px 0 0 10px;border-bottom:1px #e2e4e5 solid;border-radius: 0'>
        <div class='data'>
          {{item.name}}
          <i class='icon iconfont  duigou' :class="item.name!=item.name? '' :'icon-duigou1' "></i>
          <!-- <i class='icon iconfont icon-duigou1  duigou'></i> -->
        </div>
      </el-col>
    </el-row>
    <!-- 价格 -->
    <pack :status='classStatus'></pack>
  </div>
</template>

<script>
  import pack from './pack'
  import homeMenu from '../../assets/css/homeMenu/homeMenu.css'
  import {
    packageTypes,
    region
  } from '../../conifg/getData.js'
  export default {
    name: 'packList',
    data() {
      return {
        ntabName: '', //选中的类别名字
        region: '', // 选中地区名字
        sex: '', // 选中性别名字
        price: '', //选中价格
        classStatus: false, // 状态变量
        type: false, //项目变量
        regionStatus: false, //地区变量
        sexStatus: false, //价格变量
        priceStatus: false, //价格变量
        stauusFlag: false,
        packagsType: [], //项目数据
        regionType: [], //地区数据
        priceType: [], //价格数据
        sexType: [], //性格数据

      }
    },
    mounted() {
      // 项目数据

      // 地区数据
      //   var params = new URLSearchParams();
      //    params.append('name', "成都市");
      // region(params).then(res => {
      //   this.regionType = res.cityCountryList;
      //   console.error(res.cityCountryList);
      // })
      //获取价格，性别，性质
      packageTypes().then(res => {
        this.packagsType = res.medicalType; // 项目数据
        this.priceType = res.medicalCost; //获取价格
        this.sexType = res.sex; //获取性别
        console.error(res);
      })
    },
    components: {
      pack
    },
    methods: {
      typeS(name, index) {
        this.classStatus = true;
        if (name == '类别' && index == 1) {
          if(this.type) {
            this.classStatus = false;
          }
          this.type = !this.type;
          this.regionStatus = this.sexStatus = this.priceStatus = false;
        } else if (name == '地区' && index == 2) {
          if (this.regionStatus) {
            this.regionStatus = false;
            this.classStatus = false;
          } else {
            this.regionStatus = true;
          }
          this.type = false;

          this.priceStatus = false;
          this.sexStatus = false;
        } else if (name == '性别' && index == 3) {
          this.type = false;
          this.sexStatus = true;
          this.regionStatus = false;
          this.priceStatus = false;
        } else if (name == '价格' && index == 4) {
          this.type = false;
          this.sexStatus = false;
          this.regionStatus = false;
          this.priceStatus = true;
        }
      },
      Choose(name) {
        this.ntabName = name;
        this.classStatus = false;
        this.type = false;
      },
      ChooseRegion(name) {
        this.regionStatus = false;
        this.classStatus = false;
        this.region = name;
      },
      ChooseSex(name) {
        this.sexStatus = false;
        this.classStatus = false;
        this.sex = name;
      },
      ChoosePrice(name) {
        this.classStatus = false;
        this.priceStatus = false;
        this.price = name;
      }
    }
  }
</script>

<style scoped>
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

  .pack-if {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
  }


  /* .el-tabs__active-bar {
                    position: absolute;
                    bottom: 0;
                    left: 95px;
                    width: 27px!important;
                    height: 3px;
                    background-color: #20a0ff;
                    z-index: 1;
                    transition: transform .3s cubic-bezier(.645, .045, .355, 1);
                    list-style: none;
                  } */


  /* 重置element样式 */


  /* .packTab {
                        padding: 0 29px;
                        height: 50px;
                        box-sizing: border-box;
                        line-height: 46px;
                        display: inline-block;
                        list-style: none;
                        font-size: 14px;
                        color: #a7acaf;
                        position: relative;
                    } */

  .el-tabs__content {
    overflow: inherit!important;
    position: static!important;
  }


  /* tab下面的横线 */

  .packTabsB {
    border-bottom: 1px #f0f1f1 solid;
    color: black;
    margin-bottom: 10px;
    background: #fff;
    margin-bottom: 10px;
    position: fixed;
    width: 100%;
    background: #fff;
    z-index: 9999;
  }


  /* 切换状态 */

  .on {
    color: #009ee2;
  }

  .paddingBuyTop {
    text-align: left;
    position: absolute;
    top: 45px;
    background: #fff;
    width: 100%;
    height: 20rem;
  }



  .packageListAndScreen .buxian {
    color: #009ee2;
    padding: 15px 0;
    display: block;
  }

  .packageListAndScreen .data {
    padding: 15px 0;
    border-bottom: 1px #f0f1f1 solid;
  }


  /* 状态 的样式 */

  .hidden {
    display: none
  }

  .show {
    display: block;
  }


  /* 对勾，选中状态 */

  .duigou {
    position: absolute;
    right: 10px;
    color: #7dba1d
  }


  /* 点击 更改样式 */

  .changeDiv {
    width: 100%;
  }

  .changeA {
    display: flex;
    width: 100%;
  }

  .changepackageText {
    padding: 0 0 0 10px;
  }


  /* 更改样式 */

  .packageTextHot {
    height: 44px;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 23px;
    letter-spacing: 0px;
    color: #202121;
    overflow: hidden;
  }


  /*****mu-item*/

  .mu-item {
    padding: 0 7px!important;
  }


  /* packHeight  列表高度 */

  .packHeight {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }

  .demo-infinite-container {
    width: 256px;
    height: 300px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
  }
</style>
