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
				<span class="teableCell">填写订单</span>
			</el-col> 
			<el-col :span="4"></el-col>
		</el-row>  
		<!--内容-->
		<div class="order-box">
			<!-- 商品信息 -->
			<div class="goods-info">
				<div class="hospital-name">成都八一军区骨科体检医院</div>
				<div class="hospital-info clearfix">
					<div class="hospital-img">
						<a href="javascript:void(0)">
							<img src="../../assets/images/order/n-img.png" />
						</a>
					</div>
					<div class="hospital-describe">
						<p class="describe-title">长寿泉护理床家用手动电动多功 能医用床 手电一体热销款D03长寿泉护理床家用手动电动多功长寿泉护理床家用手动电动多功</p>
						<p class="describe-price clearfix"> 
							<span class="price">¥3480.00</span>
							<span class="num">×1</span>
						</p>
					</div>
				</div>
				<div class="buy-num clearfix">
					<span class="buy-num-name">购买数量</span>
					<div class="buy-num-box clearfix">
						<div class="reduce">
							<i class="icon iconfont icon-jian"></i>
						</div>
						<div class="num">1</div>
						<div class="add on">
							<i class="icon iconfont icon-add"></i>
						</div>
					</div>
				</div>
			</div>
			<!-- 填写体检人 -->
			<div class="fill-physical">
				<p class="fill-title">填写体检人信息</p>
				<div class="physical-box">
					<div class="person">
						 <div class="line clearfix">
						 	<div class="line-title">姓名</div>
						 	<div class="input-box">
						 		<input type="text" placeholder="请输入体检人姓名" />
						 	</div>
						 </div>
						 <div class="line clearfix">
						 	<div class="line-title">性别</div>
						 	<div class="input-box">
						 		<el-radio class="genderRadio" v-model="genderRadio" label="1">男</el-radio>
  								<el-radio class="genderRadio" v-model="genderRadio" label="2">女</el-radio>
						 	</div>
						 </div>
						 <div class="line clearfix">
						 	<div class="line-title">婚否</div>
						 	<div class="input-box">
						 		<el-radio class="marryRadio" v-model="marryRadio" label="1">未婚</el-radio>
  								<el-radio class="marryRadio" v-model="marryRadio" label="2">已婚</el-radio>
						 	</div>
						 </div>
						 
						 <div class="line clearfix" style="margin-top: 3%;">
						 	<div class="line-title">手机号</div>
						 	<div class="input-box">
						 		<input type="text" placeholder="请输入体检人手机号码" />
						 	</div>
						 </div>
						 <div class="line clearfix">
						 	<div class="line-title">身份证号</div>
						 	<div class="input-box">
						 		<input type="text" placeholder="请输入18位身份证号码" />
						 	</div>
						 </div>
						 <div class="line clearfix">
						 	<div class="line-title" style=" line-height: 36px;">体检日期</div>
						 	<div class="input-box"> 
							    <el-date-picker v-model="value1" type="date" placeholder="请选择日期" :picker-options="pickerOptions0" class="chooseDate"></el-date-picker> 
						 	</div>
						 </div>
					</div> 
				</div>
			</div>
			<!-- 填写联系人-->
			<div class="fill-contact">
				<p class="fill-title">填写联系人信息</p>
				<div class="contact-box">
					<div class="line clearfix">
					 	<div class="line-title">姓名</div>
					 	<div class="input-box">
					 		<input type="text" placeholder="请输入联系人姓名" />
					 	</div>
					 </div>
					 <div class="line clearfix">
					 	<div class="line-title">手机号</div>
					 	<div class="input-box">
					 		<input type="text" placeholder="请输入联系人手机号码" />
					 	</div>
					 </div>
				</div>
			</div>
		</div>
		 
			<el-row class="footer">
				<el-col :span="15" class="total">
					合计<span>￥999</span>
				</el-col>
				<el-col :span="9" class="submit">
					<a href="javascript:void(0);">提交订单</a>
				</el-col>
			</el-row>
		
	</div> 
