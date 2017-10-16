<template>
<div class='footer'>
  <mu-paper>
    <mu-bottom-nav class='footerBackground'>
      <mu-bottom-nav-item to="/" value="首页" title="首页" icon=" " iconClass='icon-img icon-home' class='paddingAll' />
      <mu-bottom-nav-item to="/packageList" value="体检购买" title="体检购买" icon=" " iconClass='icon-img icon-buy' class='paddingAll' />
      <mu-bottom-nav-item to="/healthProduct" value="健康产品" title="健康产品" icon=" " iconClass='icon-img icon-health' class='paddingAll' />
      <mu-bottom-nav-item to="/personalCenter" value="个人中心" title="个人中心" icon=" " iconClass='icon-img icon-my' class='paddingAll' />
    </mu-bottom-nav>
    <router-view></router-view>
  </mu-paper>

</div>
</template>

<script>
// import home from '../../assets/icon_home.png';
// import home_checked from '../../assets/icon_home_checked.png';
// import buy from '../../assets/icon_buy.png';
// import buy_checked from '../../assets/icon_home_checked.png';
// import health from '../../assets/icon_health.png';
// import health_checked from '../../assets/icon_health-checked.png';
// import my from '../../assets/icon_my.png';
// import my_checked from '../../assets/icon_my-checked.png';
export default {
  name: "footer",
  mounted() {
    // this.flag1 = true;
  }
}
</script>

<style scope lang='scss'>
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 50px;
  padding: 2px 0;
  font-size: 14px;
}

.router-link-exact-active {
  color: #06b2dd!important;
}

.footerBackground {
  background: #f5f5f5;
  color: #fff;
  height: 50px;
  div{
    margin:2px 0 0 0;
  }
}

.icon-img {
 width: 48px;
    height: 26px;
  background-size: 55%;
  vertical-align: middle;
}

.icon-home {

  background: url('../../assets/icon_home.png') center no-repeat;
    background-size: 55%;
}

.router-link-exact-active .icon-home {

  background: url('../../assets/icon_home_checked.png') center no-repeat;
    background-size: 55%;
}

.icon-buy {

  background: url('../../assets/icon_buy.png') center no-repeat;
  background-size: 55%;
}

.router-link-exact-active .icon-buy {

  background: url('../../assets/icon_buy-checked.png') center no-repeat;
    background-size: 55%;
}

.icon-health {
  background: url('../../assets/icon_health.png') center no-repeat;
    background-size: 55%;
}

.router-link-exact-active .icon-health {
  background: url('../../assets/icon_health-checked.png') center no-repeat;
    background-size: 55%;
}

.icon-my {
  background: url('../../assets/icon_my.png') center no-repeat;
    background-size: 55%;
}

.router-link-exact-active .icon-my {
  background: url('../../assets/icon_my-checked.png') center no-repeat;
    background-size: 55%;
}
.footerBackground a {
  width: 100%;
  height: 100%;
}

.icon_style {
  fill: #ccc;
}

a {
  color: #333;
  width: 25%;
  text-decoration: none;
}

a i {
  display: block;
}

.footer .mu-bottom-item-text {
  font-size: 14px;
}

.footer .mu-icon {
  font-size: 18px;
}
.mu-bottom-nav-item{
margin: 4px 0;
}
</style>
