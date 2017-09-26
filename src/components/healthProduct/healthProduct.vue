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
			<span class="teableCell">健康产品</span>
		</el-col>
		<el-col :span="4" class="viewtype-switch displayTable">
			<p class="teableCell" v-on:click="Switch">
				<i class="icon iconfont iconSize " :class="[classObject.isActive ? classObject.iconList : classObject.iconApps]"  style="font-size: 26px;"></i>
			</p>
		</el-col>
	</el-row>
	<!-- 内容 -->
	<div class="healthProduct-box clearfix m_htBox">

		<!-- hp-box-list   切换   hp-box-list-normal -->
		<div :class="[classObject.isActive ? classObject.hpList : classObject.hpNormal]">
			<div class="hp-list-img">
				<a href="#">
					<img src="../../assets/images/health/list-img.png" />
				</a>
			</div>
			<div class="hp-list-describe">
				<p class="title">长寿泉护理床家用手动电动多功 能医用床 手电一体热销款D03</p>
				<p class="price">¥ 3480.00</p>
				<div class="evaluate">
					<span class="evaluate-num"><i>9</i>条评价</span>
					<span class="evaluate-Percentage"><i>100%</i>好评</span>
				</div>
			</div> 
		</div>
		 
		<div :class="[classObject.isActive ? classObject.hpList : classObject.hpNormal]">
			<div class="hp-list-img">
				<a href="#">
					<img src="../../assets/images/health/list-img.png" />
				</a>
			</div>
			<div class="hp-list-describe">
				<p class="title">长寿泉护理床家用手动电动多功 能医用床 手电一体热销款D03</p>
				<p class="price">¥ 3480.00</p>
				<div class="evaluate">
					<span class="evaluate-num"><i>9</i>条评价</span>
					<span class="evaluate-Percentage"><i>100%</i>好评</span>
				</div>
			</div> 
		</div>


	</div>

	<Foot></Foot>
</div>
</template>

<script>
import Foot from '../footer/footer.vue'
export default {
    name: 'healthProduct',
    data(){
    	return {
    		/* change class*/
    		classObject:{
    			isActive: true,
				iconList:'icon-list',
				iconApps:'icon-apps',
				hpList:'hp-box-list',
				hpNormal:'hp-box-list-normal'
    		}
    	}
    },
    methods:{
    	Switch:function(){
    		this.classObject.isActive = this.classObject.isActive ? false : true;
    	}
    },
    components:{
    	Foot
    }
}
</script>

<style scoped>

	i{font-style: normal;}
	img{box-sizing: border-box;}
	.el-row{margin-bottom: 0;}

	/* 设置默认值  */
	.Globals{}
	.health-top{}
	.health-top .health-name{} 
 	/*垂直居中*/
	.displayTable{display: table;}
	.displayTable .teableCell{display: table-cell;vertical-align: middle;}
	/*样式一*/
	.healthProduct-box{position: relative; padding: 1% 4%;height: auto;margin-bottom: 100px;}
	/*内容*/

	.healthProduct-box .hp-box-list{width: 49%;overflow: hidden;padding-top: 2%;}
	.healthProduct-box .hp-box-list:nth-last-of-type(2n-1){margin-left: 0;float: left;}
	.healthProduct-box .hp-box-list:nth-last-of-type(2n){margin-left: 2%;float: right;}

	/*产品图片*/
	.healthProduct-box .hp-box-list .hp-list-img{display: block;width: 100%;}
	.healthProduct-box .hp-box-list .hp-list-img a{position: relative;display: block;width: 100%;padding: 34% 0;overflow: hidden;text-align: center;}
	.healthProduct-box .hp-box-list .hp-list-img a img{position: absolute;left: 0;top: 0;width: 100%;}
	/*产品描述*/
	.healthProduct-box .hp-box-list .hp-list-describe{padding: 0 5px;}
	.healthProduct-box .hp-box-list .hp-list-describe .title{line-height: 18px;margin: 5px 0; font-size: 12px;
	display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;}
	.healthProduct-box .hp-box-list .hp-list-describe .price{color: #FE4626;font-weight: bold;font-size: 14px;margin: 3px 0;}
	.healthProduct-box .hp-box-list .hp-list-describe .evaluate{color: #BBBFC2;font-size: 12px;line-height: 20px;}
	.healthProduct-box .hp-box-list .hp-list-describe .evaluate span{margin-right: 10px;}

	/*样式二*/
	/*内容*/
	.healthProduct-box .hp-box-list-normal{width: 100%;overflow: hidden;border-bottom: 1px solid #F0F1F2;padding: 3% 0;}
	/*产品图片*/
	.healthProduct-box .hp-box-list-normal .hp-list-img{width: 35%; float: left;}
	.healthProduct-box .hp-box-list-normal .hp-list-img a{position: relative;display: block;width: 100%;padding: 34% 0;overflow: hidden;text-align: center;}
	.healthProduct-box .hp-box-list-normal .hp-list-img a img{position: absolute;left: 0;top: 0;width: 100%;}
	/*产品描述*/
	.healthProduct-box .hp-box-list-normal .hp-list-describe{padding: 0 10px;width: 65%; float: left;}
	.healthProduct-box .hp-box-list-normal .hp-list-describe .title{line-height: 18px;margin: 5px 0; font-size: 12px;
	display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;}
	.healthProduct-box .hp-box-list-normal .hp-list-describe .price{color: #FE4626;font-weight: bold;font-size: 14px;margin: 3px 0;}
	.healthProduct-box .hp-box-list-normal .hp-list-describe .evaluate{color: #BBBFC2;font-size: 12px;line-height: 20px;}
	.healthProduct-box .hp-box-list-normal .hp-list-describe .evaluate span{margin-right: 10px;}


</style>
