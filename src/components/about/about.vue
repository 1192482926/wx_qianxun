<template>
	<div class="Globals"> 
		<div class="head">
			<img src="../../assets/images/personalCenter/head-bg.png" /> 
		</div>
		
		<div class="content">
			<div class="back" @click="$router.go(-1)">
				<i class="icon iconfont icon-fanhui"></i>
			</div>
			<div class="company">
				<div class="logo-box">
					<img src="../../assets/images/about/logo.png" />
				</div>
				<div class="name">芊浔 - 专业健康管理平台</div>
				<div class="Website">
					<a href="#">http://www.yeafon.com</a>
				</div>
			</div>
			
			<div class="introduce">
				<div>我们是专业从事高科技医疗产品销售主攻信息化及智慧医院建设的信息科技公司。</div> 
				<p>我们的医疗器械产品涉及麻醉科、ICU、妇科等，以及拥有集互联网推广，客户终端服务为一体的线上营销平台。</p>
				<p>公司秉承弘毅、博信、崇优、共享的宗旨，集互联网推广，客户终端服务为一体的营销平台，我们深知“独木难以成舟，抱团可行沧海，思路决定出路”。
					唯有以技术引领方向，以项目带动发展，以理念培育市场，才符合市场发展的规律。</p>
				<p>现面向社会招聘精英业务人员，公司待遇优厚，空间大，前景好，符合社会信息化建设的大趋势，期待精英人士加入。  </p> 
			</div>
			
			<div class="contact">
				<p class="title">- 联系我们 -</p>
				<div class="contact-list list-address">地址：四川省成都市高新区布鲁明顿广场</div>
				<div class="contact-list list-phone">电话：028-61382243</div>
				<div class="contact-list list-emile">邮箱：scyf@yeafon.com</div>
			</div>
		</div>
		 
	</div> 
</template>

<script>
</script>

<style scoped> 
	.Globals{position: relative;background: #F0F1F1;height: auto;padding-bottom: 3%;min-height: 100%;}
	.Globals .head{position: absolute;top: 0;left: 0; width: 100%;z-index: 1;}
	.Globals .head img{width: 100%;display: block;}  
	.back{position: absolute;top: 10px;left: 4%;z-index: 20;}
	.Globals .content{padding: 23% 4% 0 4%;position: relative;z-index: 10;}
	
	.company, .introduce, .contact{background: #FFFFFF;border-radius: 7px; position: relative;margin-bottom: 3%;padding: 3% 6%;}
	/* company */
	.company{text-align: center;padding: 7% 4% 7% 4%;}
	.company .name{color: #000000;font-size: 16px;line-height: 30px;font-weight: bold;}
	.company .Website a{color: #9badb1;font-size: 14px;line-height: 22px;}
	.company .logo-box{position: relative;margin: -26% auto 0 auto;width: 40%;}
	/* introduce */
	.introduce{}
	.introduce div{font-weight: bold;}
	.introduce div, .introduce p{margin: 15px 0;line-height: 22px;}
	.introduce p{color: #848385;}
	/* contact */
	.contact{}
	.contact .title{color: #1bb3f5;text-align: center;padding: 5px 0;}
	.contact .contact-list{border: solid 1px #EDF1F2;margin: 10px 0;line-height: 22px;padding: 5px 10px 5px 30px;font-size: 13px;width: 100%;height: 100%;}
	.contact .list-address{background: url(../../assets/images/about/icon_address.png)no-repeat;background-position: 7px 8px;background-size: 15px;}
	.contact .list-phone{background: url(../../assets/images/about/icon_phone.png)no-repeat;background-position: 7px 8px;background-size: 15px;}
	.contact .list-emile{background: url(../../assets/images/about/icon_e-mail.png)no-repeat;background-position: 7px 12px;background-size: 15px;}
	
	
</style>