<template>
<div>
  <!--轮播和头部开始-->
  <el-row>
    <!-- 轮播 -->
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">
        <div class="block">
          <el-carousel trigger="click" height="210px">
            <el-carousel-item v-for="(item,index) in imgs" :key="index">
              <img :src="item.img">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </el-col>
    <!-- 轮播 -->
    <!-- 头部 -->
    <el-row :gutter="20" class='headerTop marginAll' :class="!showColorStatus ? 'header' : 'green1' ">
      <el-col :span="6" class='headerSpan '>
        <div class="grid-content bg-purple">
          <span>成都 <i class="iconfont icon-icondown"></i></span>
        </div>
      </el-col>
      <el-col :span="16" class='search'>
        <div class="grid-content bg-purple">
          <!-- 搜索框 -->
          <el-input placeholder="搜索...." icon="search" v-model="input2" :on-icon-click="handleIconClick">
          </el-input>
          <!-- 搜索框 -->
        </div>
      </el-col>
    </el-row>
    <!-- 头部 -->
  </el-row>
  <!--轮播和头部结束-->

  <!-- 体检项目 -->
  <el-row :gutter="20" class='examination marginAll'>
    <el-col :span="6" v-for="(item,index) in project" v-if="index<8" :key="index">
      <router-link :to="{path:'detail/id',query:{id:item.id}}">
        <div class="grid-content bg-purple">
          <div class='examinationImg'>
            <i class='iconfont ' :class='item.iconWeixin'></i>
          </div>
          <span class="examinationTitle">{{item.name}}</span>
        </div>
      </router-link>
    </el-col>
  </el-row>
  <!-- 体检项目 -->
  <!-- 热卖 -->
  <el-row :gutter="20" class='marginAll paddingBuyTop'>
    <el-col :span="12">
      <!-- <div class='buyTopTitle'>
        <span class="text-gradient">健康热卖</span>
        <span class="Healthy">最新的健康产品</span>
      </div> -->
      <div class="grid-content bg-purple">
        <img :src='hotBuy' />
      </div>
    </el-col>
    <el-col :span="12">
      <!-- <div class='buyTopTitle'>
        <span class="recommend-title">精选推荐</span>
        <span class="Healthy">最新的健康产品</span>
      </div> -->
      <div class="grid-content bg-purple">
        <img :src='recommend' />
      </div>
    </el-col>
  </el-row>
  <!-- 热卖 -->
  <!-- 热门套餐 -->
  <el-row :gutter="20" class='marginAll'>
    <el-col :span="12">
      <div class="grid-content bg-purple  tijain">体检套餐</div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple more" style='text-align:right'>查看更多</div>
    </el-col>
  </el-row>
  <!-- 热门套餐列表 -->
  <pack></pack>
  <!-- 热门套餐列表 -->
  <!-- 热门套餐 -->
  <!-- 热门机构 -->
  <el-row :gutter="20" class='marginAll'>
    <el-col :span="12">
      <div class="grid-content bg-purple  tijain">热门体检机构</div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple more" style='text-align:right'>查看更多</div>
    </el-col>
  </el-row>
  <!-- 热门机构列表 -->
  <el-row :gutter="20" class='marginAll paddingBuyTop examinationList'>
    <el-col :span="12" v-for='(item,index) in examination' v-if='index<4' :key='index'>
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
  <!-- 热门机构列表 -->
  <!-- 热门机构 -->
  <!-- 底部 -->
  <Foot></Foot>
  <router-view></router-view>
</div>
</template>

<script>
import '../../conifg/http.js'
import Foot from '../footer/footer.vue'
import pack from './pack'
import indexHeaderImg from '../../assets/index.png'
import recommend from '../../assets/recommend.png'
import hotBuy from '../../assets/hotBuy.png'
import homeMenu  from '../../assets/css/homeMenu/homeMenu.css'  //套餐css
import homeOrganization  from '../../assets/css/homeOrganization/homeOrganization.css'  //机构css

