<template>
  <div class='institutionIF'>
    <el-row :gutter="20" class='marginAll textAlign'>
      <el-col :span="12" class='line1' @click.native="typeNature('所属区域',1)">
        <div class="grid-content bg-purple" :class="!type ? '' : 'on' "> <span  v-text="!quyuName ? '所属区域' : quyuName"></span> <i class='icon iconfont icon-icondown'></i></div>
      </el-col>
      <el-col :span="12" class='line1' @click.native="typeNature('医院性质',2)">
        <div class="grid-content bg-purple" :class="!natrueStatus ? '' : 'on' "> <span  v-text="!natureName ? '医院性质' : natureName"></span><i class='icon iconfont icon-icondown'></i></div>
      </el-col>
    </el-row>
    <!-- 所属区域 -->
    <el-row :gutter="20" class='marginAll paddingBuyTop ' v-show='type' style='text-align: left;height: 500px; overflow-y: scroll;padding: 0 0 40px 0;'>
      <!-- 不限 -->
      <el-col :span="24" @click.native="Choose('不限')">
        <span class='buxian'>
                            不限
                            <i class='icon iconfont icon-duigou1 duigou' ></i>
                          </span>
      </el-col>
      <!-- 不限 -->
      <!--所属区域 -->

    </el-row>
    <!-- 所属区域 -->
    <!-- 医院性质 -->
    <el-row :gutter="20" class='marginAll paddingBuyTop ' v-show='natrueStatus' style='text-align: left;height: 500px; overflow-y: scroll;padding: 0 0 40px 0;'>
      <!-- 不限 -->
      <el-col :span="24" @click.native="ChooseNatrue('不限')">
        <span class='buxian'>
                            不限
                            <i class='icon iconfont icon-duigou1 duigou' ></i>
                          </span>
      </el-col>
      <!-- 不限 -->
      <!--医院性质 -->
      <el-col :span="24" @click.native="ChooseNatrue(item.name)" v-for='(item,index) in natuerDate' :key='index'   style='text-align: left;padding:20px 0 0 10px;border-bottom:1px #e2e4e5 solid;border-radius: 0'>
        <div class='data'>
          {{item.name}}
          <i class='icon iconfont  duigou'></i>
          <!-- <i class='icon iconfont icon-duigou1  duigou' ></i> -->
        </div>
      </el-col>
    </el-row>
    <!-- 医院性质 -->
    <insitions :status='classStatus'></insitions>
  </div>
</template>

<script>
  import insitions from './instituionalType'
  import {
    hotMechanism,
    organization
  } from '../../conifg/getData'
  export default {
    name: 'InstitutionalList',
    data() {
      return {
        type: true, //机构变量
        natuerDate: [], //性质数据
        classStatus: false, // 状态变量
        natrueStatus: false, //性质变量
        natureName:'', //性质名称，tab选择的名字
        quyuName:''//区域名称，tab选择的名字
      }
    },
    mounted() {
      /** 机构性质 **/
      organization().then(res => {
        this.natuerDate = res.organizationProperty;
        console.log(res);
      })
    },
    components: {
      insitions
    },
    methods: {
      typeNature(name, index) {
        this.classStatus = true;
        if (name == '所属区域' && index == 1) {
          this.type = true;
          this.natrueStatus= false;
        } else if (name == '医院性质' && index == 2) {
           this.type = false;
          this.natrueStatus = true;
        }
      },
      Choose(name) {
        this.type = false;
        this.classStatus = false;
        this.quyuName = name;
      },
      ChooseNatrue(name) {
        this.natrueStatus = false;
        this.classStatus = false;
         this.natureName = name;
      }
    }
  }
</script>

<style scoped lass='scss'>
  .institutionIF {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
  }

  .textAlign {
    border-bottom: 1px #f0f1f1 solid;
    text-align: text;
    padding: 4px 0;
    text-align: center;
  }

  .line1 {
    line-height: 1;
    height: 29px;
  }
   /* 切换状态 */
  .on {
    color: #009ee2;
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
</style>
