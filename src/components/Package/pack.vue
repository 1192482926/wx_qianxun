<template>
  <div class='packageListAndScreen' :class="!status ? 'show' :'hidden' ">
    <el-row :gutter="20" class=' packHeight marginAll paddingBuyTop'>
      <mu-list class='marginAll paddingBuyTop '>
        <div v-for='(item,index) in package' :key="item.id" style='width:50%;float:left'>
          <mu-list-item class='paddingAll packgrou-list'>
            <router-link :to="{path:'PackageDetail/id',query:{id:item.id}}" class='paddingAll'>
              <div class="grid-content bg-purple ">
                <img v-lazy="img+item.image" />
              </div>
              <div class='packageText'>
                <span class="packageTextHot">{{item.name}}</span>
                <span class="packageTextHealthy">￥{{item.personPrice}}</span>
              </div>
            </router-link>
          </mu-list-item>
          <mu-divider/>
        </div>
        <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" />
      </mu-list>
      <!-- </el-col> -->
    </el-row>
    <!-- mesu ui做的 -->

      <router-view keep-alive></router-view>
<Foot></Foot>
  </div>
</template>

<script>
   import Foot
  from '../footer/footer.vue'
  import {
    mapState
  } from 'vuex'
  import { imgBaseUrl} from '../../conifg/production'
  import {
    hotPackage
  } from '../../conifg/getData'
  import homeMenu from '../../assets/css/homeMenu/homeMenu.css' //套餐css
  export default {
    name: 'pack',
    props: ['status'],
    data() {
      return {
        num: 10,
        loading: false,
        scroller: null,
        package: [], // 套餐数据
        img: imgBaseUrl, //图片路径
        falg: '',
        loading: false,
        scroller: null,

      }
    },
    computed: mapState(['count']),
    mounted() {
      this.scroller = this.$el

      // var params = new URLSearchParams();
      // params.append('page', 1);
      //  params.append('pageNum', 10);
      /** 热门套餐数据 **/
      hotPackage().then(res => {
        console.log(res);
        this.package = res.rows;
      })
    },
    methods: {
      loadMore() {
        console.log(11);
        this.loading = false
        setTimeout(() => {
          hotPackage().then(res => {
            console.log(res);
            this.package = res.rows;
          })
          this.num += 10
          this.loading = false
        }, 2000)

      }


    },
    components:{
      Foot
    }
  }
</script>

<style scoped>
  /* 筛选条件 */

  .packageListAndScreen {
    text-align: left;
    position: absolute;
    top: 45px;
    background: #fff;
    width: 100%;
   height: calc(100vh - 145px);
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

/**packageListAndScreen 图片设置高度**/
.packageListAndScreen img{
object-fit: cover;
    height: 100px;
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

  /* .packageTextHot {
    height: 44px;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 23px;
    letter-spacing: 0px;
    color: #202121;
    overflow: hidden;
  } */


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

