"use strict";(self.webpackChunkusersores=self.webpackChunkusersores||[]).push([[894],{13894:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var a=t(15861),i=t(64687),o=t.n(i),s=(t(83710),t(67294)),c=t(8573),p=t(36112),r=t(81614),l=function(){var n=function(){var n=(0,a.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,{};case 2:r.config({debug:!1,appId:"wx67fbab6346f16f58",timestamp:new Date,nonceStr:"生成签名的随机串",signature:"token",jsApiList:["onMenuShareTimeline","updateAppMessageShareData","onMenuShareAppMessage"]}),r.ready((function(){r.onMenuShareTimeline({title:"测试分享",link:window.location.href,imgUrl:"http://icon.mobanwang.com/UploadFiles_8971/200910/20091011134333685.png",success:function(n){console.log(n)}}),r.updateAppMessageShareData({title:"测试分享",desc:"一个测试的分享",link:window.location.href,imgUrl:"http://icon.mobanwang.com/UploadFiles_8971/200910/20091011134333685.png",success:function(n){console.log(n)}}),r.onMenuShareAppMessage({title:"测试分享",desc:"一个测试的分享!!!",link:window.location.href,imgUrl:"http://icon.mobanwang.com/UploadFiles_8971/200910/20091011134333685.png",type:"",dataUrl:"",success:function(n){console.log(n)}})}));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return s.createElement("div",null,s.createElement(c.Z,{type:"primary",onClick:n},"分享到微信"),s.createElement(p.v5,null,"#  微信h5分享\n\n1.access_token是公众号的全局唯一接口调用凭据，公众号调用各接口时都需使用access_token。\n\n```javascript\n接口调用请求说明\n\nhttps请求方式: GET https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET\n\n参数说明\n\n参数\t是否必须\t说明\ngrant_type\t是\t获取access_token填写client_credential\nappid\t是\t第三方用户唯一凭证\nsecret\t是\t第三方用户唯一凭证密钥，即appsecret\n```\n1、绑定域名\n2、引入 JS 文件\n- http://res.wx.qq.com/open/js/jweixin-1.6.0.js\n- http://res2.wx.qq.com/open/js/jweixin-1.6.0.js\n\n```javascript\nawait getSignature();\n    // let {timestamp, nonceStr, appId= '', signature = ''} = res;\n    wx.config({\n      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。\n      appId: 'wx0f023fe240f782ac', // 必填，公众号的唯一标识\n      timestamp: new Date(), // 必填，生成签名的时间戳\n      nonceStr: '生成签名的随机串', // 必填，生成签名的随机串\n      signature: 'token', // 必填，签名\n      jsApiList: [\"onMenuShareTimeline\", \"updateAppMessageShareData\", \"onMenuShareAppMessage\"] // 必填，需要使用的JS接口列表\n    });\n    wx.ready(() => {\n      wx.onMenuShareTimeline({\n        title: '测试分享', // 分享标题\n        link: window.location.href,// 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致\n        imgUrl: 'http://icon.mobanwang.com/UploadFiles_8971/200910/20091011134333685.png',// 分享图标\n        success: function(e) {\n          console.log(e);\n          // 用户点击了分享后执行的回调函数\n        }\n      });\n      wx.updateAppMessageShareData({\n        title: '测试分享', // 分享标题\n        desc: '一个测试的分享', // 分享描述\n        link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致\n        imgUrl: 'http://icon.mobanwang.com/UploadFiles_8971/200910/20091011134333685.png', // 分享图标\n        success: function (e) {\n          // 设置成功\n          console.log(e);\n        }\n      });\n      wx.onMenuShareAppMessage({\n        title: '测试分享', // 分享标题\n        desc: '一个测试的分享!!!', // 分享描述\n        link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致\n        imgUrl: 'http://icon.mobanwang.com/UploadFiles_8971/200910/20091011134333685.png', // 分享图标\n        type: \"\", // 分享类型,music、video或link，不填默认为link\n        dataUrl: \"\", // 如果type是music或video，则要提供数据链接，默认为空\n        success: function(e) {\n          console.log(e);\n\n          // 用户点击了分享后执行的回调函数\n        },\n      })\n    });\n```\n"))}}}]);