"use strict";

let is_login = 0;
const today = new Date().toDateString();
let lastVisitDate;
function open_url() {
	chrome.tabs.create({
		url: "https://ld246.com/activity/checkin",
		active: !1
	});
console.log("check done..");
};

function onloadStart() {
    console.log('进入脚本');

    if (is_login = 0) {
        console.log('没有元素: 1秒后重试');
		
        setTimeout(onloadStart, 1000)
    }
    else {
        console.log('找到元素');
		let is_login = 1;
		open_url();
        console.log('懒加载侦测: 3秒后重试');
    }
}


chrome.windows.onCreated.addListener(function(window) {
  console.log('新窗口被创建。');
  // 在这里添加针对新窗口的处理逻辑。
});

chrome.storage.local.get('lastVisitDate', function(data) {
    lastVisitDate = data.lastVisitDate;
    if (!lastVisitDate || lastVisitDate!== today) {
      // 如果没有上次访问日期记录或者上次访问日期不是今天，则执行特定函数
      onloadStart();
      chrome.storage.local.set({ lastVisitDate: today });
    }
  });
