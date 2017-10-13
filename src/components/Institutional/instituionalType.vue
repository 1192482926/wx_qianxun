<template>
  <div class='insitionType'  :class="!status ? 'show' :'hidden' " style='height: 500px; overflow-y: scroll;padding: 0 0 40px 0;'>
      <el-col :span="12" v-for='(item,index) in examination'  :key='index' >
      <div class="grid-content bg-purple examinationListImg">
        <img v-lazy="img+item.image" />
      </div>
      <div class='packageText'>
        <span class="packageTextHot">{{item.name}}</span>
        <span class="examinationListAddress">
            <span class='Nature orange' v-if='item.propertyName=="公立三甲" '>{{item.propertyName}}</span>
        <span class='Nature green' v-if='item.propertyName=="公立医院" '>{{item.propertyName}}</span>
        <span class='Nature bule' v-if='item.propertyName=="民营医院" '>{{item.propertyName}}</span>
        <!-- <span class='Nature bule' >{{item.propertyName}}</span> -->
        <span class='address'>{{item.address}}</span>
        </span>
      </div>
    </el-col>
  </el-row>

    <!-- mesu ui做的 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import {
    hotMechanism
  } from '../../conifg/getData'
  import homeOrganization  from '../../assets/css/homeOrganization/homeOrganization.css'  //机构css
  import homeMenu from '../../assets/css/homeMenu/homeMenu.css' //套餐css
  export default {
    name: 'Nature',
     props: ['status'],
    data() {
      return {
        num: 10,
        loading: false,
        scroller: null,
        examination: [], //机构数据
        img: this.imgUrlS, //图片路径
        falg: '',
      }
    },
    mounted() {
      /** 机构数据 **/
       hotMechanism().then(res => {
        this.examination = res.rows;
        // console.log(res.rows);
      })

    },

  }
</script>

<style scoped>
  /* 筛选条件 */

  .insitionType {
    padding:8px 0;
    text-align: left;
    position: absolute;
    top: 45px;
    background: #fff;
    width: 100%;
    height:auto;
    display:block;
    overflow: auto;
  }

  .paddingBuyTop {
    text-align: left;
    position: absolute;
    top: 45px;
    background: #fff;
    width: 100%;
    height: 20rem;
  }
  .show{
    display:block;
  }
  .hidden{
    display:none;
  }
</style>

