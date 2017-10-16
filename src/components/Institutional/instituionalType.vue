<template>
  <div class='insitionType' :class="!status ? 'show' :'hidden' ">

    <el-row :gutter="20" class=' packHeight marginAll paddingBuyTop'>
      <mu-list class='marginAll paddingBuyTop '>
        <div v-for='(item,index) in examination' :key='index' style='width:50%;float:left;margin:0 0 5px 0;'>
          <mu-list-item class='paddingAll packgrou-list'>
            <router-link :to="{path:'organizationDetail/id',query:{id:item.id}}" class='paddingAll'>
              <div class="grid-content bg-purple ">
                <img v-lazy="img+item.image" class='imgHeight' />
              </div>
              <div class='packageText'>
                <span class="packageTextHot">{{item.name}}</span>
                <span class="examinationListAddress">
                <span class='Nature orange' v-if='item.propertyName=="公立三甲" '>{{item.propertyName}}</span>
                <span class='Nature green' v-if='item.propertyName=="公立医院" '>{{item.propertyName}}</span>
                <span class='Nature bule' v-if='item.propertyName=="民营医院" '>{{item.propertyName}}</span>
                <span class='address'>{{item.address}}</span>
                </span>
              </div>
            </router-link>
          </mu-list-item>
          <mu-divider/>
        </div>
        <!-- <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" />.more -->
      </mu-list>
      <!-- </el-col> -->
    </el-row>
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
  import homeOrganization from '../../assets/css/homeOrganization/homeOrganization.css' //机构css
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
    padding: 8px 0;
    text-align: left;
    position: absolute;
    top: 45px;
    background: #fff;
    width: 100%;
    height: calc(100vh - 145px);
    display: block;
    overflow: auto;
  }

  .paddingBuyTop {
    text-align: left;
    position: absolute;
    /* top: 45px; */
    background: #fff;
    width: 100%;
    height: 20rem;
  }

  .show {
    display: block;
  }

  .hidden {
    display: none;
  }
</style>

