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
    <div class="order-box" >
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
            	<input type="text" v-model="goodsNum" :value="goodsNum" maxlength="2" @blur="aaa(goodsNum)"/>
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
                <input type="text" placeholder="请输入体检人姓名" />
              </div>
            </div>
            <div class="line clearfix">
              <div class="line-title">性别</div>
              <div class="input-box Radio"> 
								<label><input type="radio" :name="gender+personNum" value="1" checked/>男</label>
								<label><input type="radio" :name="gender+personNum" value="2"/>女</label> 
              </div>
            </div>
            <div class="line clearfix">
              <div class="line-title">婚否</div>
              <div class="input-box Radio"> 
                <label><input type="radio" :name="marry+personNum" value="1" checked/>未婚</label>
								<label><input type="radio" :name="marry+personNum" value="2"/>已婚</label>
              </div>
            </div> 
            <div class="line clearfix" >
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
        合计<span>￥{{teamPrice*goodsNum}}</span>
      </el-col>
      <el-col :span="9" class="submits">
        <a href="javascript:void(0);" @click='submit'>提交订单</a>
      </el-col>
    </el-row>

  </div>
</template>

<script> 
	import { imgBaseUrl } from '../../conifg/production'
	  
  export default {
    name: 'FillOrder',
    data() {
      return {  
      	gender:'gender',
      	marry:'marry',
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        value1: '',
        value2: '', 
        getMechanismData: '',
        getPackageData:'',
        img:imgBaseUrl,
        goodsNum:'1' ,
        teamPrice:'',
        dateId:'dateId',
        datelist:''
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
        this.$router.push('/SubmitOrder');
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
			aaa: function(a){
				if(this.goodsNum <= 1 || this.goodsNum == undefined || this.goodsNum == null) {
					this.goodsNum = 1;  
				}else{
					this.goodsNum = parseInt(a); 
				} 
			}/*,
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
  .buy-num .buy-num-box .num input{width: 100%;height: 100%;text-align: center;border: none;}

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
	.line .Radio label{width: 35%;display: inline-block;} 
	.line .Radio label input[type=radio]{
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
