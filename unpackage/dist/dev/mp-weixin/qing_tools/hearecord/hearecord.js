(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["qing_tools/hearecord/hearecord"],{167:function(e,n,t){"use strict";(function(e){t(5);r(t(4));var n=r(t(168));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},168:function(e,n,t){"use strict";t.r(n);var r=t(169),o=t(171);for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t(173),t(175);var i,c=t(11),u=Object(c["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,"53050ef2",null,!1,r["components"],i);u.options.__file="qing_tools/hearecord/hearecord.vue",n["default"]=u.exports},169:function(e,n,t){"use strict";t.r(n);var r=t(170);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},170:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return i})),t.d(n,"recyclableRender",(function(){return a})),t.d(n,"components",(function(){return r}));try{r={uTabsSwiper:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-tabs-swiper/u-tabs-swiper")]).then(t.bind(null,259))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c},a=!1,i=[];o._withStripped=!0},171:function(e,n,t){"use strict";t.r(n);var r=t(172),o=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},172:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{percent:50,activeColor:"#0081ff",striped:!1,stripedActive:!1,weight1:"",list:[{name:"运动"},{name:"早餐"},{name:"午餐"},{name:"晚餐"},{name:"加餐"}],current:0,swiperCurrent:0,tabsHeight:0,dx:0,array_sp:["--低强度(小于3MET)--","缓慢步行","轻度工作(坐姿)","轻度家务(洗碗等)","休闲活动身体(钓鱼、台球等)","--中等强度(3-6MET)--","步行3.0mph","非常快的步行4.0mph","中等强度工作(搬运等)","中等强度家务(拖地等)","羽毛球-娱乐性","篮球-娱乐性","骑自行车-低强度10-12mph","跳舞-跳慢舞","跳舞-跳快舞","高尔夫","帆船、冲浪","悠闲的游泳","双人网球","排球-娱乐性","跳舞-跳慢舞","--剧烈运动(大于6MET)--","极快速度步行4.5mph","慢跑5mph","慢跑6mph","跑步7mph","繁重的工作(农活)","篮球比赛","骑自行车-中等强度12-14mph","足球-娱乐性","足球比赛","游泳-费力","网球单打","排球竞技"],value_sp:["","2.0","1.5","2.0","2.5","","3.0","5.0","5.5","3.5","4.5","4.5","6.0","3.0","4.5","4.3","3.0","6.0","5.0","3.5","6.0","","6.3","8.0","10.0","11.5","8.0","8.0","10.0","7.0","10.0","11.0","8.0","8.0"],index_sp:-1}},onLoad:function(){},computed:{},methods:{change:function(e){this.swiperCurrent=e},transition:function(e){var n=e.detail.dx;this.$refs.tabs.setDx(n)},animationfinish:function(e){var n=e.detail.current;this.$refs.tabs.setFinishCurrent(n),this.swiperCurrent=n,this.current=n},pickerChange_sport:function(e){console.log("picker发送选择改变，携带值为",e.target.value),this.index_sp=e.target.value},onSport:function(n){console.log(n.target.value);var t=n.target.value.time3,r=n.target.value.weight3,o=n.target.value.type3,a=5,i=3.5;t=parseFloat(t),r=parseFloat(r);o=parseFloat(o);var c=isNaN(t)||isNaN(r)||isNaN(o);if(c)e.showModal({title:"提示",content:"请输入数字或者选择正确的运动类型",showCancel:!1});else if(t>0&&r>0&&o>0){var u=o*i,s=u*r*.001,l=s*a,d=l*t;e.showModal({title:"结果",content:"您该项运动的耗氧量为："+s+" L/min\n您每分钟消耗卡路里为："+l+" kcal/min\n您在该运动消耗的卡路里为："+d+" kcal",editable:!0,showCancel:!1})}else e.showModal({title:"提示",content:"请输入大于0的数字",showCancel:!1})}}};n.default=t}).call(this,t(1)["default"])},173:function(e,n,t){"use strict";t.r(n);var r=t(174),o=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},174:function(e,n,t){},175:function(e,n,t){"use strict";t.r(n);var r=t(176),o=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},176:function(e,n,t){}},[[167,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/qing_tools/hearecord/hearecord.js.map