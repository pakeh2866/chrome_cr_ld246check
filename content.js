(function() {
    'use strict';
    window.onload = onloadStart()
    // Your code here...
})();

var isLogin = false;
var isqd = false;
var targetURL = false;
//判断是否登录
function checkLogin() {
    var checkLogin = document.getElementById('signOut');
    console.log(checkLogin);
    if (checkLogin) {
      isLogin = true;
    }
    console.log('isLogin:', isLogin);
}

//判断网页URL是否为"https://ld246.com/activity/checkin"
function checkURL() {
    var checkURL =  window.location.href
    //console.log(checkURL);
    if(checkURL.indexOf("activity/checkin")!= -1){
        targetURL = true;
    };
    console.log('targetURL:', targetURL);
    };


//判断是否未签到
function checkqd() {
    var checkqd = document.getElementsByClassName('item item--current');
    console.log(',checkqd:',checkqd);
    if (checkqd.length > 0) {
      isqd = true;
    }
    console.log('isqd:', isqd);
}

// 执行绿色签到click
function qd_button(){
   var button_click = document.getElementsByClassName("btn green");
   console.log(button_click[0])
   button_click[0].click();
}

function onloadStart(){
    checkLogin()
    checkqd()
    checkURL()
    if(isLogin&&isqd){
        console.log('已登录、未签到')
        if(targetURL){
            qd_button()
            console.log('签到成功')
        }else{
            GM_openInTab("https://ld246.com/activity/checkin");
            console.log('打开签到页')
            }
    }
}