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
					<span class="teableCell">健康档案</span>
				</el-col>
				<el-col :span="4" class="viewtype-switch displayTable">
					<p class="teableCell">
						<router-link to="/addArchives" class="add">添加</router-link>
					</p>
				</el-col>
			</el-row>
		</div>
		<div class="archives-box">
			<mu-tabs :value="activeTab" @change="handleTabChange" class="muTabs">
				<mu-tab value="tab1" title="体检报告" />
				<mu-tab value="tab2" title="就诊病例" />
				<mu-tab value="tab3" title="基因检测" />
				<mu-tab value="tab4" title="亚健康数据" />
			</mu-tabs>
			<div v-if="activeTab === 'tab1'" class="tab-box">
				<!-- module -->
				<div class="module">
					<div class="module-head">2017年</div>
					<div class="module-content">
						<div class="line"></div>
						<div class="module-list clearfix">
							<div class="date">09/11</div>
							<div class="title">
								<div class="title-box">
									<router-link to="/archivesDetail" class="clearfix">
										<div class="title-line personal"></div>
										<div class="title-name">爱康体检报告</div>
										<div class="title-type">平台</div>
									</router-link>
								</div>
							</div>
						</div>
						<div class="module-list clearfix">
							<div class="date">09/11</div>
							<div class="title">
								<div class="title-box">
									<router-link to="/archivesDetail" class="clearfix">
										<div class="title-line platform"></div>
										<div class="title-name">上半年的体检报告</div>
										<div class="title-type">个人</div>
									</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- module end -->
				<!-- module -->
				<div class="module">
					<div class="module-head">2018年</div>
					<div class="module-content">
						<div class="line"></div>
						<div class="module-list clearfix">
							<div class="date">09/11</div>
							<div class="title">
								<div class="title-box">
									<router-link to="/archivesDetail" class="clearfix">
										<div class="title-line personal"></div>
										<div class="title-name">爱康体检报告</div>
										<div class="title-type">平台</div>
									</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- module end -->
			</div>
			<div v-if="activeTab === 'tab2'" class="tab-box">
				<h2>就诊病例</h2>
			</div>
			<div v-if="activeTab === 'tab3'" class="tab-box">
				<h2>基因检测</h2>
			</div>
			<div v-if="activeTab === 'tab4'" class="tab-box">
				<h2>亚健康数据</h2>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	import { Management } from '../../conifg/getData'
	export default {
		data() {
			return {
				activeTab: 'tab1'
			}
		},
		methods: {
			handleTabChange(val) {
				this.activeTab = val
			}
		},
		mounted() {
			Management().then(rep => {
				console.log(rep); 
				var model = rep.userFile.model; 
				$.each(model,function(i,item){  
					item.year = item.date.substr(0,4);
					item.mounth = item.date.substr(5,2);
					item.day = item.date.substr(8,2);
				}); 
				localStorage.setItem("model",JSON.stringify(rep.userFile.model)); 
				var mm = JSON.parse(localStorage.getItem("model")); 
				console.log(mm);
				 
			})
		}
	}
</script>

<style>
	.el-row {
		margin: 0;
		padding-bottom: 0;
	}
	
	.Globals {
		background: #F0F1F1;
		height: auto;
		min-height: 100%;
	}
	
	.health-top .add {
		font-size: 14px;
		color: #000;
	}
	/* archives-box */
	
	.archives-box .muTabs {
		background-color: #FFFFFF;
		color: #202121;
	}
	
	.archives-box .mu-tab-link {
		color: #202121;
	}
	
	.archives-box .mu-tab-active {
		color: #009ee2;
	}
	
	.archives-box .mu-tab-link-highlight {
		background-color: #009ee2;
	}
	/* tab-box */
	
	.archives-box .tab-box {
		padding: 3% 4%;
	}
	
	.archives-box .tab-box .module {
		/*border: 1px solid #000000;*/
		position: relative;
		font-size: 14px;
	}
	
	.archives-box .tab-box .module .module-head {
		position: relative;
		height: 26px;
		line-height: 26px;
		overflow: hidden;
		color: #72797e;
		padding-left: 35px;
		background: url(../../assets/images/archives/year.png)no-repeat;
		background-size: auto 100%;
	}
	
	.archives-box .tab-box .module .module-content {
		position: relative;
		padding: 15px 0;
	}
	
	.archives-box .tab-box .module .module-content .line {
		position: absolute;
		z-index: 1;
		top: 0;
		left: 12px;
		background-color: rgba(181, 181, 181, 1);
		width: 1px;
		height: 100%;
	}
	
	.archives-box .tab-box .module .module-list {
		position: relative;
		z-index: 2;
		height: 50px;
		line-height: 50px;
		width: 100%;
		margin-bottom: 10px;
		overflow: hidden;
		background: url(../../assets/images/archives/4.png)no-repeat;
		background-size: 12px;
		background-position: 6px center;
	}
	
	.archives-box .tab-box .module .module-list .date {
		position: absolute;
		left: 35px;
		top: 0;
		color: #202121;
		width: 52px;
		overflow: hidden;
	}
	
	.archives-box .tab-box .module .module-list .title {
		float: left;
		width: 100%;
		height: 100%;
		padding-left: 87px;
		overflow: hidden;
	}
	
	.archives-box .tab-box .module .module-list .title .title-box {
		position: relative;
		background: #FFFFFF;
		border-radius: 5px;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	.archives-box .title-box .title-line {
		position: absolute;
		left: 0;
		top: 0;
		width: 4px;
		height: 100%;
	}
	
	.archives-box .title-box .personal {
		background-color: rgba(156, 232, 138, 1);
	}
	
	.archives-box .title-box .platform {
		background-color: rgba(36, 201, 241, 1);
	}
	
	.archives-box .title-box .title-name {
		padding-left: 15px;
		float: left;
	}
	
	.archives-box .title-box .title-type {
		padding-right: 28px;
		float: right;
		background: url(../../assets/images/personalCenter/icon_arrow-right.png)no-repeat;
		background-size: 7px;
		background-position: right 10px center;
	}
	
	.archives-box .title-box a {
		color: #272727;
		display: block;
		width: 100%;
	}
</style>