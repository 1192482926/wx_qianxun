<template>
	<div class="Globals">
		<div class="top-bg">
			<img src="../../assets/images/personalCenter/head-bg.png" />
		</div>
		<div class="personal-box">
			<el-row class="personal-name common-bg">
				<el-col :span="10" class="head-img">
					<div class="head-img-box xym_headImg">
						<img src="../../assets/images/personalCenter/goods.png"/> 
					</div> 
				</el-col>
				<el-col :span="14" class="head-name">
					<span>婷婷123</span>
				</el-col>
			</el-row>
			<div class="personal-order common-bg">
				<el-row class="logistics">
					<el-col :span="6" class="logistics-box">
						<router-link to="">
							<p class="logistics-img">
								<img src="../../assets/images/personalCenter/Pending-payment.png"/>
							</p>
							<p class="logistics-name">待付款</p>
						</router-link>
					</el-col>
					<el-col :span="6" class="logistics-box">
						<router-link to="">
							<p class="logistics-img">
								<img src="../../assets/images/personalCenter/Receivable.png" />
							</p>
							<p class="logistics-name">待收货</p>
						</router-link>
					</el-col>
					<el-col :span="6" class="logistics-box">
						<router-link to="">
							<p class="logistics-img">
								<img src="../../assets/images/personalCenter/Completed.png"/>
							</p>
							<p class="logistics-name">已完成</p>
						</router-link>
					</el-col>
					<el-col :span="6" class="logistics-box">
						<router-link to="">
							<p class="logistics-img">
								<img src="../../assets/images/personalCenter/refund.png"/>
							</p>
							<p class="logistics-name">退货/退款</p>
						</router-link>
					</el-col>
				</el-row>
				<el-row class="find-allOrder">
					<el-col :span="24" class="finds">
						<router-link to="" class="find">查看全部订单</router-link>
					</el-col>
				</el-row>
			</div>

            <el-row class="common-bg info-list">
				<router-link to="/userinfo">
					<el-col :span="5" class="info-list-icon">
						<img src="../../assets/images/personalCenter/personal-data.png" />
					</el-col>
					<el-col :span="17" class="info-list-name"><span>个人资料</span></el-col>
					<el-col :span="2" class="info-list-right">
						<img src="../../assets/images/personalCenter/icon_arrow-right.png" />
					</el-col>
				</router-link>
			</el-row>
			<el-row class="common-bg info-list">
				<router-link to="/archives">
					<el-col :span="5" class="info-list-icon">
						<img src="../../assets/images/personalCenter/Health-records.png" />
					</el-col>
					<el-col :span="17" class="info-list-name"><span>我的健康档案</span></el-col>
					<el-col :span="2" class="info-list-right">
						<img src="../../assets/images/personalCenter/icon_arrow-right.png" />
					</el-col>
				</router-link>
			</el-row>
			<el-row class="common-bg info-list">
				<router-link to="/safe">
					<el-col :span="5" class="info-list-icon">
						<img src="../../assets/images/personalCenter/Account-security.png" />
					</el-col>
					<el-col :span="17" class="info-list-name"><span>账户安全</span></el-col>
					<el-col :span="2" class="info-list-right">
						<img src="../../assets/images/personalCenter/icon_arrow-right.png" />
					</el-col>
				</router-link>
			</el-row>

		</div> 
     <Foot></Foot>
	</div>
</template>

<script> 
import Foot from '../footer/footer.vue' 
export default {
	name: 'personalCenter',
	data(){
		return{}
	}, 
	components:{
	  Foot
	},
	mounted:function(){ 
		/* 头像宽等于高*/
		 var headImg_Height = document.getElementsByClassName('xym_headImg')[0].clientHeight;
		 document.getElementsByClassName('xym_headImg')[0].style.width = headImg_Height+'px';
	}
}  
</script> 

<style scoped> 
	.el-row {margin-bottom: 0;}
	body{background: #F0F1F1;}
	/* Globals */ 
	.Globals{position: relative;height: 100%; background: #F0F1F1;}
	/* Globals => top-bg */
	.Globals .top-bg{position: relative; width: 100%;height: auto;}
	.Globals .top-bg img{width: 100%;}
	/* Globals => personal-box */
	.personal-box{position: relative;z-index:5;top: -15%;padding: 0 5%;width:100%;height:20%;}
	.personal-box .common-bg{border-radius: 5px;background: #FFFFFF;}
	/* Globals => personal-box => personal-name*/
	.personal-box .personal-name{padding: 20px 0;height:100%;}
	.personal-box .personal-name .head-img{height: 100%;text-align: center;}
	.personal-box .personal-name .head-img .head-img-box{height: 100%;border-radius: 100%;overflow: hidden;margin: 0 auto;}
	.personal-box .personal-name .head-img .head-img-box img{height: 100%;width: 100%;}
	.personal-box .personal-name .head-name{font-size: 18px;height: 100%;display: table;overflow: hidden;text-align: left;}
	.personal-box .personal-name .head-name span{display: table-cell; vertical-align: middle;}
	/* Globals => personal-box => personal-order*/
	/* logistics */
	.personal-box .personal-order{margin: 5% 0;text-align: center;height: 100%;}
	.personal-box .personal-order .logistics{height: 70%;}
	.personal-box .personal-order .logistics .logistics-box{height: 100%;}
	.personal-box .personal-order .logistics .logistics-img{height: 30%;margin: 20% 0 17% 0;}
	.personal-box .personal-order .logistics .logistics-img img{height: 100%;}
	.personal-box .personal-order .logistics .logistics-name{overflow: hidden;font-size: 14px;height: 25%;color: #000000;}
	/* find-allOrder */
	.personal-box .personal-order .find-allOrder{height: 30%;border-top: 1px solid #F8F8F9;}
	.personal-box .personal-order .find-allOrder .finds{display: table;height: 100%;}
	.personal-box .personal-order .find-allOrder .finds .find{display: table-cell;vertical-align: middle;color: #36B5E9;font-size: 13px;}
	/*info-list*/
	.personal-box .info-list{margin-bottom: 4%;height: 38%;}
	.personal-box .info-list .info-list-icon{height: 100%;text-align: center;}
	.personal-box .info-list .info-list-icon img{height: 50%;margin-top: 20%;}
	.personal-box .info-list .info-list-name{height: 100%;display: table;color: #000;text-align: left;}
	.personal-box .info-list .info-list-name span{display: table-cell;vertical-align: middle;}
	.personal-box .info-list .info-list-right{height: 100%;text-align: center;}
	.personal-box .info-list .info-list-right img{height: 20%;margin-top: 81%;}

</style>
