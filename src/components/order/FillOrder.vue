<template>
	<div class="Globals">
		<!-- 头部 -->
		<el-row class="health-top">
			<el-col :span="4" class="search-box displayTable">
				<p class="teableCell">
					<i class="icon iconfont icon-fanhui" style="font-size: 20px;" @click='$router.go(-1)'></i>
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
				<div class="hospital-name">{{getMechanismData.name}}</div>
				<div class="hospital-info clearfix">
					<div class="hospital-img">
						<a href="javascript:void(0)">
							<img :src="img+getPackageData.image" />
						</a>
					</div>
					<div class="hospital-describe">
						<p class="describe-title">{{getPackageData.name}}</p>
						<p class="describe-price clearfix">
							<span class="price">{{teamPrice}}</span>
							<span class="num">×{{goodsNum}}</span>
						</p>
					</div>
				</div>
				<div class="buy-num clearfix">
					<span class="buy-num-name">购买数量</span>
					<div class="buy-num-box clearfix">
						<div class="reduce">
							<i class="icon iconfont icon-jian" @click="subtract"></i>
						</div>
						<div class="num">
							<input type="text" v-model="goodsNum" :value="goodsNum" maxlength="2" @blur="changeNum(goodsNum)" />
						</div>
						<div class="add on">
							<i class="icon iconfont icon-add" @click="add"></i>
						</div>
					</div>
				</div>
			</div>
			<!-- 填写体检人 -->
			<div class="fill-physical" v-for="personNum in goodsNum">
				<p class="fill-title">填写体检人信息</p>
				<div class="physical-box">
					<div class="person">
						<div class="line clearfix">
							<div class="line-title">姓名</div>
							<div class="input-box">
								<input type="text" placeholder="请输入体检人姓名" maxlength="15" class="personName" />
							</div>
						</div>
						<div class="line clearfix">
							<div class="line-title">性别</div>
							<div class="input-box Radio gender">
								<label><input type="radio" :name="gender+personNum" value="1" checked/>男</label>
								<label><input type="radio" :name="gender+personNum" value="0"/>女</label>
							</div>
						</div>
						<div class="line clearfix">
							<div class="line-title">婚否</div>
							<div class="input-box Radio marry">
								<label><input type="radio" :name="marry+personNum" value="1" checked/>已婚</label>
								<label><input type="radio" :name="marry+personNum" value="0"/>未婚</label>
							</div>
						</div>
						<div class="line clearfix">
							<div class="line-title">手机号</div>
							<div class="input-box">
								<input type="text" placeholder="请输入体检人手机号码" maxlength="11" class="personPhone" />
							</div>
						</div>
						<div class="line clearfix">
							<div class="line-title">身份证号</div>
							<div class="input-box">
								<input type="text" placeholder="请输入18位身份证号码" maxlength="18" class="personIdCard" />
							</div>
						</div>
						<div class="line clearfix">
							<div class="line-title" style=" line-height: 36px;">体检日期</div>
							<div class="input-box selectDate">
								<el-date-picker v-model="value1" :id="dateId+personNum" type="date" placeholder="请选择日期" :picker-options="pickerOptions0" class="chooseDate"></el-date-picker>
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
							<input type="text" placeholder="请输入联系人姓名" maxlength="15" class="contactName" />
						</div>
					</div>
					<div class="line clearfix">
						<div class="line-title">手机号</div>
						<div class="input-box">
							<input type="text" maxlength="11" placeholder="请输入联系人手机号码" class="contactPhone" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<el-row class="footer">
			<el-col :span="15" class="total">
				合计<span>￥{{teamPrice*goodsNum}}</span>
			</el-col>
			<el-col :span="9" class="submits">
				<a href="javascript:void(0);" @click='submit'>提交订单</a>
			</el-col>
		</el-row>

	</div>
</template>

