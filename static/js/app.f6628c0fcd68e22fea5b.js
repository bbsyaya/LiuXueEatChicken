webpackJsonp([0],{"1/oy":function(t,e){},"4Uwr":function(t,e,n){t.exports=n.p+"static/img/logo.b21d7c8.jpg"},"9M+g":function(t,e){},Befm:function(t,e){},DKT5:function(t,e){},DRq3:function(t,e){},HJt8:function(t,e,n){t.exports=n.p+"static/media/succeed.2956fe3.mp3"},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r={name:"AudioPreloader",props:{filepath:String,type:{type:String,default:"audio/mpeg"}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("audio",{attrs:{preload:"auto"}},[e("source",{attrs:{src:this.filepath,type:this.type}})])},staticRenderFns:[]};var s=n("VU/8")(r,o,!1,function(t){n("bMjO")},"data-v-752d26fc",null).exports,c=n("vSUu"),a=n.n(c),u=n("vXfY"),d=n.n(u),l=n("lxWj"),v=n.n(l),_=n("lwlS"),h=n.n(_),m=n("HJt8"),p=n.n(m),f=n("Yer6"),w=n.n(f),A={clickButton:a.a,countdown:d.a,right:v.a,startChallenge:h.a,succeed:p.a,wrong:w.a},b={name:"App",mounted:function(){window.addEventListener("resize",this.resizeHandler),this.resizeHandler()},data:function(){return{style:{},audios:A}},components:{AudioPreloader:s},methods:{resizeHandler:function(t,e){var n=this,i=.9*window.innerWidth,r=1.5*i,o=100;r+70>window.innerHeight?i=(r=window.innerHeight-140)/1.5:o=(window.innerHeight-r+70)/2;var s=(window.innerWidth-i)/2;console.log({width:i+"px",height:r+"px",top:o+"px",left:s+"px"}),window.innerHeight<500?(console.log("Really Small Screen"),i=window.innerWidth,r=window.innerHeight,o=0,s=0):window.innerHeight<600&&(console.log("Small Screen"),i=window.innerWidth-20,r=window.innerHeight-60,o=60,s=(window.innerWidth-i)/2),this.style={width:i+"px",height:r+"px",top:o+"px",left:s+"px"},e||setTimeout(function(){n.resizeHandler(t,!0)},100)}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:this.style,attrs:{id:"app"}},[e("div",{attrs:{id:"viewport"}},[e("router-view")],1),this._v(" "),e("div",{attrs:{id:"top"}}),this._v(" "),this._m(0),this._v(" "),this._l(this.audios,function(t){return e("AudioPreloader",{key:t,attrs:{filepath:t}})})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"notice"}},[e("h1",[this._v("竖起来看效果更好")]),this._v(" "),e("img",{attrs:{src:n("Vxuj")}})])}]};var x=n("VU/8")(b,g,!1,function(t){n("phYq")},null,null).exports,T=n("/ocq"),S={name:"Welcome",methods:{start:function(t){new Audio(A.startChallenge).play(),this.$router.push("/game")},result:function(t){new Audio(A.clickButton).play(),this.$router.push("/level")}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"box"}},[n("h1",{attrs:{id:"main-title"}},[t._v("留学吃鸡")]),t._v(" "),n("b-button",{attrs:{id:"start-btn",size:"lg",variant:"primary"},on:{click:t.start}},[t._v("\n      开始挑战\n  ")]),t._v(" "),n("b-button",{attrs:{id:"result-btn"},on:{click:t.result}},[t._v("\n      排行榜\n  ")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"banner-bottom"}},[e("img",{attrs:{src:n("Vxuj")}})])}]};var y=n("VU/8")(S,k,!1,function(t){n("oq5A")},"data-v-0aa89573",null).exports,C=[["为什么NYU纽约大学的学生自称紫钻贵族？","NYU的学生都有冲qq紫钻","纽约大学钻石研究专业全美第一，校园内有世界上最大的紫钻","NYU的主题色是红色和蓝色，混合即为紫色","NYU学校的主题色是紫色",4],["下列方法哪个可以最好的提高托福写作？","每天阅读范文，同时练习写作，学以致用","每天阅读范文，但是不自己写","每天看美剧，了解美国俚语","每天听嘻哈音乐，寻找写作灵感",1],["美国大学申请关注哪几个内容？","SAT，ACT等考试成绩，只需成绩即可","美国大学属于抽签制，抽到即被录取","SAT，ACT等考试成绩，和社会活动经历，综合考虑","参加美国的全球统一高考，上国服本一线即被录取",3],["下列哪个AP考试不能在中国大陆报考","AP美国历史","AP环境科学","AP统计学","AP中文",4],["主文书务必避免的做法是什么？","他人代写或弄虚作假","细节描写，场景描写","人物内心表现","声明自己兴趣和未来规划",3],["新SAT满分多少？","900","1500","1600","2400",3],["ACT考试时间一般多久？","一天","连续3天，每天两科目","半天","看个人速度，可提前交卷离开",3],["ACT和SAT的共同点或不同点：","ACT是美国高考，SAT是英国高考","ACT有科学推理，SAT没有","SAT比ACT难，是ACT的进阶考试","SAT考试时间更短对速度要求高",2],["TOEFL考试遇到听力或阅读加试的几率大概多少：","偶尔会遇到","几乎每次都会遇到","托福没有加试","遇到的几率比写作加试几率低",1],["以下哪种考试不适用于本科出国申请？","托福","ACT","SAT","GRE",4],["AP考试在每年的几月份进行？","5月","6月","9月","12月",1],["厦门中学生留学俱乐部的英文简称是？","XMOC","XMOA","XOA","XMC",1],["厦门中学生留学俱乐部的公众号名是？","留学生就这样","中学生留学就这YOUNG","中学生就这样","Amoy学生就这YOUNG",2],["被称为最好录取的常春藤大学是哪一所？","密歇根大学","滨州社区大学","布朗大学","康奈尔大学",4],["为什么普度大学被称为“航天员的摇篮”？","普度大学是NASA航天员训练的总部","普度大学有20多名校友是美国航天员","普度大学是全美第一所有机场的大学","普度大学飞行员专业全美排名第一",2],["小明对计算机工程感兴趣，有优越的申请条件，他应该申请哪所学校？","哈弗大学","圣母大学","文理学院"," 卡内基梅陇大学",4],["下列四所加州大学中，综合学术声誉最高的是哪一所？","UCB","UCLA","UCSB","UCSD",1],["被称为常年Defer大校的是哪所学校？","凯斯西储大学","圣塞巴斯蒂安大学","加州大学洛杉矶分校","威斯康辛麦迪逊大学",1],["主文书尽量避免的题材是什么？","个人对社会看法类文章","个人的成长和心路历程","体育类文章","体现个人失败并成长的文章",3]],R={name:"Game",mounted:function(){this.updateTimeIntervel=setInterval(this.updateTime,1e3),this.nextTi(!1,!0)},beforeRouteLeave:function(t,e,n){this.redirect?(clearInterval(this.updateTimeIntervel),this.countdownAudio.pause(),n()):window.confirm("确定不玩了吗？")?(clearInterval(this.updateTimeIntervel),this.countdownAudio.pause(),n()):n(!1)},data:function(){return{countdownAudio:new Audio(A.countdown),second:0,remSecond:30,redirect:!1,correctNum:0,question:"",answers:["","","",""],correct:0,boxClass:"box-opaque",tiRemain:C.slice(0)}},methods:{updateTime:function(){this.second++,this.remSecond--,10==this.remSecond&&(this.countdownAudio.currentTime=0,this.countdownAudio.play(),console.log("Play countdown")),0==this.remSecond&&this.toResult()},nextTi:function(t,e){var n=this;this.countdownAudio.pause(),this.remSecond=30;var i=this.tiRemain.length;if(0===i)this.toResult();else{var r=void 0;r=i<50?Math.floor(Math.random()*i):Math.floor(Math.random()*i/3*2);var o=this.tiRemain[r];this.tiRemain.splice(r,1),t&&this.correctNum++,e?(this.boxClass="",this.question=o[0],this.answers=o.slice(1,5),this.correct=Number(o[5])):(this.boxClass="box-opaque",setTimeout(function(){n.boxClass="",n.question=o[0],n.answers=o.slice(1,5),n.correct=Number(o[5])},300))}},toResult:function(){this.redirect=!0,this.$router.push("/result/"+this.correctNum+"/"+this.second)},clickAnswer:function(t){console.log(t,this.correct),t===this.correct?(console.log("correct"),new Audio(A.right).play(),this.nextTi(!0,!1)):(new Audio(A.wrong).play(),console.log("not right"),this.toResult())},clickSkip:function(){console.log("Skip"),this.nextTi(!1,!1)}}},U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.boxClass,attrs:{id:"box"}},[n("h1",[t._v("挑战者：AQ")]),t._v(" "),n("div",{attrs:{id:"sec-col"}},[n("div",{attrs:{id:"used-sec"}},[t._v("还剩 "+t._s(t.remSecond)+" 秒")]),t._v(" "),n("div",{attrs:{id:"ti-num"}},[t._v("答对 "+t._s(t.correctNum)+" 题")])]),t._v(" "),n("div",{attrs:{id:"question"}},[n("span",[t._v(t._s(t.question))])]),t._v(" "),t._l(t.answers,function(e,i){return n("div",{key:i,staticClass:"choice",on:{click:function(e){t.clickAnswer(i+1)}}},[t._v("\n    "+t._s(e)+"\n  ")])}),t._v(" "),n("div",{staticClass:"choice",on:{click:function(e){t.clickSkip()}}},[t._v("\n    跳过本题\n  ")])],2)},staticRenderFns:[]};var N=n("VU/8")(R,U,!1,function(t){n("q2Fp")},"data-v-4821c8bd",null).exports,$={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"level-table"},[n("tr",[n("th",[t._v("\n      名次\n    ")]),t._v(" "),n("th",[t._v("\n      昵称\n    ")]),t._v(" "),n("th",[t._v("\n      答对题数\n    ")]),t._v(" "),n("th",[t._v("\n      用时\n    ")])]),t._v(" "),n("tr",[n("td",[t._v("1")]),t._v(" "),n("td",[t._v("AQ")]),t._v(" "),n("td",[t._v("150")]),t._v(" "),n("td",[t._v("30分05秒")])]),t._v(" "),n("tr",[n("td",[t._v("2")]),t._v(" "),n("td",[t._v("AQ")]),t._v(" "),n("td",[t._v("150")]),t._v(" "),n("td",[t._v("30分10秒")])]),t._v(" "),n("tr",[n("td",[t._v("3")]),t._v(" "),n("td",[t._v("AQ")]),t._v(" "),n("td",[t._v("150")]),t._v(" "),n("td",[t._v("31分05秒")])]),t._v(" "),n("tr",[n("td",[t._v("4")]),t._v(" "),n("td",[t._v("AQ")]),t._v(" "),n("td",[t._v("150")]),t._v(" "),n("td",[t._v("32分05秒")])]),t._v(" "),n("tr",[n("td",[t._v("5")]),t._v(" "),n("td",[t._v("AQ")]),t._v(" "),n("td",[t._v("150")]),t._v(" "),n("td",[t._v("32分10秒")])]),t._v(" "),n("tr",[n("td",[t._v("6")]),t._v(" "),n("td",[t._v("AQ")]),t._v(" "),n("td",[t._v("150")]),t._v(" "),n("td",[t._v("32分20秒")])]),t._v(" "),n("tr",[n("td",[t._v("7")]),t._v(" "),n("td",[t._v("AQ")]),t._v(" "),n("td",[t._v("150")]),t._v(" "),n("td",[t._v("32分50秒")])]),t._v(" "),n("tr",[n("td",[t._v("8")]),t._v(" "),n("td",[t._v("AQ")]),t._v(" "),n("td",[t._v("150")]),t._v(" "),n("td",[t._v("33分05秒")])]),t._v(" "),n("tr",[n("td",[t._v("9")]),t._v(" "),n("td",[t._v("AQ")]),t._v(" "),n("td",[t._v("150")]),t._v(" "),n("td",[t._v("34分05秒")])]),t._v(" "),n("tr",[n("td",[t._v("10")]),t._v(" "),n("td",[t._v("AQ")]),t._v(" "),n("td",[t._v("150")]),t._v(" "),n("td",[t._v("35分05秒")])])])}]};var E=n("VU/8")({name:"LevelTable"},$,!1,function(t){n("DKT5")},"data-v-4efe4ddd",null).exports,q={name:"Result",methods:{back:function(){new Audio(A.clickButton).play(),this.$router.go(-1)}},components:{LevelTable:E}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"box"}},[e("h1",{attrs:{id:"main-title"}},[this._v("排行榜")]),this._v(" "),e("LevelTable"),this._v(" "),this._m(0),this._v(" "),e("b-button",{attrs:{id:"back-btn",variant:"primary"},on:{click:this.back}},[this._v("\n      返回\n  ")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"banner-bottom"}},[e("img",{attrs:{src:n("Vxuj")}})])}]};var H=n("VU/8")(q,M,!1,function(t){n("Befm")},"data-v-55c5c847",null).exports,j={name:"Result",methods:{back:function(){new Audio(A.clickButton).play(),this.$router.go(-2)}},computed:{correctNum:function(){return this.$route.params.correctNum},title:function(){return 150===Number(this.$route.params.correctNum)?"挑战成功":"挑战结束"},time:function(){return this.$route.params.time},prettifiedTime:function(){var t=this.$route.params.time;return t<60?t+"秒":t%60==0?t/60+"分":Math.floor(t/60)+"分"+t%60+"秒"}},components:{LevelTable:E}},Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"box"}},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("h2",{attrs:{id:"res-txt"}},[t._v("答对"+t._s(t.correctNum)+"题  用时"+t._s(t.prettifiedTime))]),t._v(" "),n("h2",[t._v("排行榜")]),t._v(" "),n("LevelTable"),t._v(" "),t._m(0),t._v(" "),n("b-button",{attrs:{id:"back-btn",size:"lg",variant:"primary"},on:{click:t.back}},[t._v("\n      返回\n  ")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"banner-bottom"}},[e("img",{attrs:{src:n("Vxuj")}})])}]};var V=n("VU/8")(j,Q,!1,function(t){n("DRq3")},"data-v-1e0c2c3b",null).exports,Y=n("e6fC");n("Jmt5"),n("9M+g");i.a.use(T.a),i.a.use(Y.a);var F=new T.a({routes:[{name:"Welcome",path:"/",alias:"/welcome",component:y},{name:"Game",path:"/game",component:N,beforeEnter:function(t,e,n){console.log(e),"Welcome"===e.name?n():(console.log("Invalid Entry to Game"),n("/"))}},{name:"Result",path:"/result/:correctNum/:time",component:V,beforeEnter:function(t,e,n){console.log(e),"Game"===e.name?n():(console.log("Invalid Entry to Result"),n("/"))}},{name:"Level",path:"/level",component:H},{name:"Not Found",path:"*",redirect:"/"}]}),P=n("4Uwr"),W=n.n(P);function L(t){if(0===t.indexOf("/"))return"http://xmoclxcj.duapp.com"+t}i.a.config.productionTip=!1,new i.a({el:"#app",router:F,components:{App:x},template:"<App/>"}),wx.ready(function(){wx.onMenuShareAppMessage({title:"留学吃鸡小游戏",desc:"留学圈最火的一个知识竞赛小游戏",link:L("/"),imgUrl:L(W.a),trigger:function(t){},success:function(t){},cancel:function(t){},fail:function(t){alert("分享失败了，再试一次吧")}}),wx.onMenuShareTimeline({title:"留学吃鸡小游戏",link:L("/"),imgUrl:L(W.a),trigger:function(t){},success:function(t){},cancel:function(t){},fail:function(t){alert("分享失败了，再试一次吧")}})})},Vxuj:function(t,e,n){t.exports=n.p+"static/img/banner-bottom.6dad6cc.png"},Yer6:function(t,e,n){t.exports=n.p+"static/media/wrong.9af6725.mp3"},bMjO:function(t,e){},lwlS:function(t,e,n){t.exports=n.p+"static/media/startChallenge.ddcabb6.mp3"},lxWj:function(t,e,n){t.exports=n.p+"static/media/right.e5a9d3b.mp3"},oq5A:function(t,e){},phYq:function(t,e){},q2Fp:function(t,e){},vSUu:function(t,e,n){t.exports=n.p+"static/media/clickButton.2f83551.mp3"},vXfY:function(t,e,n){t.exports=n.p+"static/media/countdown.38e765e.mp3"},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f6628c0fcd68e22fea5b.js.map