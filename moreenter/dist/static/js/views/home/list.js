webpackJsonp([6],{115:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=l(1),n=l(80),a=l.n(n);new i.a({render:function(t){return t(a.a)}}).$mount("#app")},15:function(t,e,l){l(22);var i=l(0)(l(18),l(26),null,null);t.exports=i.exports},150:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(l(2),l(15)),n=l.n(i),a=l(36),r=l.n(a),s=l(35),u=l.n(s);e.default={data:function(){return{webname:5464,list:[{id:0,name:"alert弹窗",url:"../vuxDemo/alert.html"},{id:1,name:"Calendar时间选择",url:"../vuxDemo/calendar.html"},{id:2,name:"button按钮",url:"../vuxDemo/button.html"}]}},components:{Cell:n.a,Group:r.a,Divider:u.a},beforeCreate:function(){},beforeMount:function(){},mounted:function(){},methods:{}}},16:function(t,e,l){l(23);var i=l(0)(null,l(27),null,null);t.exports=i.exports},18:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=l(16),n=l.n(i),a=l(6);e.default={components:{InlineDesc:n.a},props:{title:String,value:[String,Number,Array],isLink:Boolean,isLoading:Boolean,inlineDesc:[String,Number],primary:{type:String,default:"title"},link:{type:[String,Object]},valueAlign:String},methods:{onClick:function(){l.i(a.a)(this.link,this.$router)}}}},218:function(t,e){},22:function(t,e){},23:function(t,e){},26:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"weui-cell",class:{"vux-tap-active":t.isLink||!!t.link,"weui-cell_access":t.isLink||!!t.link},on:{click:t.onClick}},[l("div",{staticClass:"weui-cell__hd"},[t._t("icon")],2),t._v(" "),l("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===t.primary&&"left"!==t.valueAlign}},[l("p",[t.title?l("label",{staticClass:"vux-label",style:{width:t.$parent.labelWidth,textAlign:t.$parent.labelAlign,marginRight:t.$parent.labelMarginRight}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t._t("after-title")],2),t._v(" "),l("inline-desc",[t._v(t._s(t.inlineDesc))])],1),t._v(" "),l("div",{staticClass:"weui-cell__ft",class:{"vux-cell-primary":"content"===t.primary||"left"===t.valueAlign,"vux-cell-align-left":"left"===t.valueAlign}},[t._t("value"),t._v(" "),t._t("default",[t._v(t._s(t.value))]),t._v(" "),t.isLoading?l("i",{staticClass:"weui-loading"}):t._e()],2),t._v(" "),t._t("child")],2)},staticRenderFns:[]}},266:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("divider",[t._v("github 地址1111")]),t._v(" "),t._m(0),t._v(" "),l("div",[l("divider",[t._v("vux UI 展示")]),t._v(" "),l("group",{attrs:{title:"vux UI demo"}},t._l(t.list,function(t){return l("cell",{key:t.id,attrs:{title:t.name,value:"","is-link":"",link:t.url}})})),t._v(" "),t._m(1)],1),t._v(" "),l("div",[l("divider",[t._v("多页面 vue-router 2")]),t._v(" "),l("group",[l("cell",{attrs:{title:"多页面路由",value:"","is-link":"",link:"../router/details.html"}})],1)],1),t._v(" "),l("div",{staticClass:"martop15"},[l("divider",[t._v("iconfont 字体")]),t._v(" "),l("group",[l("cell",{attrs:{title:"iconfont图标展示",value:"","is-link":"",link:"../iconfont/list.html"}})],1)],1),t._v(" "),l("div",{staticClass:"martop15"},[l("divider",[t._v("其他")]),t._v(" "),l("group",[l("cell",{attrs:{title:"自定义vue全局过滤器",value:"","is-link":"",link:"../tools/vuefilter.html"}}),t._v(" "),l("cell",{attrs:{title:"模块下放静态文件",value:"","is-link":"",link:"../tools/bigimage.html"}}),t._v(" "),l("cell",{attrs:{title:"ajax",value:"","is-link":"",link:"../tools/ajax.html"}}),t._v(" "),l("cell",{attrs:{title:"获取url参数",value:"","is-link":"",link:"../tools/getQuery.html?goodsid=1688&shopid=25"}})],1)],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"font12 pad10"},[l("a",{staticClass:"color888",attrs:{href:"https://github.com/bluefox1688/vue-cli-multi-page",target:"_blank"}},[t._v("https://github.com/bluefox1688/vue-cli-multi-page")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"note"},[l("p",[t._v("这里仅展示几个VUE UI的demo，更多组件demo请访问vux UI官网，官网地址："),l("a",{attrs:{href:"https://vux.li",target:"_blank"}},[t._v("https://vux.li")])])])}]}},27:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-label-desc"},[t._t("default")],2)},staticRenderFns:[]}},80:function(t,e,l){l(218);var i=l(0)(l(150),l(266),null,null);t.exports=i.exports}},[115]);