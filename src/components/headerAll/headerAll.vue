<template>
  <div>
    <h1>{{msg}}</h1>
  <span class='shortLine'></span>
  </div>
</template>
<script>
export default{
  name:'headerAll',
    props:['msg'],
  ddata(){
    return{
    msg:this.msg
    }
  }

}

</script>
<style scode>
h1 {
  width: 100%;
  text-align: center;
  height: 39px;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 30px;
  letter-spacing: 0px;
  color: #202121;
}

.shortLine {
  display: block;
  margin: 6px auto;
  width: 30px;
  height: 3px;
  background-image: linear-gradient(90deg, rgba(6, 132, 255, 1) 0%, rgba(49, 231, 235, 1) 100%), linear-gradient( rgba(215, 215, 215, 1), rgba(215, 215, 215, 1));
  background-blend-mode: normal, normal;
  box-shadow: 0px 0px 75.2px 4.8px rgba(30, 186, 244, 0.4);
}

</style>
