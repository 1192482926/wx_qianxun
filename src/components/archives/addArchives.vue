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
					<span class="teableCell">添加档案</span>
				</el-col>
				<el-col :span="4" class="viewtype-switch">保存</el-col>
			</el-row>
		</div>
		<!-- addArchives-box -->
		<div class="addArchives-box">
			<div class="addArchives-list mtop">
				<div class="addArchives-content clearfix">
					<div class="addArchives-title">档案名称</div>
					<div class="addArchives-value">
						<input type="text" class="inputText" placeholder="请输入档案的名称"/>
					</div> 
				</div>
			</div>
			<div class="addArchives-list">
				<div class="addArchives-content clearfix">
					<div class="addArchives-title">档案类型</div>
					<div class="addArchives-value" v-on:click="block">
						<input type="text" class="inputText" placeholder="请选择" :value="value" disabled/>
						<div class="sel" v-show="isShow"> 
						    <ul>
						    	<li vals="星期一" @click="handleChange($event)">档案一</li>
						    	<li vals="星期二" @click="handleChange($event)">档案二</li>
						    	<li vals="星期三" @click="handleChange($event)">档案三</li> 
						    </ul>
						</div>
					</div>
					<div class="iconRight">
						<img src="../../assets/images/personalCenter/icon_arrow-right.png" />
					</div>
				</div>
			</div>
			<div class="addArchives-list mtop">
				<div class="addArchives-content clearfix">
					<div class="addArchives-title">姓名</div>
					<div class="addArchives-value">
						<input type="text" class="inputText" placeholder="请输入真实姓名"/>
					</div> 
				</div>
			</div>
			<div class="addArchives-list">
				<div class="addArchives-content clearfix">
					<div class="addArchives-title">性别</div>
					<div class="addArchives-value">
						<el-radio class="genderRadio" v-model="genderRadio" label="1">男</el-radio>
  						<el-radio class="genderRadio" v-model="genderRadio" label="2">女</el-radio>
					</div> 
				</div>
			</div>
			<div class="addArchives-list">
				<div class="addArchives-content clearfix">
					<div class="addArchives-title">年龄</div>
					<div class="addArchives-value">
						<input type="text" class="inputText" placeholder="请输入真实年龄"/>
					</div> 
				</div>
			</div>
			<div class="addArchives-list mtop">
				<div class="addArchives-content clearfix">
					<div class="addArchives-title">体检机构</div>
					<div class="addArchives-value">
						<input type="text" class="inputText" placeholder="请输入医院或机构的名称"/>
					</div> 
				</div>
			</div>
			<div class="addArchives-list">
				<div class="addArchives-content clearfix">
					<div class="addArchives-title">机构地址</div>
					<div class="addArchives-value">
						<input type="text" class="inputText" placeholder="请输入医院或机构详细地址"/>
					</div> 
				</div>
			</div>
			<div class="addArchives-list">
				<div class="addArchives-content clearfix">
					<div class="addArchives-title">就诊日期</div>
					<div class="addArchives-value">
						<div class="sel-date" > 
							<mu-date-picker v-model="selectDate.valDate" :hintText="selectDate.valDate" /> 
						</div> 
					</div>
					<div class="iconRight">
						<img src="../../assets/images/personalCenter/icon_arrow-right.png" />
					</div>
				</div>
			</div>
			<div class="addArchives-list mtop">
				<div class="ad-title">备注</div>  
				<div class="addArchives-bt">
					<textarea placeholder="请输入..."></textarea>
					<div class="writeNum">
						<span class="nums">0</span>/200
					</div>
				</div>
			</div>
			<div class="addArchives-list mtop">
				<div class="ad-title">添加档案照片<span class="note">（最多可上传8张）</span></div>  
				<div class="addArchives-bt">
					<!-- upload -->
					<div class="z_photo clearfix">
			            <div class="z_file">
			                <input type="file" name="file" id="file" value="" accept="image/*" multiple="" v-on:change="imgChange('z_photo','z_file');" >
			 			</div> 
			        </div>
			        <div class="z_mask">
			            <!--弹出框-->
			            <div class="z_alert">
			                <p>确定要删除这张图片吗确定要删除这张图片吗？</p>
			                <p>
			                    <span class="z_cancel">取消</span>
			                    <span class="z_sure">确定</span>
			                </p>
			            </div>
			        </div>
			        <!-- upload end -->
				</div>
			</div>
		</div> 
	</div>
</template>

<script>    
	export default{
		name:'addArchives',
		data(){
			return{
				genderRadio:'1',
				value:'',
				isShow:false,
				selectDate:{  
					valDate:'2017-09-10'
				} 
			}
		},
		methods: { 
		    handleChange:function(e) { 
		    	this.value = e.currentTarget.innerHTML; 
		    },
		    block:function(){  
		    	this.isShow = this.isShow ? false : true ;  
		    },
		    /* 上传图片 */
		    imgChange:function(obj1, obj2){
		    	var addImg = document.getElementsByClassName('z_addImg'); 
		    	if(addImg.length < 5){
		    		//获取点击的文本框
		            var file = document.getElementById("file");
		            //存放图片的父级元素
		            var imgContainer = document.getElementsByClassName(obj1)[0];
		            //获取的图片文件
		            var fileList = file.files;
		            //文本框的父级元素
		            var input = document.getElementsByClassName(obj2)[0];
		            var imgArr = [];
		            //遍历获取到得图片文件
		            for (var i = 0; i < fileList.length; i++) {
		                var imgUrl = window.URL.createObjectURL(file.files[i]);
		                imgArr.push(imgUrl);
		                var img = document.createElement("img");
		                img.setAttribute("src", imgArr[i]);
		                var imgAdd = document.createElement("div");
		                imgAdd.setAttribute("class", "z_addImg");
		                imgAdd.appendChild(img);
		                imgContainer.appendChild(imgAdd);
		            };
		            this.imgRemove();
		    	}else{
		    		alert('最多上传10张图片！');
		    	} 
		    },
		    /* 删除图片 */
		    imgRemove:function(){
		    	var imgList = document.getElementsByClassName("z_addImg");
	            var mask = document.getElementsByClassName("z_mask")[0];
	            var cancel = document.getElementsByClassName("z_cancel")[0];
	            var sure = document.getElementsByClassName("z_sure")[0];
	            for (var j = 0; j < imgList.length; j++) {
	                imgList[j].index = j;
	                imgList[j].onclick = function() {
	                    var t = this;
	                    mask.style.display = "block";
	                    cancel.onclick = function() {
	                        mask.style.display = "none";
	                    };
	                    sure.onclick = function() {
	                        mask.style.display = "none";
	                        t.remove();
	                    }; 
	                }
	            };
		    }  
		} 
	}
