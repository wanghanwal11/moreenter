webpackJsonp([4],{123:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),l=n(91),s=n.n(l);new i.a({render:function(e){return e(s.a)}}).$mount("#app")},148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(16),l=n.n(i);t.default={components:{InlineDesc:l.a},computed:{labelStyle:function(){var e=/<\/?[^>]*>/.test(this.title);return{display:"block",width:Math.min(e?5:this.title.length+1,14)+"em"}}},props:{title:{type:String,required:!0},disabled:Boolean,value:{type:Boolean,default:!1},inlineDesc:[String,Boolean,Number]},data:function(){return{currentValue:this.value}},watch:{currentValue:function(e){this.$emit("input",e),this.$emit("on-change",e)},value:function(e){this.currentValue=e}}}},15:function(e,t,n){n(22);var i=n(0)(n(18),n(26),null,null);e.exports=i.exports},16:function(e,t,n){n(23);var i=n(0)(null,n(27),null,null);e.exports=i.exports},161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=(n(2),n(76)),l=n.n(i),s=n(36),a=n.n(s),r=n(313),c=n.n(r),o=n(15),u=n.n(o),d=n(4),v=n.n(d);t.default={components:{Alert:l.a,Group:a.a,XSwitch:c.a,Cell:u.a,HbHead:v.a},data:function(){return{show:!1,show1:!1,show2:!1}},methods:{onHide:function(){console.log("on hide")},onShow:function(){console.log("on show")},showPlugin:function(){this.$vux.alert.show({title:"VUX is Cool",content:"哈哈哈",onShow:function(){console.log("Plugin: I'm showing")},onHide:function(){console.log("Plugin: I'm hiding now")}})},showPluginAuto:function(){var e=this;this.showPlugin(),setTimeout(function(){e.$vux.alert.hide()},3e3)}}}},18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(16),l=n.n(i),s=n(6);t.default={components:{InlineDesc:l.a},props:{title:String,value:[String,Number,Array],isLink:Boolean,isLoading:Boolean,inlineDesc:[String,Number],primary:{type:String,default:"title"},link:{type:[String,Object]},valueAlign:String},methods:{onClick:function(){n.i(s.a)(this.link,this.$router)}}}},22:function(e,t){},223:function(e,t){},229:function(e,t){},23:function(e,t){},26:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"weui-cell",class:{"vux-tap-active":e.isLink||!!e.link,"weui-cell_access":e.isLink||!!e.link},on:{click:e.onClick}},[n("div",{staticClass:"weui-cell__hd"},[e._t("icon")],2),e._v(" "),n("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===e.primary&&"left"!==e.valueAlign}},[n("p",[e.title?n("label",{staticClass:"vux-label",style:{width:e.$parent.labelWidth,textAlign:e.$parent.labelAlign,marginRight:e.$parent.labelMarginRight}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e._t("after-title")],2),e._v(" "),n("inline-desc",[e._v(e._s(e.inlineDesc))])],1),e._v(" "),n("div",{staticClass:"weui-cell__ft",class:{"vux-cell-primary":"content"===e.primary||"left"===e.valueAlign,"vux-cell-align-left":"left"===e.valueAlign}},[e._t("value"),e._v(" "),e._t("default",[e._v(e._s(e.value))]),e._v(" "),e.isLoading?n("i",{staticClass:"weui-loading"}):e._e()],2),e._v(" "),e._t("child")],2)},staticRenderFns:[]}},27:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"vux-label-desc"},[e._t("default")],2)},staticRenderFns:[]}},273:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mainWarp"},[n("hb-head",{attrs:{headfont:"alert弹窗"}}),e._v(" "),n("group",{attrs:{title:"prop:content"}},[n("x-switch",{attrs:{title:"显示"},model:{value:e.show2,callback:function(t){e.show2=t},expression:"show2"}})],1),e._v(" "),n("div",[n("alert",{attrs:{title:"温馨提示",content:"这里是内容了"},model:{value:e.show2,callback:function(t){e.show2=t},expression:"show2"}})],1),e._v(" "),n("group",{attrs:{title:"插件"}},[n("cell",{attrs:{title:"显示","is-link":""},nativeOn:{click:function(t){e.showPlugin(t)}}}),e._v(" "),n("cell",{attrs:{title:"3S后关闭","is-link":""},nativeOn:{click:function(t){e.showPluginAuto(t)}}})],1)],1)},staticRenderFns:[]}},283:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vux-x-switch weui-cell weui-cell_switch"},[n("div",{staticClass:"weui-cell__bd"},[n("label",{staticClass:"weui-label",style:e.labelStyle,domProps:{innerHTML:e._s(e.title)}}),e._v(" "),e.inlineDesc?n("inline-desc",[e._v(e._s(e.inlineDesc))]):e._e()],1),e._v(" "),n("div",{staticClass:"weui-cell__ft"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"weui-switch",attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:Array.isArray(e.currentValue)?e._i(e.currentValue,null)>-1:e.currentValue},on:{__c:function(t){var n=e.currentValue,i=t.target,l=!!i.checked;if(Array.isArray(n)){var s=e._i(n,null);l?s<0&&(e.currentValue=n.concat(null)):s>-1&&(e.currentValue=n.slice(0,s).concat(n.slice(s+1)))}else e.currentValue=l}}})])])},staticRenderFns:[]}},313:function(e,t,n){n(229);var i=n(0)(n(148),n(283),null,null);e.exports=i.exports},91:function(e,t,n){n(223);var i=n(0)(n(161),n(273),null,null);e.exports=i.exports}},[123]);