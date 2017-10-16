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
						<router-link to="/updateName" class="vals headName">{{headName}}</router-link>
					</el-col>
				</el-row> 
			</div>
			<div class="userInfo-list mTop" v-on:click="blockGender">
				<el-row>
					<el-col :span="12" class="userInfo-title">性别</el-col>
					<el-col :span="12" class="userInfo-val genderVals">{{gender.vals}}</el-col>
					<div class="sel" v-show="gender.isShow"> 
					    <ul>
					    	<li @click="ChangeGender($event)">男</li>
					    	<li @click="ChangeGender($event)">女</li> 
					    </ul>
					</div>
				</el-row>  
			</div>
			<div class="userInfo-list" v-on:click="selDate">
				<el-row>
					<el-col :span="12" class="userInfo-title">出生日期</el-col>
					<el-col :span="12" class="userInfo-val"> 
						<div class="sel-date"> 
							<mu-date-picker v-model="selectDate.valDate" :hintText="selectDate.valDate" :maxDate="selectDate.maxDate" /> 
						</div> 
					</el-col>
				</el-row> 
			</div>
			<div class="userInfo-list" v-on:click="blockMarry">
				 <el-row>
					<el-col :span="12" class="userInfo-title" id="dd">婚姻状态</el-col>
					<el-col :span="12" class="userInfo-val marryVals">{{marry.vals}}</el-col>
					<div class="sel" v-show="marry.isShow"> 
					    <ul>
					    	<li @click="ChangeMarry($event)">未婚</li>
					    	<li @click="ChangeMarry($event)">已婚</li> 
					    </ul>
					</div>
				</el-row> 
			</div>
			<div class="userInfo-list mTop">
				 <el-row>
					<el-col :span="12" class="userInfo-title">手机号</el-col>
					<el-col :span="12" class="userInfo-phone">{{phone}}</el-col>
				</el-row> 
			</div> 
		 	<div class="save" @click="saveUserInfo">保存</div>
		</div>
	</div>
</template>

<script> 
	import logoSrc from '../../assets/images/personalCenter/head.png'
	import { upDateUser } from '../../conifg/getData'
	export default {
		name: 'userinfo',
		data() {
			return {
				logoSrc,
				headName:'', //用户名
				gender:{ //用户性别
					isShow:false,
					vals:''
				},
				marry:{ //婚配
					isShow:false,
					vals:''
				},
				selectDate:{ //出生日期
					maxDate:'', 
					valDate:''
				},
				phone:''
			}
		}, 
		mounted:function(){
			var userInfo = JSON.parse(sessionStorage.getItem("user"));
			/* 用户名 */
			if(!localStorage.getItem('updateHeadName')){
				//获取名字
				this.headName = userInfo.name;
				localStorage.setItem('headName',this.headName);
				//console.log(localStorage.getItem('headName'));
			}else{ 
				//更改名字 
				this.headName = localStorage.getItem('updateHeadName');
				console.log(localStorage.getItem('updateHeadName'));
				//localStorage.setItem('headName',this.headName);
			}
		 	/* 性别 */ 
		 	this.gender.vals = userInfo.sex==0?"女":"男";
		 	/* 婚配 */
		 	this.marry.vals = userInfo.maritalStatus==0?"未婚":"已婚";
		 	/* 生日 */
		 	this.selectDate.valDate = (userInfo.birthday).substr(0,10);
		 	/* 电话 不可改*/
		 	this.phone = userInfo.phone; 
		 	console.log(sessionStorage.getItem("user")); 
		},
		methods:{
			ChangeGender:function(e) { 
		    	this.gender.vals = e.currentTarget.innerHTML;  
		    },
		    blockGender:function(){  
		    	this.gender.isShow = this.gender.isShow ? false : true ;  
		    },
		    ChangeMarry:function(e) { 
		    	this.marry.vals = e.currentTarget.innerHTML;  
		    },
		    blockMarry:function(){  
		    	this.marry.isShow = this.marry.isShow ? false : true ;  
		    },
		    selDate:function(){
		    	var Datas = new Date();
		    	var DatasYear = Datas.getFullYear();
		    	var DatasMouth = Datas.getMonth()+1;
		    	var DatasDay = Datas.getDate(); 
		    	var returnDatas = DatasYear+"-"+DatasMouth+"-"+DatasDay; 
		    	this.selectDate.maxDate = returnDatas;
		    },
		    /* 保存 修改信息*/
		    saveUserInfo:function(){
		    	var name = this.headName;
				var sex = this.gender.vals=="男"?1:0;
				//var birthday = this.selectDate.valDate.substr(0,10);
				var birthday = (document.getElementsByClassName('mu-text-field-hint')[0].innerHTML).trim();
				//JSON.parse(sessionStorage.getItem('user')).birthday ? JSON.parse(sessionStorage.getItem('user')).birthday.substr(0,10): "" 
				var maritalStatus = this.marry.vals=="未婚"?0:1;
				console.log(birthday);
		    	upDateUser(name, sex, birthday, maritalStatus).then(rep => {
		    		//console.log(rep);
		    	})
		    }
		    
		} 
	}  
	
