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
				<span class="teableCell">订单提交</span>
			</el-col> 
			<el-col :span="4"></el-col>
		</el-row>  
		<!--内容-->
		<div class="order-box x_order-state">
			<div class="displayTable state-img"> 
				<img src="../../assets/images/order/pic.png" /> 
			</div>
			<p class="state-title">订单提交成功！</p>
			<p class="state-prompt">请在24小时内完成支付，逾期系统将自动取消订单</p>
			<p class="order-num">订单号：CD2017230100001</p>
			<div class="state-button">去支付</div>
		</div>
		
	</div> 
</template>

<script> 
	export default{
		name : 'SubmitOrder'
	}
</script>

<style scoped>
	.order-box{width: 100%;height: auto;text-align: center;padding: 1px 7%;}
	/* state img */
	.state-img{width: 100%;padding: 15% 28%;} 
	.state-img img{display: block;margin: 0 auto;width: 100%;}
	/* state content */
	.state-title, .state-prompt, .order-num, .state-button{overflow: hidden;}
	.state-title{font-size: 20px;color: #000;font-weight: bold;letter-spacing: 2px;}
	.state-prompt{font-size: 14px;color: #787F84;line-height: 22px;padding: 5% 0;}
	.order-num{font-size: 16px;color: #202121;line-height: 22px;padding: 4% 0;}
	.state-button{font-size: 18px;color: #FFFFFF;padding: 4% 0;border-radius: 5px;margin: 20% 0;background:#0B90FD;
	background: -webkit-linear-gradient(left , #0B90FD ,#58E5F5);
	background: -o-linear-gradient(right , #0B90FD ,#58E5F5);
	background: -moz-linear-gradient(right , #0B90FD ,#58E5F5);
	background: linear-gradient(to right , #0B90FD ,#58E5F5);}  
</style>