<template>
	<div class="Globals">
		<div class="head">
			<img src="../../assets/images/personalCenter/head-bg.png" />
			<span @click="$router.go(-1)">
				<i class="icon iconfont icon-fanhui"></i>
			</span>
		</div>
		<div class="archivesDetail-box">
			<div class="back" @click="$router.go(-1)">
				<i class="icon iconfont icon-fanhui"></i>
			</div>
			<!-- 我的入职体检报告 -->
			<div class="person-info">
				<p class="info-title">我的入职体检报告</p>
				<div class="info-content">
					<p class="ct-line">
						<span class="title">姓名：</span>
						<span class="value">杨阳洋</span>
					</p>
					<p class="ct-line">
						<span class="title">性别：</span>
						<span class="value">男</span>
					</p>
					<p class="ct-line">
						<span class="title">年龄：</span>
						<span class="value">24</span>
					</p>
					<p class="ct-line">
						<span class="title">体检机构：</span>
						<span class="value">成都八一军区骨科医院体检中心 </span>
					</p>
					<p class="ct-line">
						<span class="title">机构地址：</span>
						<span class="value">成都市武侯区武都路38号</span>
					</p>
					<p class="ct-line">
						<span class="title">就诊日期：</span>
						<span class="value">2017-06-23</span>
					</p>
				</div>
			</div>
			<!-- 档案附件 -->
			<div class="person-files">
				<p class="files-title">档案附件</p>
				<div class="files-content">
					<img src="../../assets/images/detail/detail-img.png" />  
				</div>
			</div> 
		</div> 
	</div>
</template>

<script>
</script>

<style scoped>
	
	/* .archivesDetail-box */ 
	.Globals{position: relative;background: #F0F1F1;height: auto;padding-bottom: 3%;min-height: 100%;}
	.Globals .head{position: absolute;top: 0;left: 0; width: 100%;z-index: 1;}
	.Globals .head img{width: 100%;display: block;} 
	.Globals .head span{position: absolute;top: 10px;left: 4%;} 
	/* person-info */
	.archivesDetail-box{padding: 23% 4% 0 4%;position: relative;z-index: 10;}
	.archivesDetail-box .back{position: absolute;top: 10px;left: 4%;z-index: 20;}
	.archivesDetail-box .person-info{background: #FFFFFF;border-radius: 5px;}
	.archivesDetail-box .person-info .info-title{border-bottom: 1px solid #E2E4E5;text-align: center;font-weight: bold;font-size: 16px;line-height: 30px;padding: 10px 0;}
	.archivesDetail-box .person-info .info-content{padding: 10px 8%;}
	.archivesDetail-box .person-info .ct-line{color: #72797e;font-size: 15px;padding: 6px 0;line-height: 28px;} 
	/* person-files */
	.archivesDetail-box .person-files .files-title{font-weight: bold;font-size: 15px;line-height: 30px;padding: 18px 0 0 0;}
	.archivesDetail-box .person-files .files-content{font-size: 0;}
	.archivesDetail-box .person-files .files-content img{width: 30%;margin:  5px;}
	
</style>