</script>

<style>   
	.Globals{background: rgb(240,241,241);}
	/* 本页内容包  .userInfo-box */
	.userInfo-box .el-row{margin: 0!important;}
	.userInfo-box .mTop{margin-top: 10px;}  
	/* 插件样式 */ 
	.userInfo-box .userInfo-list .mu-item{padding: 0;min-height: 60px;} 
	.userInfo-box .userInfo-list .mu-item-left, 
	.userInfo-box .userInfo-list .mu-item-right{width: 60px;}
	.userInfo-box .userInfo-list .mu-avatar{width: 60px;height: 60px;}
	/* 插件样式 end */
	.userInfo-box .userInfo-list{background: #FFFFFF;font-size: 16px;border-bottom: 1px solid #F0F1F1;padding: 15px 4%;position: relative;}
	.userInfo-box .userInfo-list .el-col{}
	.userInfo-box .userInfo-list .userInfo-title{text-align: left;}
	.userInfo-box .userInfo-list .userInfo-val{text-align: right;padding-right: 25px;
	background: url(../../assets/images/personalCenter/icon_arrow-right.png)no-repeat right center;background-size: 7px; }
	.userInfo-box .userInfo-list .vals{color: #000;}
	.userInfo-box .userInfo-list .userInfo-phone{text-align: right;color: #a7acaf;padding-right: 25px;} 
	.userInfo-box .sel{position: absolute;top: 40px;left: 0;z-index: 222;width: 100%;box-shadow: 0 3px 5px #ccc;font-size: 14px;}
	.userInfo-box .sel li{background: #FFFFFF; border-bottom: 1px solid #F0F1F1;line-height: 40px;text-align: center;}
	.userInfo-box .save{margin: 40px auto; width: 90%;color: #FFFFFF;display: block;text-align: center;height: 45px;line-height: 45px;font-size: 16px;
   	background: #0B90FD;border-radius: 6px;
   	background: -webkit-gradient(linear , left top, right top , from(#0B90FD) ,to(#58E5F5));
    background: linear-gradient(to right , #0B90FD ,#58E5F5);}
	/* sel-date */ 
	.userInfo-box .sel-date .mu-text-field-line{height: 0;}
	.userInfo-box .sel-date .mu-text-field-content{padding: 0;}
	.userInfo-box .sel-date .mu-date-picker{width: 100%;}
	.userInfo-box .sel-date .mu-text-field{width: 100%;min-height: 0;margin: 0;}
	.userInfo-box .sel-date .mu-text-field-hint{line-height: 0;}
	.userInfo-box .sel-date .mu-text-field-input{text-align: right;height: 100%;}
	.mu-dialog-body{font-family: "微软雅黑";}
	.mu-date-display{background-color: #0B90FD; } 
	.mu-day-button-bg{background-color: #0B90FD; }
	.mu-flat-button-primary{color: #0B90FD;} 
	/* sel-date end */
</style>