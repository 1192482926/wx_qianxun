<template>
	<div class="Globals">
		<!-- 头部 -->
		<el-row class="health-top">
			<el-col :span="4" class="search-box displayTable">
				<p class="teableCell">
					<i class="icon iconfont icon-fanhui" style="font-size: 20px;"></i>
				</p>
			</el-col>
			<el-col :span="16" class="health-name displayTable">
				<span class="teableCell">套餐详情</span>
			</el-col>
			<el-col :span="4"></el-col>
		</el-row>
		<!--detail-box -->
		<div class="detail-box">
			<!-- detail-box-info -->
			<div class="detail-box-info">
				<div class="info-img">
					<img src="../../assets/images/detail/detail-img.png" />
				</div>
				<div class="info-box">
					<div class="package-name">健康常乐白金聚划算超值父母体检套餐</div>
					<div class="package-hospital">
						<span>成都八一军区骨科体检医院</span>  |
						<span>公立三甲</span>
					</div>
					<div class="package-info">
						<span class="price">¥ 899.00</span>
						<span class="sales">销量100</span>
						<span class="warn">此套餐需提前三天预约</span>
					</div>
				</div>
			</div>
			<!-- detail-box-timeAdr -->
			<div class="detail-box-timeAdr">
				<div class="hospital-time">
					<span class="title">体检时间：</span>
					<span class="content">周一至周六  &nbsp;&nbsp; 08:00 - 20:00</span>
				</div>
				<div class="hospital-address">
					<span class="title">体检地址：</span>
					<span class="content">成都市青羊区武都路3号（文殊院附近）</span>
				</div>
			</div>
			<!-- packageDetail-box -->
			<el-tabs v-model="activeName" class="packageDetail-box">
			    <el-tab-pane label="套餐详情" name="first"  class="packageDetail">
			    	<div class="content">
			    		<table class="table">
			    			<thead class="thead">
			    				<tr>
			    					<th colspan="3">
			    						<p class="physicals-name">男性体检B套餐</p>
			    						<p class="introduction">具体套餐以体检信息为准</p>
			    					</th>
			    				</tr>
			    				<tr>
			    					<td colspan="2">项目名称</td>
			    					<td>项目意义</td>
			    				</tr>
			    			</thead>
			    			<!-- 内容 -->
			    			<tbody class="ct-name">
			    				<tr>
			    					<td colspan="3">科室检查（<span>4</span>项）</td>
			    				</tr>
			    			</tbody>
			    			<tbody class="tbody">
			    				<tr>
			    					<td>一般检查</td>
			    					<td>一般检查A</td>
			    					<td>通过仪器测量人体基本健康指标。例如：血压是否正常</td>
			    				</tr>
			    			</tbody>
			    			<!-- 内容 end-->
			    		</table>
			    	</div>
			    </el-tab-pane>
			    <el-tab-pane label="体检须知" name="second" class="packageNotice">
			    	<div class="content">
			    		<table class="table">
			    			<thead class="thead">
			    				<tr>
			    					<th colspan="2">
			    						<p class="physicals-name">体检须知</p>
			    					</th>
			    				</tr> 
			    			</thead> 
			    			<tbody class="tbody">
			    				<tr>
			    					<td>体检时间及需携带材料</td>
			    					<td>
			    						<p>体检时间：按照预约时间准时到达体检机构，体检请务必携带本人身份证件。</p>
			    					</td> 
			    				</tr>
			    				<tr>
			    					<td>体检前</td>
			    					<td>
			    						<p>体检前三天，请保持正常饮食，不吃油腻食物、动物内脏、鸡血、鸭血等血制品及不易消化的高蛋白食物，勿饮酒。不要服用对肝、肾功能有损害的药物。</p>
			    					</td> 
			    				</tr>
			    				<tr>
			    					<td>体检中</td>
			    					<td>
			    						<p>需空腹检查的项目为抽血、腹部B超、数字胃肠，胃镜及其它标注的体检项目。</p>
			    					</td> 
			    				</tr>
			    				<tr>
			    					<td>体检后</td>
			    					<td>
			    						<p>全部项目完毕后请您务必将体检单交到前台。</p>
			    					</td> 
			    				</tr>
			    			</tbody>
			    			<!-- 内容 end-->
			    		</table>
			    	</div>
			    </el-tab-pane>
			</el-tabs>


		</div>
		<!-- buyNow -->
		<div class="buyNow">立即购买</div>
	</div>