<script>
	import $ from 'jquery'
	import { imgBaseUrl } from '../../conifg/production'
	import { isNullVal } from '../../conifg/comm.js'
	import { submitOrderNow } from '../../conifg/getData'

	export default {
		name: 'FillOrder',
		data() {
			return {
				gender: 'gender',
				marry: 'marry',
				pickerOptions0: {
					disabledDate(time) {
						return time.getTime() < Date.now() - 8.64e7;
					}
				},
				value1: '',
				value2: '',
				getMechanismData: '',
				getPackageData: '',
				img: imgBaseUrl,
				goodsNum: '1',
				teamPrice: '',
				dateId: 'dateId',
				datelist: '',
				checkSubmit: true
			}
		},
		mounted() {
			let a = localStorage.getItem('packageData');
			let packageData = JSON.parse(a);
			console.log(a);
			this.getPackageData = packageData;
			this.teamPrice = packageData.teamPrice;
			//    console.warn(a);
			let ass = localStorage.getItem("mechanismData");
			let mechanismData = JSON.parse(ass);
			console.log(ass + 'getMechanismData');
			this.getMechanismData = mechanismData;

		},
		methods: {
			submit() { 
				//this.$router.push('/SubmitOrder');
				var packageData = JSON.parse(localStorage.getItem("packageData")); 

				var details = new Array();
				$.each($('.fill-physical'), function(i, item) {  
					/* 体检人姓名 */
					var personName = $(item).find('.personName').val();
					if(personName == null || personName == "" || personName == undefined) { 
						alert('体检人姓名不能为空'); 
						return false;
					} else {
						//只能输入字母或汉字
						if(/[^\a-zA-Z\u4E00-\u9FA5]/g.test(personName)) {
							personName.replace(/[^\a-zA-Z\u4E00-\u9FA5]/g, '');
							alert('体检人姓名为中文或英文');
							return false;
						}
					}
					/* 体检人电话 */
					var personPhone = $(item).find('.personPhone').val();
					if(personPhone == null || personPhone == "" || personPhone == undefined) {
						alert("手机号不能为空");
						return false;
					} else {
						if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(personPhone))) {
							alert("手机号码格式不正确");
							return false;
						}
					}
					/* 体检人身份证 */
					var personIdCard = $(item).find('.personIdCard').val();
					if(personIdCard == null || personIdCard == "" || personIdCard == undefined) {
						alert("身份证不能为空"); 
						return false;
					} else {
						if(!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(personIdCard))) {
							alert('身份证输入不合法');
							return false;
						}
					}
					//选择日期
					var dateApp;
					var selectDate = $(item).find('.selectDate').find('input').val();
					if(selectDate == null || selectDate == "" || selectDate == undefined) {
						alert("体检日期不能为空");
						return false;
					} 
					if($(item).find(".selectDate").html().match(/^\d{4}-\d{2}(-\d{2})?$/) != null) {
						dateApp = $(item).find(".selectDate").html() + ' 00:00:00';
					}
					/* 体检人性别 */
					var sexVal = $('.gender input:radio:checked').val();
					/* 婚姻 */
					var marry = $('.marry input:radio:checked').val();
					
					details.push({
						medicalPlanId: packageData.id, // 套餐id
						name: personName, //体检人名字
						sex: sexVal, //体检人性别
						maritalStatus: marry, //婚姻
						appointmentTime: dateApp, //日期
						phone: personPhone, //体检人手机号
						idCard: personIdCard, //身份证
						isToContacts: 0
					}); 
					
				}); 
				console.log(details);
				
				/* 联系人姓名 */
				var contactName = $('.contactName').val();
				if(contactName == null || contactName == "" || contactName == undefined) {
					alert('联系人姓名不能为空'); 
					return false;
				} else {
					//只能输入字母或汉字
					if(/[^\a-zA-Z\u4E00-\u9FA5]/g.test(contactName)) {
						contactName.replace(/[^\a-zA-Z\u4E00-\u9FA5]/g, '');
						alert('联系人姓名为中文或英文');
						return false;
					}
				} 
				
				/* 联系人手机号 */
				var contactPhone = $('.contactPhone').val();
				if(contactPhone == null || contactPhone == "" || contactPhone == undefined) {
					alert("手机号不能为空");
					return false;
				} else {
					if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(contactPhone))) {
						alert("手机号码格式不正确");
						return false;
					}
				}  
				var orderRequest = {
					people: contactName,
					phone: contactPhone,
					details: details
				}
				
				console.log(JSON.stringify(orderRequest));
				
				submitOrderNow(JSON.stringify(orderRequest)).then(res => {
					console.log(res)
				});
				 
				
				

			},
			//点击加
			add: function() {
				if(this.goodsNum >= 99) {
					this.goodsNum = 99;
				} else {
					this.goodsNum++;
				}
			},
			//点击减
			subtract: function() {
				if(this.goodsNum <= 1) {
					this.goodsNum = 1;
				} else {
					this.goodsNum--;
				}
			},
			changeNum: function(a) {
				if(this.goodsNum <= 1 || this.goodsNum == undefined || this.goodsNum == null) {
					this.goodsNum = 1;
				} else {
					this.goodsNum = parseInt(a);
				}
			}
			/*,
						jisuan: function(){
							let chooseDate = document.getElementsByClassName('chooseDate'); 
							let Obj = {};
			      	for(let i=0;i<chooseDate.length;i++){  
			      		Obj[i] = chooseDate[i].attributes.id.value; 
			      	}
			      	this.datelist = Obj; 
			      	console.log(JSON.stringify(this.datelist));
						}*/

		}
	}
