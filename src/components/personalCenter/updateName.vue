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
		<div class="updateName-box">
			  <p class="update-title">修改姓名</p>
			  <div class="update-box">
			  	<input type="text" placeholder="杨阳洋xqzr001"/>
			  </div>
		</div>
		
	</div>
</template>

<script>
</script>

<style scoped>
	.Globals{background: rgb(240,241,241);}
	/* 本页内容包  .updateName-box */
	.updateName-box{}
	.updateName-box .mTop{margin-top: 10px;} 
	.updateName-box .update-title{font-size: 15px; line-height: 40px;padding: 15px 4% 0 4%;}  
	.updateName-box .update-box{}  
	.updateName-box .update-box input{border: none;width: 100%;height: 50px;line-height: 50px;padding: 0 4%;font-size: 14px;}  
	
</style>