</template>

<script>
	export default{
		name : 'FillOrder',
		data(){
			return{
				genderRadio:'1',
				marryRadio:'1',
				pickerOptions0: {
		          disabledDate(time) {
		            return time.getTime() < Date.now() - 8.64e7;
		          }
		        },
				value1: '',
        		value2: '',
			}
		}
	}
</script>

<style scoped>  
	.order-box{padding-bottom: 30%;}
	/*goods-info */
	.goods-info{background: #FFFFFF;font-size: 14px;margin: 0 4%;}
	/**/
	.hospital-name{padding: 3% 0 3% 28px;background: url(../../assets/images/order/hospital-img.png)no-repeat left center;background-size: 18px;}
	/**/
	.hospital-info{border-top: 1px solid #F1F2F3;border-bottom: 1px solid #F1F2F3;padding: 4% 3%;}
	.hospital-info .hospital-img{float: left;width: 35%;}
	.hospital-info .hospital-img a{position: relative;display: block;width: 100%; padding: 33% 0;overflow: hidden;border-radius: 5px;}
	.hospital-info .hospital-img a img{position: absolute;top: 0;left: 0;width: 100%;}
	.hospital-info .hospital-describe{float: left;width: 65%;padding-left: 15px;}
	.hospital-info .hospital-describe .describe-title{font-size: 13px;
	display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;}
	.hospital-info .hospital-describe .describe-price{margin-top: 5%;font-size: 16px;}
	.hospital-info .hospital-describe .describe-price .price{color: #FE2D09;float: left;font-weight: bold;}
	.hospital-info .hospital-describe .describe-price .num{float: right;} 
	/**/
	.buy-num{padding: 3% 0;} 
	.buy-num .buy-num-name{float: left;line-height: 25px;}
	.buy-num .buy-num-box{float: right; }
	.buy-num .buy-num-box div{float: left;height: 25px;width: 25px;text-align: center;border-radius: 5px;}
	.buy-num .buy-num-box .reduce, .buy-num .buy-num-box .add{border: 2px solid #17AAE7;} 
	.buy-num .buy-num-box .num{width: 40px;line-height: 25px;}
	.buy-num .buy-num-box .on{background: #17AAE7;color: #FFFFFF;}
	/**/
	.fill-title{padding: 3% 4%;background: #F5F5F5;color: #797F84;}
	/*fill-physical */ 
	.fill-physical .physical-box{ background: #F5F5F5;} 
	.line{border-bottom: 1px solid #F1F2F3;padding: 3% 4%;background: #FFFFFF;}
	.line .line-title{width: 30%;float: left;}
	.line .input-box{width: 70%;float: left;}
	.line .input-box input{width: 100%;height: 100%;font-family: "微软雅黑";border: none;}  
	.line .input-box .marryRadio, .line .input-box .genderRadio{margin: 0;width: 35%;}  
	.line .input-box .el-input__inner{font-size: 14px;border: 1px solid #A9A9A9;}
	/*fill-contact */
	.fill-contact .contact-box{}
	
	/* footer */
	.footer{background: #F5F5F5;height: 50px;line-height: 50px;font-size: 16px; position: fixed;bottom: 0;left: 0;border-top: 1px solid #EEEEEE;width: 100%;text-align: center;box-shadow: -3px -3px 6px #F5F5F5;}
	.footer .total span{font-weight: bold;color: #FE2D09;margin-left: 20px;}
	.footer .submit a{color: #FFFFFF;background:#0B90FD;display: block;
	background: -webkit-linear-gradient(left , #0B90FD ,#58E5F5);
	background: -o-linear-gradient(right , #0B90FD ,#58E5F5);
	background: -moz-linear-gradient(right , #0B90FD ,#58E5F5);
	background: linear-gradient(to right , #0B90FD ,#58E5F5);}
	  
</style>