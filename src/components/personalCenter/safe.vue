<template>
	<div class="Globals">
		<!-- 头部 -->
		<div class="health-top">
			<el-row>
				<el-col :span="4" class="search-box displayTable">
					<p class="teableCell">
						<i class="icon iconfont icon-fanhui" style="font-size: 20px;" @click="$router.go(-1)"></i>
					</p>
				</el-col>
				<el-col :span="16" class="health-name displayTable">
					<span class="teableCell">账户安全</span>
				</el-col>
				<el-col :span="4"></el-col>
			</el-row>
		</div> 
		<div class="safe-box">
			<div class="userInfo-list mTop"> 
				<router-link to="/updatePhoneNum">
					<el-row>
						<el-col :span="12" class="userInfo-title">修改手机号</el-col>
						<el-col :span="12" class="userInfo-val">
							<span class="vals">18202810945</span> 
						</el-col>
					</el-row> 
				</router-link>
			</div>
			<div class="userInfo-list">
				<router-link to="/updatePassword">
					<el-row>
						<el-col :span="24" class="userInfo-title">修改密码</el-col> 
					</el-row>
				</router-link>
			</div>
		</div> 
	</div> 
</template>

<script>
</script>

<style scoped>
	.Globals{background: rgb(240,241,241);}
	/* 本页内容包  .safe-box */
	.safe-box{font-size: 14px;}
	.safe-box .mTop{margin-top: 10px;}  
	.safe-box .userInfo-list{background: #FFFFFF;font-size: 16px;border-bottom: 1px solid #F0F1F1;padding: 15px 4%;}
	.safe-box .userInfo-list a{color: #000000;}
	.safe-box .userInfo-list .el-col{}
	.safe-box .userInfo-list .userInfo-title{text-align: left;}
	.safe-box .userInfo-list .userInfo-val{text-align: right;padding-right: 25px;
	background: url(../../assets/images/personalCenter/icon_arrow-right.png)no-repeat right center;background-size: 7px; }
	.safe-box .userInfo-list .vals{color: #a7acaf;}
</style>