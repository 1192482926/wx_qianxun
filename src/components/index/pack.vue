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
    this.$nextTick(() => {
      this.Package();
    })
  },
  methods: {
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
    }
  }
}
</script>
