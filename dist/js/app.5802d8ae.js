(function(e){function t(t){for(var n,s,i=t[0],u=t[1],c=t[2],l=0,d=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);g&&g(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},s={app:0},o={app:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-6fb2d7cc":"d4268202","chunk-ff23ca0e":"46f0e256","chunk-3ed12b12":"a806069e","chunk-eb114338":"64e90583"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-6fb2d7cc":1,"chunk-ff23ca0e":1,"chunk-3ed12b12":1,"chunk-eb114338":1};s[e]?t.push(s[e]):0!==s[e]&&r[e]&&t.push(s[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-6fb2d7cc":"812ee4f2","chunk-ff23ca0e":"2360c743","chunk-3ed12b12":"91f2a910","chunk-eb114338":"d914a1e7"}[e]+".css",o=u.p+n,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var c=a[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===n||l===o)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var n=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete s[e],g.parentNode.removeChild(g),r(a)},g.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(g)})).then((function(){s[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=a);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(g);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,r[1](d)}o[e]=void 0}};var g=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var g=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("a79d");var n=r("7a23"),s=r("bc3a"),o=r.n(s),a={install:e=>{const t=o.a.create({baseURL:e.config.globalProperties.$store.state.serverUrl,timeout:5e3});t.interceptors.request.use(t=>{console.log(t);const r=t;if(t.url.length)r.url=t.url.indexOf("http")>=0?t.url:"http://"+t.url;else{const n=e.config.globalProperties.$store.state.authToken;n&&(r.headers.Authorization="Bearer "+n,"get"===t.method&&(r.params={request:{...t.params}}))}return r},e=>Promise.reject(e)),t.interceptors.response.use(e=>e,t=>(t.response&&t.response.status&&401===t.response.status&&(e.config.globalProperties.$router.push({name:"Login"}),e.config.globalProperties.$store.commit("signOut")),Promise.reject(t))),Object.assign(e.config.globalProperties,{$http:t})}},i={install:e=>{const t=o.a.create({baseURL:e.config.globalProperties.$store.state.serverUrl,timeout:5e3});t.interceptors.request.use(t=>{const r=t,n=e.config.globalProperties.$store.state.authToken;return n&&(r.headers.Authorization="Bearer "+n,"get"===t.method&&(r.params={request:{...t.params}})),e.config.globalProperties.$store.state.widgets.length||(r.timeout=0),r},e=>Promise.reject(e)),t.interceptors.response.use(e=>e,t=>(t.response&&t.response.status&&401===t.response.status&&(e.config.globalProperties.$router.push({name:"Login"}),e.config.globalProperties.$store.commit("signOut")),Promise.reject(t))),Object.assign(e.config.globalProperties,{$server:t})}},u={install:e=>{const t=o.a.create({timeout:5e3});t.interceptors.request.use(e=>{const t=e;return t.url=e.url.indexOf("http")>=0?e.url:"http://"+e.url,t},e=>Promise.reject(e)),Object.assign(e.config.globalProperties,{$controller:t})}};const c={class:"wrapper flex justify-center w-full dark:bg-1b2"};function l(e,t,r,s,o,a){const i=Object(n["z"])("router-view");return Object(n["s"])(),Object(n["e"])("div",c,[Object(n["i"])("div",{class:["flex justify-center overflow-hidden",{"bg-main":"Login"!==e.$route.name&&!a.isDarkTheme,"py-12":!["Groups","Favourites"].includes(e.$route.name),"pb-12":["Groups","Favourites"].includes(e.$route.name)}]},[Object(n["i"])(i)],2)])}r("b972"),r("fb6a");var d={computed:{isDarkTheme(){return this.$store.state.isDarkTheme}},watch:{$route(e){document.title=e.meta.title?"EVO Controls | "+e.meta.title:"EVO Controls"}},created(){"1"===localStorage.isDarkTheme&&this.$store.commit("toggleDarkTheme",!0),this.$store.commit("setAxiosServer",{server:this.$server,controller:this.$controller}),this.checkAuth()},mounted(){window.addEventListener("mouseup",()=>{this.$store.commit("toggleTapTrigger")})},methods:{checkAuth(){const e=localStorage.getItem("token");e?this.$store.commit("signIn",e):"Login"!==this.$route.name&&this.$router.push({name:"Login"})}}};d.render=l;var g=d,p=r("9483");Object(p["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var m=r("6c02"),h=r("5502"),f=r("ade3");class b{constructor(e,t){if(Object(f["a"])(this,"types",{temp_regulator_button:"getDimmerParams",bar_button:"getDimmerParams",open_close_button:"getSwitcherParams",binary_button:"getSwitcherParams"}),this.widget=e,this.changingParams=t,this.type=this.types[e.widget_type_naim],this.controllerOrigin=e.controller_ip,!this.types)return null}getParams(e){const t=this[this.type](e);return e?t.params=JSON.stringify(t.params):t.params.value=t.params.value.toString(),t}getDimmerParams(e){return{url:e?this.controllerOrigin+"/api/set_opwm":"",params:e?{device:0,addr:parseInt(this.widget.vuh_number,10)-1,value:100*this.changingParams.value}:{mode:"set_opwm",controller_id:this.widget.controller_id,pwm_id:this.widget.vuh_number,value:100*this.changingParams.value}}}getSwitcherParams(e){return{url:e?this.controllerOrigin+"/api/set_obin":"",params:e?{device:0,addr:parseInt(this.widget.vuh_number,10)-1,value:this.changingParams.value}:{mode:"set_bin",controller_id:this.widget.controller_id,bin_id:this.widget.vuh_number,value:this.changingParams.value}}}}const v=['meta[name="theme-color"]','meta[name="apple-mobile-web-app-status-bar-style"]','meta[name="msapplication-navbutton-color"]'].join(", ");var w=e=>{const t=e?"#233653":"#4796f6";document.head.querySelectorAll(v).forEach(e=>{e.setAttribute("content",t)})},k=Object(h["a"])({state:{tapTrigger:0,isBottomMenuOpen:!1,isDarkTheme:!1,authToken:null,serverUrl:"/application_api.php",temperature:null,widgets:[],groups:[],groupId:null,currentWidgets:[],server:null,controller:null,queries:[],isSendingData:!1,isFirstLoaded:!1,prevValues:localStorage.getItem("prevValues")?JSON.parse(localStorage.getItem("prevValues")):{}},mutations:{toggleTapTrigger(e){e.tapTrigger=Math.random()},toggleBottomMenu(e,t){e.isBottomMenuOpen=t},toggleDarkTheme(e,t){e.isDarkTheme=t,t?(document.querySelector("html").classList.add("dark"),localStorage.setItem("isDarkTheme",1)):(document.querySelector("html").classList.remove("dark"),localStorage.setItem("isDarkTheme",0)),w(t)},setAxiosServer(e,t){Object.assign(e,t)},signIn(e,t){e.authToken=t,localStorage.setItem("token",t)},signOut(e){e.authToken=null,localStorage.removeItem("token")},setTemperature(e,t){e.temperature=t},setWidgets(e,t){e.widgets=t.map((e,t)=>Object.assign(e,{indexes:[t]}))},setGroups(e,t){e.groups=t},setGroupId(e,t){e.groupId=t},setCurrentWidgets(e,t){if(!t&&(!e.groups.length||!e.groupId))return;const r=t?e.widgets.filter(e=>"1"===e.favorite):e.widgets.filter(t=>t.group_id===e.groupId);e.currentWidgets=r.map((e,t)=>Object.assign(e,{indexes:[e.indexes[0],t]})),e.isFirstLoaded=!0},clearCurrentWidgets(e){e.currentWidgets=[]},setWidgetParams(e,{indexes:t,...r}){Object.assign(e.widgets[t[0]],r);const n=e.widgets[t[0]].widget_id,s=e.currentWidgets.findIndex(e=>e.widget_id===n);s>=0&&Object.assign(e.currentWidgets[s],r)},addQuery(e,t){e.queries.push(t)},startSending(e){e.isSendingData=!0},stopSending(e){e.isSendingData=!1},cleanQueries(e,{index:t,param:r}){e.queries=e.queries.filter(e=>e.index!==t||!(r in e))},setPrevValue(e,{widgetId:t,value:r}){e.prevValues[t]=r,localStorage.setItem("prevValues",JSON.stringify(e.prevValues))}},actions:{setWidgets({commit:e},{widgets:t,isFavouritePage:r}){e("setWidgets",t),e("setCurrentWidgets",r)},setGroups({commit:e,state:t,dispatch:r},{groups:n,isFavouritePage:s}){e("setGroups",n),!t.groupId&&n.length?r("setGroupId",{id:n[0].id,isFavouritePage:s}):s||e("setCurrentWidgets")},setGroupId({commit:e},{id:t,isFavouritePage:r}){e("setGroupId",t),r||e("setCurrentWidgets")},setWidgetParams({commit:e,state:t,dispatch:r},n){e("setWidgetParams",n);const s=Object.keys(n).find(e=>["value","isActive","color"].includes(e));e("addQuery",{index:n.indexes[0],[s]:n[s]}),t.isSendingData||(e("startSending"),r("sendData"))},async sendData({state:e,commit:t,dispatch:r}){const n=e.queries[0],{index:s,...o}=n,a=Object.keys(o)[0];e.queries.forEach(e=>{n.index===e.index&&a in e&&(o[a]=e[a])}),t("cleanQueries",{index:s,param:a});const i=e.widgets[s];let u;const c=new b(i,o);if(c){if("controller_ip"in i&&i.controller_ip.length){const e=c.getParams(!0);u=await r("makeRequest",{source:"controller",requestParams:e})}if(!u){const e=c.getParams(!1);await r("makeRequest",{source:"server",requestParams:e})}e.queries.length?r("sendData"):t("stopSending")}else console.error("That widget type not found")},makeRequest({state:e},{source:t,requestParams:r}){const{url:n,params:s}=r;return new Promise(r=>{e[t].post(n,s).then(()=>r(!0)).catch(()=>r(!1))})}},modules:{}});window.testStore=null;const P=[{path:"/login",name:"Login",component:()=>r.e("chunk-6fb2d7cc").then(r.bind(null,"a55b")),meta:{title:"Авторизация"}},{path:"/intro",name:"Intro",component:()=>Promise.all([r.e("chunk-ff23ca0e"),r.e("chunk-eb114338")]).then(r.bind(null,"9d47")),meta:{title:"Информация"}},{path:"/groups",name:"Groups",component:()=>Promise.all([r.e("chunk-ff23ca0e"),r.e("chunk-3ed12b12")]).then(r.bind(null,"e248")),meta:{title:"Панель управления | Все устройства"}},{path:"/favourites",name:"Favourites",component:()=>Promise.all([r.e("chunk-ff23ca0e"),r.e("chunk-3ed12b12")]).then(r.bind(null,"e248")),meta:{title:"Панель управления | Избранное"}}],y=Object(m["a"])({history:Object(m["b"])(),routes:P});y.beforeEach((e,t,r)=>{if(!e.name)return void r({name:"Login"});const n=k.state.authToken;n&&["Login"].includes(e.name)?r({name:"Groups"}):r()});var O=y;Object(n["d"])(g).use(k).use(O).use(a).use(i).use(u).mixin({methods:{clone(e){return JSON.parse(JSON.stringify(e))}}}).mount("#app")},fb6a:function(e,t,r){}});