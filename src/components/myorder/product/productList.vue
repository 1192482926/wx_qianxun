<template>
  <div class='productList'>
    <!-- 1 -->
    <el-row :gutter="20" class='List marginAll'>
      <!-- 订单号 -->
      <el-row :gutter="20" class='orderNumber  marginAll paddingAll'>
        <el-col :span="19" class='paddingAll'>
          <div class="grid-content bg-purple paddingAll textLeft">
            <i class='icon iconfont icon-wodedingdan'></i>订单号：<span>CD2017230100001</span>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple"><span class='success'>已完成</span></div>
        </el-col>
      </el-row>
      <!-- 订单号 -->
      <!-- 机构名称 -->
      <el-row :gutter="20" class='ordername  marginAll'>
        <el-col :span="20">
          <div class="grid-content bg-purple">
            <span class='name textLeft'> 成都八一军区骨科体检医院</span>
          </div>
        </el-col>
      </el-row>
      <!-- 机构名称 -->
      <!-- 套餐 -->
      <el-row :gutter="20" class='packageList  marginAll'>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <img src='http://www.tijianka.cc/images/201603/thumb_img/170_thumb_G_1458189676765.jpg'>
          </div>
        </el-col>
        <el-col :span="15" class='paddingAll'>
          <div class="grid-content bg-purple paddingAll textLeft">
            <p class='packageName color'>小神医高电位治疗仪 家用中频理疗仪静电治疗机遥控语言型 </p>
            <p class='priceAndNum color'><span>¥ 899.00</span><span class='num'>X1</span></p>
          </div>
        </el-col>
      </el-row>
      <!-- 套餐 -->
      <!-- 合计 -->
      <el-row :gutter="20" class='sumNumPay  marginAll'>
        <el-col :span="24" class='paddingAll'>
          <div class="grid-content bg-purple paddingAll sumNum">
            <span class='quantity'>共2件商品 </span> <span class='pay'>实付：¥899.00</span>
          </div>
        </el-col>
      </el-row>
      <!-- 合计 -->
      <!-- 按钮 -->
      <el-row :gutter="20" class='  marginAll'>
        <el-col :span="24" class='paddingAll'>
          <div class="grid-content bg-purple paddingAll  ">
            <el-button class='payment  comm paddingAll'>立即支付</el-button>
             <el-button class='cancel comm paddingAll'>取消支付</el-button>
          </div>
        </el-col>
      </el-row>
      <!-- 按钮 -->
    </el-row>
    <!-- 1 -->
  </div>
</template>

<script>
  export default {
    name: 'productList'
  }
</script>

<style>
  /* 公共样式 */
  .textLeft {
    text-align: left;
  }
  /* 公共样式 */
  .productList {
    width: 100%;
    height: auto;
    margin-top: 50px;
  }
  .List {
    background: #fff;
    height: auto;
    margin-bottom: 10px!important;
  }
  /* 订单号 */
  .orderNumber {
    height: 40px;
    border-bottom: 1px #f0f1f1 solid;
  }
  .success {
    color: #009ee2;
    display: block;
    height: 100%;
    line-height: 36px;
  }
  .orderNumber .grid-content,
  .el-col {
    height: 100%;
  }
  .orderNumber .grid-content {
    line-height: 2;
  }
  span {
    display: inline-block;
    height: 100%;
    line-height: 40px;
  }
  /* 订单号图标间距 */
  .orderNumber i {
    padding: 0 10px;
  }
  /* 机构名称 */
  .name {
    display: block;
    height: 100%;
    line-height: 40px;
  }
  /* 套餐列表 */
  .color {
    color: #202121;
  }
  /* 价格和数量 */
  .priceAndNum {
    width: 100%;
  }
  .priceAndNum span {
    width: 50%;
  }
  .num {
    text-align: right;
    font-size: 12px;
  }
  /* 合计 */
  .sumNumPay {
    border-bottom: 1px #f0f1f1 solid;
  }
  .sumNum {
    width: 100%;
    text-align: right;
    margin: 0 -14px;
  }
  .quantity {
    color: #a7acaf;
    margin: 0 23px;
  }
  .pay {
    color: #202121;
    font-size: 14px;
  }
  /* 立即支付 */
  .payment {
      width: 100%;
    height: 100%;
    border: solid 2px #1bb3f5;
     color: #009ee2;
  }
  /* 取消*/
    .cancel {
        width:100%;
    height: 100%;
    border: solid 2px #f0f1f1;
    color: #72797e;
  }
  .comm {
    width: 96px;
    height: 30px;
    border-radius: 3px;

    float: right;
    margin: 5px 10px;
  }
  .cancel span, .payment span{
    line-height: 30px;
    padding: 0 5px;
  }
</style>
