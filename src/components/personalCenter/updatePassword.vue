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
					<span class="teableCell">修改密码</span>
				</el-col>
				<el-col :span="4"></el-col>
			</el-row>
		</div> 
		<div class="updatePhoneNum-box">
			<div class="userInfo-list mTop">
				 <input type="text" placeholder="旧密码" class="block"/>
			</div>
			<div class="userInfo-list">
				 <input type="text" placeholder="新密码" class="block"/>
			</div> 
			<div class="userInfo-list">
				 <input type="text" placeholder="确认新密码" class="block"/>
			</div>  
			<div class="sure">确定</div>
		</div> 
	</div> 
</template>

<script>
</script>

<style scoped>
	.Globals{background: rgb(240,241,241);}
	/* 本页内容包  .updatePhoneNum-box */
	.updatePhoneNum-box{font-size: 14px;}
	.updatePhoneNum-box .mTop{margin-top: 10px;}  
	.updatePhoneNum-box .userInfo-list{background: #FFFFFF;font-size: 16px;border-bottom: 1px solid #F0F1F1;padding: 15px 4%;font-size: 14px;}
	.updatePhoneNum-box .userInfo-list input[type=text]{height: 25px;border: none;}   
	.updatePhoneNum-box .userInfo-list .block{width: 100%;}
	.updatePhoneNum-box .sure{margin: 40px auto; width: 200px;color: #FFFFFF;display: block;text-align: center;height: 45px;line-height: 45px;font-size: 16px;
   	background: #0B90FD;border-radius: 6px;
   	background: -webkit-gradient(linear , left top, right top , from(#0B90FD) ,to(#58E5F5));
    background: linear-gradient(to right , #0B90FD ,#58E5F5);}
	
	
</style>