/*!build time : 2013-10-30 1:05:21 AM*/
KISSY.add("gallery/storage/1.0/conf",function(){var a=location.href.indexOf("if-debug=1")>-1,b=location.href.indexOf("if-debug-log=1")>-1,c="http://gm.mmstat.com",d="http://log.mmstat.com/ued.1.1.2?type=9&_gm:id=storage&v=1.0",e={DEBUG:a,DEBUG_LOG:b,SAM_PV:.001,TIMEOUT_STORAGE:3e3,PROXY:"http://a.tbcdn.cn/s/kissy/gallery/storage/1.0/proxy.html",PROXY_TMALL:"http://www.tmall.com/go/act/stp-tm.php",PROXY_TAOBAO:"http://www.taobao.com/go/act/stp-tb.php",M:{G:d+"&t=g&d={0}",P:d+"&t=p&d={0}"},ARR:{ST_SET:c+"/tmallbrand.999.5",ST_GET:c+"/tmallbrand.999.6",ST_RM:c+"/tmallbrand.999.7",ST_CL:c+"/tmallbrand.999.8"},K:{IFRAME:"iframe",ONLOAD:"onload",XD:"xd",XD_TIMEOUT:"xdTimeout",IFRAME_TIMEOUT:"iframeTimeout",PROXY:"proxy",CALLBACK_LIST:"callbackList",CACHED_ACTION_LIST:"cachedActionList",PROXY_READY:"proxyReady"}};return e}),KISSY.add("gallery/storage/1.0/util",function(a,b){var c={log:function(){b.DEBUG_LOG&&window.console&&window.console.log&&window.console.log.apply&&window.console.log.apply(window.console,arguments)},fm:function(){if(0==arguments.length)return"";if(1==arguments.length)return arguments[0];var a,b=arguments[0];for(a=1;a<arguments.length;++a){var c=new RegExp("\\{"+(a-1)+"\\}","g");b=b.replace(c,arguments[a])}return b}},d=c;return d.sendLog=function(a){d.send(d.fm(b.M.G,encodeURIComponent(location.href))),d.send(a)},d.send=function(a){if(a){var b="__st_"+ +new Date+Math.random(),c=new Image;window[b]=c,c.src=d.fm("{0}{1}r{2}=1",a,a.indexOf("?")>-1?"&":"?",+new Date),c.onload=function(){window[b]=null}}},d},{requires:["./conf"]}),KISSY.add("gallery/storage/1.0/xd",function(a,b,c){function d(){r?b.on(q,"message",e):u.onMessage(e)}function e(b){var d={};try{d=c.parse(b.data)}catch(e){return}if(h in d&&i in d){var f=d[i];if(f){var g=s[f];if(clearTimeout(g),s[f]=0,!g)return}a.each(t,function(a){a.get(j)(d)})}}function f(a){var b=this;if(++v>1)throw"XD is singleton";b._opt=a,b.init()}var g=0,h="__ga_xd_from",i="__ga_xd_to",j="receive",k="target",l="timeout",m="iframeTimeout",n=10,o=10,p=3e3,q=window,r=q.postMessage,s={},t=[],u={uid:0,hid:-1,q:[],tm:0,postMessage:function(a,b){var c=++u.uid,d=u.q,e={name:+new Date+""+c+"^"+document.domain+"&"+b,uid:c,target:a};d.push(e),u.tm||(u.tm=setInterval(function(){var a=u.q;if(!(0===a.length||a[0].uid<=u.hid)){var b=a[0];u.hid=b.uid,b.target.name=b.name}},o))},onMessage:function(a){function b(){var b=q.name;if(b!==c){u.q.shift(),c=b;var e=d.exec(b);if(!e)return;var f={origin:e[2],data:e[3]};a&&a(f)}}var c="",d=/^(\d+?)\^(.+?)&(.*?)$/;setInterval(b,n)}};d();var v=0;return a.augment(f,{init:function(){var a=this;t.push(a)},send:function(b,d){function f(){var a={};a.origin="*";var d={};d.c=b.c||"",d[h]=0,d[i]=0,a.data=c.stringify(d),e(a)}if(a.isObject(b)){var j=this,n=j.get(k),o=j.get(l)||p,q=++g;d=d||"*",b[i]=b[h]||0,b[h]=q;var t=c.stringify(b);s[q]=setTimeout(function(){s[q]=0,f()},o),j.get(m)?f():r?n.postMessage(t,d):u.postMessage(n,t,d)}},get:function(a){return this._opt[a]},set:function(a,b){this._opt[a]=b}}),f},{requires:["event","json"]}),KISSY.add("gallery/storage/1.0/index",function(a,b,c,d,e,f){if(window.__KS_STORAGE)return window.__KS_STORAGE;var g={},h=0,i=0,j=function(b){if(!(++i>1)){var c=this;b=b||{};var e=b.proxy||d.PROXY;switch(e){case"tmall":e=d.PROXY_TMALL;break;case"taobao":e=d.PROXY_TAOBAO;break;case"common":e=d.PROXY}b.proxy=e,c._opt=a.merge(g,b),c.init()}};return a.augment(j,{init:function(){function b(b){g.setConf(d.K.PROXY_READY,!0);var c=new f({target:h.contentWindow,iframeTimeout:b,timeout:g.getConf(d.K.XD_TIMEOUT),receive:function(a){var b=g.getConf(d.K.CALLBACK_LIST),c=b[a.c];if(c){c(a.v);try{delete b[a.c]}catch(e){}}}});g.setConf(d.K.XD,c);var e=g.getConf(d.K.CACHED_ACTION_LIST);a.each(e,function(a){c.send(a,"*")}),g.setConf(d.K.CACHED_ACTION_LIST,[]);var i=g.getConf(d.K.ONLOAD);i&&i()}function c(){e.log("storage proxy loaded"),clearTimeout(j),j&&setTimeout(function(){b(!1)},100)}var g=this;g.setConf(d.K.CALLBACK_LIST,{}),g.setConf(d.K.CACHED_ACTION_LIST,[]),g.setConf(d.K.PROXY_READY,!1);var h=document.createElement("iframe"),i=h.style;i.display="none";var j=-1;j=setTimeout(function(){j=0,b(!0)},g.getConf(d.K.IFRAME_TIMEOUT)||d.TIMEOUT_STORAGE),h.src=g.getConf(d.K.PROXY),h.attachEvent?h.attachEvent("onload",c):h.onload=c,document.body.appendChild(h)},send:function(b){var c=this,e=c.getConf(d.K.CALLBACK_LIST),f=c.getConf(d.K.CACHED_ACTION_LIST),g=c.getConf(d.K.PROXY_READY);if(b.p="mui/mallbar",a.isFunction(b.success)){var i="token"+ ++h;b.c=i,e[i]=b.success;try{delete b.success}catch(j){}}if(!g)return f.push(b),void 0;var k=c.getConf(d.K.XD);k&&k.send(b)},get:function(a){a=a||{},a.m="get",this.send(a),Math.random()<d.SAM_PV&&e.sendLog(d.ARR.ST_GET)},set:function(a){a=a||{},a.m="set",this.send(a),Math.random()<d.SAM_PV&&e.sendLog(d.ARR.ST_SET)},remove:function(a){a=a||{},a.m="remove",this.send(a),Math.random()<d.SAM_PV&&e.sendLog(d.ARR.ST_RM)},clear:function(a){a=a||{},a.m="clear",this.send(a),Math.random()<d.SAM_PV&&e.sendLog(d.ARR.ST_CL)},getConf:function(a){return this._opt[a]},setConf:function(a,b){this._opt[a]=b}}),window.__KS_STORAGE=j,j},{requires:["event","json","./conf","./util","./xd"]});