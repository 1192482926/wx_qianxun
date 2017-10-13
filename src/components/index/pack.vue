<template>
<el-row :gutter="20" class='marginAll paddingBuyTop'>
  <el-col :span="12" v-for='(item,index) in package' v-if='index<4' :key="index">
    <router-link :to="{path:'detail/id',query:{id:item.id}}">
      <div class="grid-content bg-purple">
        <img v-lazy="img+item.image" />
      </div>
      <div class='packageText'>
        <span class="packageTextHot">{{item.name}}</span>
        <span class="packageTextHealthy">￥{{item.personPrice}}</span>
      </div>
    </router-link>
  </el-col>
</el-row>
</template>

<script>
import  { hotPackage } from '../../conifg/getData'
import homeMenu  from '../../assets/css/homeMenu/homeMenu.css'  //套餐css
export default {
  name: 'pack',
  data() {
    return {
      package: [], // 套餐数据
      img: this.imgUrlS //图片路径
    }
  },
  mounted() {
     /** 热门套餐数据 **/
      hotPackage().then(res => {
        console.log(res);
        this.package = res.rows;
      })
  },
  methods: {

  }
}
</script>
