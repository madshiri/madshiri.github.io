webpackJsonp([1],{202:function(t,n,e){"use strict";function r(t){e(203)}var a=e(58),i=e(204),s=e(9),o=r,c=s(a.a,i.a,!1,o,"data-v-239a319a",null);n.a=c.exports},203:function(t,n){},204:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nav-column"},[e("div",{staticClass:"title has-text-centered"},[t._v("\n    "+t._s(t.contents.name)+"\n  ")]),t._v(" "),e("img",{staticClass:"profile",attrs:{src:t.contents.image}}),t._v(" "),e("vue-markdown",{staticClass:"content has-text-centered",attrs:{source:t.contents.shortcontact}})],1)},a=[],i={render:r,staticRenderFns:a};n.a=i},205:function(t,n,e){"use strict";var r=e(59),a=e(206),i=e(9),s=i(r.a,a.a,!1,null,null,null);n.a=s.exports},206:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"publications"},[e("h3",[t._v("Publications")]),t._v(" "),e("ul",t._l(t.publications.slice().reverse(),function(n){return e("li",{key:n.title,staticClass:"publication"},[e("strong",[t._v("\n        "+t._s(n.title)+"\n      ")]),t._v(" "),e("br"),t._v(" "),e("vue-markdown",{staticClass:"is-size-7",attrs:{source:t.emphasizeMe(n.authors)}}),t._v(" "),e("span",{staticClass:"is-size-7"},[e("em",[t._v(t._s(n.booktitle)+" ("+t._s(n.shortBooktitle)+")")])]),t._v(" "),e("br"),t._v(" "),e("vue-markdown",{staticClass:"is-size-7",attrs:{source:n.links}})],1)}))])},a=[],i={render:r,staticRenderFns:a};n.a=i},207:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"index"},[e("div",{staticClass:"header-column is-padding-vertical-4"},[e("div",{staticClass:"is-padding-horizontal-2"},[e("nav-column",{attrs:{contents:t.contents}})],1)]),t._v(" "),e("div",{staticClass:"body-column is-padding-vertical-4 content"},[e("div",{staticClass:"is-padding-horizontal-2"},[t._l(t.contents.body,function(n){return e("div",{key:n},["publications"===n?e("publications",{staticClass:"is-padding-bottom-4",attrs:{contents:t.contents,publications:t.publications}}):e("vue-markdown",{staticClass:"is-padding-bottom-4",attrs:{source:t.contents[n]}})],1)}),t._v(" "),t._m(0)],2)])])},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"credit"},[t._v(""),e("a",{attrs:{href:"",target:"_blank"}},[t._v("")])])}],i={render:r,staticRenderFns:a};n.a=i},208:function(t,n,e){"use strict";function r(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,e){function r(a,i){try{var s=n[a](i),o=s.value}catch(t){return void e(t)}if(!s.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});t(o)}return r("next")})}}function s(t,n){switch((t||"").trim().toLowerCase()){case"json":try{return JSON.parse(n)}catch(t){return console.error("JSON Parse Failed: ",t,n),"JSON Parse Failed"}case"sheet":return getSheet(n);default:return n}}function o(t){return t.values.map(function(t){return s(t[1],t[2])}).reduce(function(n,e,r){return Object.assign({},n,a({},t.values[r][0],e))},{})}function c(t){var n=t.values[0].map(function(t){return Object(f.camelize)(t)});return t.values.slice(1).reduce(function(t,e){return[].concat(r(t),[e.reduce(function(t,e,r){return Object.assign({},t,a({},n[r],e))},{})])},[])}e.d(n,"a",function(){return b});var u=e(19),l=e.n(u),f=e(209),d=(e.n(f),e(210)),v=function(){var t=i(l.a.mark(function t(n,e){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.getContent(m,n,e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(n,e){return t.apply(this,arguments)}}(),p=window.__PAW_CONFIG__,h=p.googleApiKey,m=p.googleSheetDocId;d.a.setKey(h);var b=function(){var t=i(l.a.mark(function t(){var n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([v("Index","A3:C"),v("Publications","A2:E")]);case 2:return n=t.sent,t.abrupt("return",{index:o(n[0]),publications:c(n[1])});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},210:function(t,n,e){"use strict";function r(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,e){function r(a,i){try{var s=n[a](i),o=s.value}catch(t){return void e(t)}if(!s.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});t(o)}return r("next")})}}function a(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var i=e(19),s=e.n(i),o=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}(),c=function(){function t(){a(this,t),this.key=null}return o(t,[{key:"validateKey",value:function(){if(null===this.key)throw Error("Use setKey(key) method to set API key for using Google API first.")}},{key:"setKey",value:function(t){this.key=t}},{key:"getContent",value:function(){function t(t,e,r){return n.apply(this,arguments)}var n=r(s.a.mark(function t(n,e,r){var a,i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.validateKey(),a="https://sheets.googleapis.com/v4/spreadsheets/"+n+"/values/"+e+"!"+r+"?key="+this.key,t.next=4,fetch(a);case 4:return i=t.sent,t.abrupt("return",i.json());case 6:case"end":return t.stop()}},t,this)}));return t}()}]),t}();n.a=new c},211:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app"},[t.loading?e("div",{staticClass:"spinner container"},[t._m(0)]):e("index",{attrs:{loading:t.loading,contents:t.contents.index,publications:t.contents.publications}})],1)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"has-text-centered is-padding-8"},[e("i",{staticClass:"fa fa-circle-o-notch fa-spin"}),t._v(" Loading...\n    ")])}],i={render:r,staticRenderFns:a};n.a=i},33:function(t,n,e){"use strict";function r(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,e){function r(a,i){try{var s=n[a](i),o=s.value}catch(t){return void e(t)}if(!s.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});t(o)}return r("next")})}}var a=e(19),i=e.n(a),s=e(75),o=e(208);n.a={name:"app",components:{Index:s.a},data:function(){return{loading:!1,contents:{}}},created:function(){this.loadContents()},methods:{loadContents:function(){function t(){return n.apply(this,arguments)}var n=r(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,Object(o.a)();case 3:this.contents=t.sent,document.title=this.contents.index.name,this.loading=!1;case 6:case"end":return t.stop()}},t,this)}));return t}()}}},34:function(t,n,e){"use strict";var r=e(20),a=e.n(r),i=e(202),s=e(205);n.a={name:"index",props:["loading","contents","publications"],components:{VueMarkdown:a.a,NavColumn:i.a,Publications:s.a},data:function(){return{}},methods:{},watch:{}}},58:function(t,n,e){"use strict";var r=e(20),a=e.n(r);n.a={name:"nav-column",props:["contents"],components:{VueMarkdown:a.a}}},59:function(t,n,e){"use strict";var r=e(20),a=e.n(r);n.a={name:"publications",props:["contents","publications"],components:{VueMarkdown:a.a},data:function(){return{}},methods:{emphasizeMe:function(t){return t.replace(this.contents.name,"**"+this.contents.name+"**")}}}},60:function(t,n,e){e(61),t.exports=e(66)},61:function(t,n,e){window.Promise||(window.Promise=e(62)),Object.assign=e(65)},66:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(67),a=e(68);r.a.config.productionTip=!1,new r.a({el:"#app",render:function(t){return t(a.a)}})},68:function(t,n,e){"use strict";function r(t){e(69),e(70),e(71),e(72)}var a=e(33),i=e(211),s=e(9),o=r,c=s(a.a,i.a,!1,o,null,null);n.a=c.exports},72:function(t,n){},75:function(t,n,e){"use strict";function r(t){e(76)}var a=e(34),i=e(207),s=e(9),o=r,c=s(a.a,i.a,!1,o,"data-v-3530fdca",null);n.a=c.exports},76:function(t,n){}},[60]);
//# sourceMappingURL=client.11cf6a62.js.map
