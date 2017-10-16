import $ from 'jquery'
/* 判断是否登录  */
function logOn() {
	var bl=true;
	if(sessionStorage.getItem("user")==null){ 
		$.ajax({
			type: "post",
			url: "http://192.168.0.116:8080/yftj-web/selfCenter/userInfoById",
			xhrFields: {
				withCredentials: true,
			},
			async:false,
			success: function(res) {
				console.warn(res);
				if(typeof res =="string") {
					location.href = "/login"; 
					bl=false;
				}else{
					bl=true;
					sessionStorage.setItem("user", JSON.stringify(res));
				}
			},
			error: function() {
				console.log("error");
			}
		})
	}else{
		return true;
	}
	return bl;
} 

/*function isNullVal(text,info){
	var thisVal = text;
	var info = info;
	if(thisVal == null || thisVal == "" || thisVal == undefined){
		alert(info+"不能为空"); 
		//$("").html(info+"不能为空").hide(3000);
		return false;
	}else{ 
		return true;
	}
}*/

export {
	logOn,
	isNullVal
}