</template>

<script>
	export default {
		name:'PackageDetail',
		data(){
			return{
				activeName:'first'
			}
		}
	}
</script>

<style>
	.Globals{background: #F5F5F5;}
	/*detail-box */
	.detail-box{margin-bottom: 50px;}
	.detail-box .detail-box-info .info-img img{display:block;width: 100%;}
	.detail-box .detail-box-info .info-box{padding: 10px 4% 14px 4%;background: #FFFFFF;}
	.detail-box .detail-box-info .info-box .package-name{font-weight: bold;font-size: 15px;line-height: 22px;}
	.detail-box .detail-box-info .info-box .package-hospital{color: #B0B4B7;font-size: 12px;line-height: 25px;}
	.detail-box .detail-box-info .info-box .package-info{margin-top: 5px;}
	.package-info .price{color: #FE2D09;font-size: 16px;font-weight: bold;}
	.package-info .sales{color: #798085;font-size: 12px;margin-left: 10px;}
	.package-info .warn{color: #EC921D;font-size: 12px;border-radius: 8px;padding: 2px 12px 2px 27px;background: url(../../assets/images/detail/warn.png)no-repeat;
	background-size: 12px;background-position: 9px 3px;background-color: #F1F1F1;margin-left: 15px;}
	/* detail-box-timeAdr */
	.detail-box-timeAdr{background: #FFFFFF;margin-top: 3%;padding: 0 4%;}
	.detail-box-timeAdr .hospital-time{border-bottom: 1px solid #F0F1F1;}
	.detail-box-timeAdr .hospital-time, .detail-box-timeAdr .hospital-address{height:50px;line-height:50px;overflow: hidden;position: relative;}
	.detail-box-timeAdr .title{color: #989DA0;float: left;width: 75px;position: absolute;left: 0;}
	.detail-box-timeAdr .content{overflow: hidden; float: left;width: 100%;padding: 0 0 0 75px;}
	.detail-box-timeAdr .hospital-address .content{display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;overflow: hidden;}
	/* packageDetail-box */
	.packageDetail-box{background: #FFFFFF;margin-top: 3%;}
	.packageDetail-box .packageDetail, .packageDetail-box .packageNotice{}
	.packageDetail-box .el-tabs__nav{padding: 3% 0;}
	.packageDetail-box .el-tabs__header{border-bottom: 1px solid #E2E4E5;margin: 0 4%;}
	.packageDetail-box .el-tabs__item{color: #000;font-size: 16px;}
	.packageDetail-box .el-tabs__content{padding: 3% 4%;}
	/*套餐详情 */
	.packageDetail-box .content{}
	.packageDetail-box .table{width: 100%;border: 1px solid #F0F0F0;}
	.packageDetail-box .table tr th{line-height: 25px;}
	.packageDetail-box .table tr th, .packageDetail-box .table tr td{text-align: center;border: 1px solid #F0F0F0;padding: 10px;}
	/* thead */
	.packageDetail-box .table .thead .physicals-name{font-size: 15px;}
	.packageDetail-box .table .thead .introduction{color: #A9A9A9;font-size: 12px;font-weight: normal;}
	/* tbody */
	.packageDetail-box .table .ct-name{background: #F3F3F3;color: #15A0EB;}
	.packageDetail-box .table .ct-name td{text-align: left;}
	.packageDetail-box .table .tbody{color: #858585;}
	.packageDetail-box .packageDetail .table .tbody tr td:nth-of-type(1), 
	.packageDetail-box .packageDetail .table .tbody tr td:nth-of-type(2){width: 25%;}
	/*体检须知*/
	.packageDetail-box .packageNotice .table .tbody tr td:nth-of-type(1){width: 25%;}
		.packageDetail-box .packageNotice .table .tbody tr td:nth-of-type(2){text-align: left;}
 
	/* buyNow */
	.buyNow{position: fixed;bottom: 0;left: 0;width: 100%; color: #FFFFFF;background:#0B90FD;display: block;text-align: center;
	height: 50px;line-height: 50px; font-size: 16px;
	background: -webkit-linear-gradient(left , #0B90FD ,#58E5F5);
	background: -o-linear-gradient(right , #0B90FD ,#58E5F5);
	background: -moz-linear-gradient(right , #0B90FD ,#58E5F5);
	background: linear-gradient(to right , #0B90FD ,#58E5F5);}
</style>