</script> 

<style>
	.Globals{height: auto;min-height: 100%;background: #F0F1F1;}
	.addArchives-box{}
	.mtop{margin-top: 10px;}
	.addArchives-box .addArchives-list{background: #FFFFFF;padding: 0 4%;}
	.addArchives-box .addArchives-list .addArchives-content{position: relative; border-bottom: 1px solid #F0F1F1;padding: 10px 0;height: 50px;line-height: 30px;}
	/* iconRight */
	.addArchives-box .addArchives-list .iconRight{position: absolute;right: 0;top: 9px;}
	.addArchives-box .addArchives-list .iconRight img{width: 7px;}	
	/* iconRight end */ 
	.addArchives-box .addArchives-list .addArchives-title{width: 80px;position: absolute;z-index:20;left: 0;top: 10px;height: 30px;line-height: 30px;}
	.addArchives-box .addArchives-list .addArchives-value{width: 100%;padding-left: 80px;padding-right: 20px; height: 100%;background: #FFFFFF;}
	.addArchives-box .addArchives-list .addArchives-value .inputText{width: 100%;height: 30px;line-height:30px;border: none;}
	
	.addArchives-box .addArchives-list .ad-title{border-bottom: 1px solid #F0F1F1;padding: 10px 0;height: 50px;line-height: 30px;}
	.addArchives-box .addArchives-list .ad-title .note{color: #b4b9bb;font-size: 12px;}
	.addArchives-box .addArchives-list .addArchives-bt{position: relative;}
	.addArchives-box .addArchives-list .addArchives-bt textarea{border: none;height: 100px;width: 100%;padding: 5px 0 10px 0;}
	.addArchives-box .addArchives-list .addArchives-bt .writeNum{position: absolute;right: 0;bottom: 5px;color: #b4b9bb;}
	.addArchives-box input[type="text" i]:disabled{background-color: #FFFFFF;}
	.addArchives-box .addArchives-list .sel{position: absolute;top: 50px;left: 0;z-index: 222;width: 100%;box-shadow: 0 3px 5px #ccc;font-size: 14px;}
	.addArchives-box .addArchives-list .sel li{background: #FFFFFF;padding-left: 80px;border-bottom: 1px solid #F0F1F1;line-height: 40px;}
	/* sel-date */ 
	.addArchives-box .sel-date .mu-text-field-line{height: 0;}
	.addArchives-box .sel-date .mu-text-field-content{padding: 0;}
	.addArchives-box .sel-date .mu-date-picker{width: 100%;}
	.addArchives-box .sel-date .mu-text-field{width: 100%;min-height: 0;margin: 0;}
	.addArchives-box .sel-date .mu-text-field-hint{line-height: 0;}
	.addArchives-box .sel-date .mu-text-field-input{text-align: left;height: 100%;}
	.mu-dialog-body{font-family: "微软雅黑";}
	.mu-date-display{background-color: #0B90FD; } 
	.mu-day-button-bg{background-color: #0B90FD; }
	.mu-flat-button-primary{color: #0B90FD;} 
	/* sel-date end */ 
	/* upload img*/   
    .z_photo {width: 100%;height: auto;margin-bottom: 20px;} 
    .z_photo img {width: 3rem;height: 3rem;}  
    .z_addImg {float: left;margin-right: 0.6rem;margin-top: 10px;}
    .z_file {width: 3rem;height: 3rem;background: url(../../assets/images/archives/z_add.png) no-repeat;background-size: 100% 100%;float: left;margin-right: 0.6rem;margin-top: 10px;}
    .z_file input::-webkit-file-upload-button {width: 3rem;height: 3rem;border: none;position: absolute;outline: 0;opacity: 0;}
    .z_file input#file {display: block;width: auto;border: 0;vertical-align: middle;}
    /*遮罩层*/
    .z_mask {width: 100%;height: 100%;background: rgba(0, 0, 0, 0.5);position: fixed;top: 0;left: 0;z-index: 999;display: none;}
    .z_alert {width: 10rem;border-radius: 0.2rem;background: #fff;font-size: 14px;text-align: center;position: absolute;left: 50%;top: 50%;margin-left: -5rem;margin-top: -4rem;}
    .z_alert p:nth-child(1) {line-height: 1rem;padding: 1.2rem 0.5rem;}
    .z_alert p:nth-child(2) span {display: inline-block;width: 49%;line-height: 2rem;float: left;border-top: 1px solid #ddd;}
    .z_cancel {border-right: 1px solid #ddd;}
	/* upload img end */ 
</style>