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
					<span class="teableCell">个人资料</span>
				</el-col>
				<el-col :span="4"></el-col>
			</el-row>
		</div>
		<!-- 内容 -->
		<div class="userInfo-box">
			<div class="userInfo-list mTop">
				<mu-list >
					<mu-list-item title="头像" disabled>
						<mu-avatar slot="right" :src="logoSrc" />
					</mu-list-item>
				</mu-list> 
			</div>
			<div class="userInfo-list">
				<el-row>
					<el-col :span="12" class="userInfo-title">姓名</el-col>
					<el-col :span="12" class="userInfo-val">
						<router-link to="/updateName" class="vals">杨阳洋xqzr001</router-link>
					</el-col>
				</el-row> 
			</div>
			<div class="userInfo-list mTop">
				<el-row>
					<el-col :span="12" class="userInfo-title">性别</el-col>
					<el-col :span="12" class="userInfo-val">男</el-col>
				</el-row> 
			</div>
			<div class="userInfo-list">
				<el-row>
					<el-col :span="12" class="userInfo-title">出生日期</el-col>
					<el-col :span="12" class="userInfo-val">1990-05-25</el-col>
				</el-row> 
			</div>
			<div class="userInfo-list">
				 <el-row>
					<el-col :span="12" class="userInfo-title">婚姻状态</el-col>
					<el-col :span="12" class="userInfo-val">未婚</el-col>
				</el-row> 
			</div>
			<div class="userInfo-list mTop">
				 <el-row>
					<el-col :span="12" class="userInfo-title">手机号</el-col>
					<el-col :span="12" class="userInfo-phone">未填写</el-col>
				</el-row> 
			</div> 
		</div>
	</div>
</template>

<script>
	import logoSrc from '../../assets/images/personalCenter/head.png'
	export default {
		name: 'userinfo',
		data() {
			return {
				logoSrc
			}
		}
	}
</script>

<style> 
	.Globals{background: rgb(240,241,241);}
	/* 本页内容包  .userInfo-box */
	.userInfo-box .mTop{margin-top: 10px;}  
	/* 插件样式 */ 
	.userInfo-box .userInfo-list .mu-item{padding: 0;min-height: 60px;} 
	.userInfo-box .userInfo-list .mu-item-left, 
	.userInfo-box .userInfo-list .mu-item-right{width: 60px;}
	.userInfo-box .userInfo-list .mu-avatar{width: 60px;height: 60px;}
	/* 插件样式 end */
	.userInfo-box .userInfo-list{background: #FFFFFF;font-size: 16px;border-bottom: 1px solid #F0F1F1;padding: 15px 4%;}
	.userInfo-box .userInfo-list .el-col{}
	.userInfo-box .userInfo-list .userInfo-title{text-align: left;}
	.userInfo-box .userInfo-list .userInfo-val{text-align: right;padding-right: 25px;
	background: url(../../assets/images/personalCenter/icon_arrow-right.png)no-repeat right center;background-size: 7px; }
	.userInfo-box .userInfo-list .vals{color: #000;}
	.userInfo-box .userInfo-list .userInfo-phone{text-align: right;color: #a7acaf;padding-right: 25px;}
</style>