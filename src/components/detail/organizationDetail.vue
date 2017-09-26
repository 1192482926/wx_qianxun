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
				<span class="teableCell">机构详情</span>
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
					<span class="hospital-name">成都八一军区骨科体检医院</span>
					<span class="hospital-type">公立医院</span>
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
			<!-- MedicalPackage -->
			<div class="MedicalPackage">
				<div class="title">体检套餐<span class="num">（10个）</span></div>
				<div class="content">
					<div class="hp-box-list-normal">
						<div class="hp-list-img">
							<a href="#">
								<img src="../../assets/images/health/list-img.png" />
							</a>
						</div>
						<div class="hp-list-describe">
							<p class="title">长寿泉护理床家用手动电动多功 能医用床 手电一体热销款D03</p>
							<p class="price">¥ 3480.00</p>
						</div>
					</div>
					<div class="hp-box-list-normal">
						<div class="hp-list-img">
							<a href="#">
								<img src="../../assets/images/health/list-img.png" />
							</a>
						</div>
						<div class="hp-list-describe">
							<p class="title">长寿泉护理床家用手动电动多功 能医用床 手电一体热销款D03</p>
							<p class="price">¥ 3480.00</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'organizationDetail'
	}
</script>

<style>
	.Globals{background: #F5F5F5;}
	.detail-box{}
	/* detail-box-info */
	.detail-box .detail-box-info .info-img img{display:block;width: 100%;}
	.detail-box .detail-box-info .info-box{padding: 0 4%;background: #FFFFFF;height:50px;line-height:50px;}
	.detail-box .detail-box-info .info-box .hospital-name{font-weight: bold;font-size: 15px;}
	.detail-box .detail-box-info .info-box .hospital-type{font-size: 12px;border: 1px solid #E9E9E9;color: #0FCF14;border-radius: 8px;padding: 0 6px;margin-left: 10px;}
	/* detail-box-timeAdr */
	.detail-box-timeAdr{background: #FFFFFF;margin-top: 3%;padding: 0 4%;}
	.detail-box-timeAdr .hospital-time{border-bottom: 1px solid #F0F1F1;}
	.detail-box-timeAdr .hospital-time, .detail-box-timeAdr .hospital-address{height:50px;line-height:50px;overflow: hidden;position: relative;}
	.detail-box-timeAdr .title{color: #989DA0;float: left;width: 75px;position: absolute;left: 0;}
	.detail-box-timeAdr .content{overflow: hidden; float: left;width: 100%;padding: 0 25px 0 75px;}
	.detail-box-timeAdr .hospital-address .content{background: url(../../assets/images/detail/adr.png)no-repeat;background-size: 16px;background-position: right 17px;
	display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;overflow: hidden; }
	/* MedicalPackage */
	.MedicalPackage{padding: 3% 4%;background: #FFFFFF;margin-top: 3%;}
	.MedicalPackage .title{font-weight: bold;}
	.MedicalPackage .title .num{margin-left: 5px;font-weight: normal;}
	/* content */
	.MedicalPackage .hp-box-list-normal{width: 100%;overflow: hidden;border-bottom: 1px solid #F0F1F2;padding: 4% 0;}
	/*产品图片*/
	.MedicalPackage .hp-box-list-normal .hp-list-img{width: 35%; float: left;}
	.MedicalPackage .hp-box-list-normal .hp-list-img a{position: relative;display: block;width: 100%;padding: 34% 0;overflow: hidden;text-align: center;}
	.MedicalPackage .hp-box-list-normal .hp-list-img a img{position: absolute;left: 0;top: 0;width: 100%;}
	/*产品描述*/
	.MedicalPackage .hp-box-list-normal .hp-list-describe{padding: 0 10px;width: 65%; float: left;}
	.MedicalPackage .hp-box-list-normal .hp-list-describe .title{line-height: 18px;margin: 5px 0; font-size: 12px;
	display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;}
	.MedicalPackage .hp-box-list-normal .hp-list-describe .price{color: #FE4626;font-weight: bold;font-size: 14px;margin: 3px 0;}
	.MedicalPackage .hp-box-list-normal .hp-list-describe .evaluate{color: #BBBFC2;font-size: 12px;line-height: 20px;}
	.MedicalPackage .hp-box-list-normal .hp-list-describe .evaluate span{margin-right: 10px;}


</style>
