<template>
  <div class='footer'>
   <mu-paper >
    <mu-bottom-nav :value="bottomNav" @change="handleChange" class='footerBackground'>
    <router-link :to="{path:'/index'}" active-class='on'>
      <mu-bottom-nav-item value="首页" title="首页" icon=" " iconClass='icon iconfont icon-shouyeziji01' activeClass='icon iconfont icon-shouyeshi'/>
     </router-link>
     <router-link :to="{path:'/packageList'}" active-class='on'>
      <mu-bottom-nav-item value="体检购买" title="体检购买" icon=" "  iconClass='icon iconfont icon-goumaichesuo'   activeClass='icon iconfont icon-shouyeziji01'/>
      </router-link>
      <router-link :to="{path:'/healthProduct'}" active-class='on'>
      <mu-bottom-nav-item value="健康产品" title="健康产品" icon=" "  iconClass='icon iconfont icon-chanpin'  activeClass='icon iconfont icon-shouyeziji01'/>
       </router-link>
      <router-link :to="{path:'/personalCenter'}" active-class='on'>
      <mu-bottom-nav-item   value="个人中心" title="个人中心" icon=" " iconClass='icon iconfont icon-gerenzhongxin'  activeClass='icon iconfont icon-shouyeziji01'/>
     </router-link>
    </mu-bottom-nav>
      <router-view></router-view>
  </mu-paper>

  </div>
</template>

<script>
  export default {
    name: "footer",
    data() {
      return {
       bottomNav: 'recents'
      }
    },
    mounted() {
      // this.flag1 = true;
    },
    methods: {
       handleChange (val) {
      this.bottomNav = val
    }
    }
  }
</script>

<style>  
  .footer {
    width: 100%;
    background:#f5f5f5;
    position: fixed;
    bottom: 0;
    height: 60px;
    padding: 5px 0;
    font-size: 14px;
  }
.on{
  color:#06b2dd!important;
  transform:scale(7deg);
-ms-transform:scale(7deg); 	/* IE 9 */
-moz-transform:scale(7deg); 	/* Firefox */
-webkit-transform:scale(7deg); /* Safari 和 Chrome */
-o-transform:scale(7deg); 	/* Opera */ 
}
.on i,.on span{
  color:#06b2dd!important;
  font-size:16px;
   transform:scale(7deg);
-ms-transform:scale(7deg); 	/* IE 9 */
-moz-transform:scale(7deg); 	/* Firefox */
-webkit-transform:scale(7deg); /* Safari 和 Chrome */
-o-transform:scale(7deg); 	/* Opera */
}
.footerBackground{
  background:#f5f5f5;
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
</style>
