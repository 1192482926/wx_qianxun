<template>
  <div class='footer'>
   <mu-paper >
    <mu-bottom-nav class='footerBackground'>
      <mu-bottom-nav-item to="/" value="首页" title="首页" icon=" " iconClass='icon iconfont icon-shouyeziji01' class='paddingAll' />
      <mu-bottom-nav-item to="/packageList" value="体检购买" title="体检购买" icon=" "  iconClass='icon iconfont icon-goumaichesuo' class='paddingAll' />
      <mu-bottom-nav-item to="/healthProduct" value="健康产品" title="健康产品" icon=" "  iconClass='icon iconfont icon-chanpin' class='paddingAll' />
      <mu-bottom-nav-item to="/personalCenter" value="个人中心" title="个人中心" icon=" " iconClass='icon iconfont icon-gerenzhongxin' class='paddingAll'/>
    </mu-bottom-nav>
      <router-view></router-view>
  </mu-paper>

  </div>
</template>

<script>
  export default {
    name: "footer",
    mounted() {
      // this.flag1 = true;
    }
  }
</script>

<style scope>
  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    height:49px;
     padding: 2px 0;
    font-size: 14px;
  }

.router-link-exact-active i,.router-link-exact-active span,.router-link-exact-active{
  color:#06b2dd!important;

}
.footerBackground{
  background:#f5f5f5;
  height:49px;
}

.footerBackground a{
  width:100%;
  height:100%;
}
  .icon_style {
    fill: #ccc;
  }
   a {
    color: #333;
    width:25%;
    text-decoration: none;
  }

  a i {
    display: block;
  }

  .footer .mu-bottom-item-text{
    font-size:14px;
  }
  .footer .mu-icon{
    font-size:18px;
  }
</style>
