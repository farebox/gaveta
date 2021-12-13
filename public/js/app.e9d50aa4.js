(function(e){function t(t){for(var a,i,s=t[0],l=t[1],c=t[2],v=0,f=[];v<s.length;v++)i=s[v],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/gaveta/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push(["8c94","chunk-vendors"]),n()})({"04eb":function(e,t){function n(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frontmatter-markdown"},[n("h1",[e._v("Gaveta.vue")]),e._v(" "),n("h2",[e._v("A flexible drawer for your UI")]),e._v(" "),e._m(0),e._v(" "),n("p",[e._t("default")],2),e._v(" "),n("hr"),e._v(" "),n("h3",[e._v("Reasons to love Gaveta")]),e._v(" "),e._m(1),e._v(" "),n("hr"),e._v(" "),n("h3",[e._v("Using Gaveta")]),e._v(" "),n("h4",[e._v("Installation")]),e._v(" "),e._m(2),e._v(" "),n("h4",[e._v("Basic Usage")]),e._v(" "),e._m(3),e._v(" "),n("h4",[e._v("Customize Styles")]),e._v(" "),e._m(4),e._v(" "),n("h4",[e._v("Use Slots")]),e._v(" "),e._m(5),e._v(" "),e._m(6)])},t=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h4",[e._v("Meet "),n("strong",[e._v("Gaveta")]),e._v(", the open-source and mobile-friendly drawer component bulit for Vue.js. Put anything you want in this drawer and have it animate into and out of your interface beautifully using Vue's transition framework.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("Customizable title and close affordance")]),e._v(" "),n("li",[e._v("Vue2 and Vue3 compatible")]),e._v(" "),n("li",[e._v("Configurable with CSS variables")]),e._v(" "),n("li",[e._v("Mobile optimized sizing, without need to target screen sizes within drawer content")]),e._v(" "),n("li",[e._v("Powered by Vue's transition framework")]),e._v(" "),n("li",[e._v("Uses CSS 3d transforms for hardware acceleration on some devices")]),e._v(" "),n("li",[e._v("Works with any CSS framework")]),e._v(" "),n("li",[e._v("Visibility is fully controlled by parent component")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{pre:!0},[e._v("npm install vue-gaveta\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{pre:!0,attrs:{class:"language-vue"}},[e._v('<template>\n<div>\n  <Gaveta :active="active" @close="active=false">\n    /* Info to show when the drawer is open! */\n  </Gaveta>\n</div>\n</template>\n<script>\nimport Gaveta from \'vue-gaveta\';\nexport default {\n  components: { Gaveta }\n  data() { return { active: false }}\n}\n<\/script>\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{pre:!0,attrs:{class:"language-css"}},[e._v(":root {\n/* drawer background */\n--gaveta-background: purple;\n\n/* main text color */\n--gaveta-color: yellow;\n\n/* interior padding - useful to set to zero if using container helpers */\n--gaveta-padding: 2em;\n\n/* color to fade out background UI - note that solid colors will not be transparent */\n--gaveta-screen: rgba(16, 38, 56, 0.3)\n}\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{pre:!0,attrs:{class:"language-vue"}},[e._v('<Gaveta :active="active" @close="active=false">\n<template v-slot:title>A custom title!</template>\n<template v-slot:close>Pass in anything to click on</template>\n\n<template v-slot:default>Default slot can be implied or defined explicitly</template>\n</Gaveta>\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Created by "),n("a",{attrs:{href:"https://13protons.com"}},[e._v("@13protons")]),e._v(" for "),n("a",{attrs:{href:"https://farebox.io"}},[e._v("Farebox.io")])])}];return{render:e,staticRenderFns:t}}const a=n();e.exports={attributes:{},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=a.render,this.$options.staticRenderFns=a.staticRenderFns}}}}},5580:function(e,t,n){},8524:function(e,t,n){},8825:function(e,t,n){"use strict";n("5580")},"8c94":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"container"},[n("Readme",[n("button",{on:{click:function(t){e.active=!0}}},[e._v("Show Drawer")])]),n("Gaveta",{attrs:{active:e.active},on:{close:function(t){e.active=!1}},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("A flexible drawer for your UI")]},proxy:!0}])},[n("p",[n("strong",[e._v("Gaveta")]),e._v(" is a fully controlled Vue component with a customizable title and close button. ")]),n("p",[e._v(" It's made to work well with your own CSS framework, has thoughtful default styles, and can be customized with CSS variables. ")]),n("div",{staticStyle:{width:"100%",height:"0","padding-bottom":"75%",position:"relative"}},[n("iframe",{staticClass:"giphy-embed",staticStyle:{position:"absolute"},attrs:{src:"https://giphy.com/embed/xT5LMUT8Yy1hjMSZ5C",width:"100%",height:"100%",frameBorder:"0",allowFullScreen:""}})]),n("p",[n("a",{attrs:{href:"https://giphy.com/gifs/season-12-the-simpsons-12x3-xT5LMUT8Yy1hjMSZ5C"}},[e._v("via GIPHY")])]),n("h4",[e._v("This drawer is using the default styles")]),n("pre",[n("code",[e._v(":root {\n  --gaveta-background: white;\n  --gaveta-color: currentColor;\n  --gaveta-padding: 1.25em;\n  --gaveta-screen: rgba(16, 38, 56, 0.3)\n}\n")])])])],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("transition",{attrs:{name:"drawer",appear:""}},[e.active?n("div",{staticClass:"drawer is-medium"},[n("button",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"close-button",class:{"is-default":!e.$slots.close},on:{click:e.close,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.close.apply(null,arguments)}}},[e.$slots.close?[e._t("close")]:[n("svg",{attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}})])]],2),e.$slots.title?[n("h3",{staticClass:"gaveta-title"},[e._t("title")],2)]:e._e(),e._t("default")],2):e._e()]),n("transition",{attrs:{name:"fade",appear:""}},[e.active?n("div",{staticClass:"screen",on:{click:e.close}}):e._e()])],1)},s=[],l={props:{active:{type:Boolean,default:!1}},directives:{focus:{inserted:function(e){e.focus()}}},methods:{close:function(){this.$emit("close")}}},c=l,u=(n("8825"),n("2877")),v=Object(u["a"])(c,i,s,!1,null,"6ac3b08b",null),f=v.exports,p=n("04eb"),d=n.n(p),_=a["a"].extend({name:"ServeDev",components:{Gaveta:f,Readme:d.a.vue.component},data:function(){return{active:!1}}}),h=_,m=(n("cf01"),Object(u["a"])(h,r,o,!1,null,null,null)),b=m.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(b)}}).$mount("#app")},cf01:function(e,t,n){"use strict";n("8524")}});
//# sourceMappingURL=app.e9d50aa4.js.map