</script>

<style scoped>
	.order-box {
		padding-bottom: 30%;
	}
	/*goods-info */
	
	.goods-info {
		background: #FFFFFF;
		font-size: 14px;
		padding: 0 4%;
	}
	/**/
	
	.hospital-name {
		padding: 3% 0 3% 28px;
		background: url(../../assets/images/order/hospital-img.png)no-repeat left center;
		background-size: 18px;
	}
	/**/
	
	.hospital-info {
		border-top: 1px solid #F1F2F3;
		border-bottom: 1px solid #F1F2F3;
		padding: 4% 3%;
	}
	
	.hospital-info .hospital-img {
		float: left;
		width: 35%;
	}
	
	.hospital-info .hospital-img a {
		position: relative;
		display: block;
		width: 100%;
		padding: 33% 0;
		overflow: hidden;
		border-radius: 5px;
	}
	
	.hospital-info .hospital-img a img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
	
	.hospital-info .hospital-describe {
		float: left;
		width: 65%;
		padding-left: 15px;
	}
	
	.hospital-info .hospital-describe .describe-title {
		font-size: 13px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	
	.hospital-info .hospital-describe .describe-price {
		margin-top: 5%;
		font-size: 16px;
	}
	
	.hospital-info .hospital-describe .describe-price .price {
		color: #FE2D09;
		float: left;
		font-weight: bold;
	}
	
	.hospital-info .hospital-describe .describe-price .num {
		float: right;
	}
	/**/
	
	.buy-num {
		padding: 3% 0;
	}
	
	.buy-num .buy-num-name {
		float: left;
		line-height: 25px;
	}
	
	.buy-num .buy-num-box {
		float: right;
	}
	
	.buy-num .buy-num-box div {
		float: left;
		height: 25px;
		line-height: 21px;
		width: 25px;
		text-align: center;
		border-radius: 5px;
	}
	
	.buy-num .buy-num-box .reduce,
	.buy-num .buy-num-box .add {
		border: 2px solid #17AAE7;
	}
	
	.buy-num .buy-num-box .num {
		width: 40px;
		line-height: 25px;
	}
	
	.buy-num .buy-num-box .num input {
		width: 100%;
		height: 100%;
		text-align: center;
		border: none;
	}
	
	.buy-num .buy-num-box .on {
		background: #17AAE7;
		color: #FFFFFF;
	}
	/**/
	
	.fill-title {
		padding: 3% 4%;
		background: #F5F5F5;
		color: #797F84;
	}
	/*fill-physical */
	
	.fill-physical .physical-box {
		background: #F5F5F5;
	}
	
	.line {
		border-bottom: 1px solid #F1F2F3;
		padding: 3% 4%;
		background: #FFFFFF;
	}
	
	.line .line-title {
		width: 30%;
		float: left;
	}
	
	.line .input-box {
		width: 70%;
		float: left;
	}
	
	.line .input-box input[type=text] {
		width: 100%;
		height: 100%;
		font-family: "微软雅黑";
		border: none;
	}
	
	.line .Radio label {
		width: 35%;
		display: inline-block;
	}
	
	.line .Radio label input[type=radio] {
		vertical-align: middle;
		margin-right: 10px;
	}
	
	.line .input-box .el-input__inner {
		font-size: 14px;
		border: 1px solid #A9A9A9;
	}
	/*fill-contact */
	
	.fill-contact .contact-box {}
	/* footer */
	
	.footer {
		background: #F5F5F5;
		height: 50px;
		line-height: 50px;
		font-size: 16px;
		position: fixed;
		bottom: 0;
		left: 0;
		border-top: 1px solid #EEEEEE;
		width: 100%;
		text-align: center;
		box-shadow: -3px -3px 6px #F5F5F5;
	}
	
	.footer .total span {
		font-weight: bold;
		color: #FE2D09;
		margin-left: 20px;
	}
	
	.footer .submits a {
		color: #FFFFFF;
		background: #0B90FD;
		display: block;
		width: 100%;
		background: -webkit-linear-gradient(left, #0B90FD, #58E5F5);
		background: -o-linear-gradient(right, #0B90FD, #58E5F5);
		background: -moz-linear-gradient(right, #0B90FD, #58E5F5);
		background: linear-gradient(to right, #0B90FD, #58E5F5);
	}
</style>