export default {
  name: 'index',
  data() {
    return {
      imgs: [{
          img: indexHeaderImg
        },
        {
          img: 'http://www.xwcms.net/webAnnexImages/fileAnnex/201508/26506/images/explorer.jpg'
        },
        {
          img: indexHeaderImg
        },
        {
          img: indexHeaderImg
        }
      ],
      showColorStatus:false,
      recommend: recommend, //精选推荐图片
      hotBuy: hotBuy, //热卖图片
      input2: '',
      img: this.imgUrlS, //图片路径
      examination: [], //热门机构数据
      project: [] //体检项目数据
    }

  },
  components: {
    Foot,
    pack
  },
  mounted() {
    this.$nextTick(() => {
      this.Package();
      this.Physical();
      this.examinationItems();
    })
    window.addEventListener('scroll', this.showBack)
  },
  methods: {
    showBack() {
      let headerH = document.getElementsByClassName("headerTop")[0].offsetHeight;
        let scrollTop = document.body.scrollTop;
        console.log(scrollTop);
        if (scrollTop > 15) {
          this.showColorStatus = true;
            if (scrollTop > headerH) {
                scrollTop = headerH
            }
            document.getElementsByClassName("headerTop")[0].style.background = 'rgba(23,170,231,' + scrollTop / headerH + ')';

        } else {
          this.showColorStatus = false;
            document.getElementsByClassName("headerTop")[0].style.background = 'transparent';
        }
    },
    handleIconClick(ev) {
      console.log(ev);
    },
    Package() { //获取套餐数据
      this.$http({
          method: 'post',
          url: this.fytjURL + 'medicalplan/rows'
        })
        .then((res) => {
          console.log(res);
          this.package = res.data.rows;
        })
        .catch((error) => {
          if (error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        })
    },
    //获取机构数据
    Physical() {
      this.$http({
          method: 'post',
          url: this.fytjURL + 'organization/getList'
        })
        .then((res) => {
          this.examination = res.data.rows;
          // console.log(res);
        })
        .catch((error) => {
          if (error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        })
    },
    //获取体检项目数据
    examinationItems() {
      this.$http({
          method: 'post',
          url: this.fytjURL + 'medicalplan/codeValues'
        })
        .then((res) => {
          this.project = res.data.medicalType;
          // console.log(res.data.medicalType);
        })
        .catch((error) => {
          if (error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        })
    }
  }
}
</script>
<style scoped  >
body,html,#app{

  border:1px red solid;
}
<style >
/* 全局设置margin */

 .marginAll {
  margin: 0!important;
}

.paddingBuyTop div {
  padding: 3px!important;
}

body {
  font-size: 14px;
}

.fontSize18 {
  font-size: 18px;
}

.examination .el-col-6 {
  margin: 10px 0;
}


/*   去掉轮廓线*/

input {
  outline: none
}


/* 轮播 */

.el-carousel__item img {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}


/* 头部 */

.header {
  position: absolute;
  top: 17px;
  left: 21px;
   right: 0;
   z-index: 2;
  color: #fff;
  height: 50px;

}
.green1{
  position:fixed;
  top:0;
  left: 0;
  z-index:2;
  height: 50px;
  width:100%;
  color:#fff;
  margin-top:5px;
  opacity:1;
}
.green1 .headerSpan ,.green1 .search {
  margin-top:10px!important;
}
.red{
  position:static;
   background:red!important;
}
.headerSpan,
.headerSpan div {
  height: 100%;
}

.headerSpan i {
  vertical-align: sub;
}

.headerSpan .grid-content span {
  display: inline-block;
  line-height: 31px;
}

.el-input__inner {
  height: 31px;
  border-radius: 15px;
}

.header div {}


/* 体检项目 */

.examination {
  padding-top: 10px;
}

.examinationImg {
  border: 1px r;
  height: 50px;
  border-radius: 32%;
}

.examinationImg .iconExaminationGene,
.examinationImg .iconExaminationEntry,
.examinationImg .iconExaminationCancer,
.examinationImg .iconExaminationSex,
.examinationImg .iconExaminationRoutine,
.examinationImg .iconExaminationYouth,
.examinationImg .iconExaminationAll,
.examinationImg .iconExaminationOlder {
  height: 100%;
  border-radius: 36%;
  overflow: hidden;
  margin: 0 auto;
  text-align: center;
  display: -webkit-box;
  background-size: 50%;
}

.examinationTitle {
  display: block;
  width: 100%;
  text-align: center;
  color: #4b4c4d;
}


/* 体检项目图标 */


/* 基因 */

.iconExaminationGene {
  background: url('../../assets/icon7.png') no-repeat center;
  background-size: contain;
}


/* 入职 */

.iconExaminationEntry {
  background: url('../../assets/icon2.png') no-repeat center;
  background-size: contain;
}


/* 女性专检 */

.iconExaminationSex {
  background: url('../../assets/icon4.png') no-repeat center;
  background-size: contain;
}


/* 常规 */

.iconExaminationRoutine {
  background: url('../../assets/icon8.png') no-repeat center;
  background-size: contain;
}


/* 中青年体检 */

.iconExaminationYouth {
  background: url('../../assets/icon3.png') no-repeat center;
  background-size: contain;
}


/* 全面检查
  */

.iconExaminationAll {
  background: url('../../assets/icon10.png') no-repeat center;
  background-size: contain;
}


/* 关爱老人
  */

.iconExaminationOlder {
  background: url('../../assets/icon5.png') no-repeat center;
  background-size: contain;
}


/* 防癌体检
  */

.iconExaminationCancer {
  background: url('../../assets/icon9.png') no-repeat center;
  background-size: contain;
}


/* 热卖 */


/* .buyTopTitle {
  position: absolute;
  top: 10px;
} */

.buyTopTitle span {
  display: block;
  text-align: left;
}

.paddingBuyTop {
  padding-top: 10px;
}

.Healthy {
  color: #727373;
  font-size: 14px;
}


/* 健康渐变 */

.text-gradient {
  display: inline-block;
  color: green;
  font-size: 18px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, from(#fe9071), to(#ff3c19));
}


/* 精选推荐 */

.recommend-title {
  display: inline-block;
  color: green;
  font-size: 18px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, from(#dc71ee), to(#9905f6));
}


/* 体检套餐 */


/* 热门机构 */


</style>


</style>
